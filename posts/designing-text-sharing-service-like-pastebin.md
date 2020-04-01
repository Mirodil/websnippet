---
title: "Designing Text Sharing Service like Pastebin"
description: "Let's design a Pastebin, Pasted, or Chopapp like web service, where users can store plain text. Users of the service will enter a piece of text and get a randomly generated URL to access it."
date: "2020-06-01"
slug: "designing-text-sharing-service-like-pastebin"
categories:
    - "interview"
tags: ["interview"]
thumbnail: ""
image: ""
---

### 1. What is this service Pastebin/Pasted/Chopapp?
Pastebin like services enable users to store plain text or images over the network (typically the Internet) and generate unique URLs to access the uploaded data. Such services are also used to share data over the network quickly, as users would just need to pass the URL to let other users see it.
Please go ahead and check those services to understand them better.

### 2. Requirements and Goals of the System
Our service should meet the following requirements:

Functional Requirements:

- Users should be able to upload or “paste” their data and get a unique URL to access it.
- Users will only be able to upload text.
- Data and links will expire after a specific timespan automatically; users should also be able to specify expiration time.
- Users should optionally be able to pick a custom alias for their paste.

Non-Functional Requirements:

- The system should be highly reliable, any data uploaded should not be lost.
- The system should be highly available. This is required because if our service is down, users will not be able to access their Pastes.
- Users should be able to access their Pastes in real-time with minimum latency.
- Paste links should not be guessable (not predictable).

Extended Requirements:

- Analytics, e.g., how many times a paste was accessed?
- Our service should also be accessible through REST APIs by other services.

### 

3. Some Design Considerations

This service shares some requirements with URL Shortening service, but there are some additional design considerations we should keep in mind.

**What should be the limit on the amount of text user can paste at a time?**  We can limit users not to have Pastes bigger than 10MB to stop the abuse of the service.

**Should we impose size limits on custom URLs?**  Since our service supports custom URLs, users can pick any URL that they like, but providing a custom URL is not mandatory. However, it is reasonable (and often desirable) to impose a size limit on custom URLs, so that we have a consistent URL database.

### 

### 4. Capacity Estimation and Constraints

Our services will be read-heavy; there will be more read requests compared to new Pastes creation. We can assume a 5:1 ratio between read and write.

**Traffic estimates:**  Pastebin services are not expected to have traffic similar to Twitter or Facebook, let’s assume here that we get one million new pastes added to our system every day. This leaves us with five million reads per day.

New Pastes per second:
```
1M / (24 hours * 3600 seconds) ~= 12 pastes/sec
```
Paste reads per second:
```
5M / (24 hours * 3600 seconds) ~= 58 reads/sec
```
**Storage estimates:**  Users can upload maximum 10MB of data; commonly Pastebin like services are used to share source code, configs or logs. Such texts are not huge, so let’s assume that each paste on average contains 10KB.

At this rate, we will be storing 10GB of data per day.
```
1M * 10KB => 10 GB/day
```
If we want to store this data for ten years we would need the total storage capacity of 36TB.

With 1M pastes every day we will have 3.6 billion Pastes in 10 years. We need to generate and store keys to uniquely identify these pastes. If we use base64 encoding ([A-Z, a-z, 0-9, ., -]) we would need six letters strings:
```
64^6 ~= 68.7 billion unique strings
```
If it takes one byte to store one character, total size required to store 3.6B keys would be:
```
3.6B * 6 => 22 GB
```
22GB is negligible compared to 36TB. To keep some margin, we will assume a 70% capacity model (meaning we don’t want to use more than 70% of our total storage capacity at any point), which raises our storage needs to 51.4TB.

**Bandwidth estimates:**  For write requests, we expect 12 new pastes per second, resulting in 120KB of ingress per second.
```
12 * 10KB => 120 KB/s
```
As for the read request, we expect 58 requests per second. Therefore, total data egress (sent to users) will be 0.6 MB/s.
```
58 * 10KB => 0.6 MB/s
```
Although total ingress and egress are not big, we should keep these numbers in mind while designing our service.

**Memory estimates:**  We can cache some of the hot pastes that are frequently accessed. Following the 80-20 rule, meaning 20% of hot pastes generate 80% of traffic, we would like to cache these 20% pastes

Since we have 5M read requests per day, to cache 20% of these requests, we would need:
```
0.2 * 5M * 10KB ~= 10 GB
```
### 

### 5. System APIs

We can have SOAP or REST APIs to expose the functionality of our service. Following could be the definitions of the APIs to create/retrieve/delete Pastes:

```
createPaste(api_dev_key, paste_data, custom_url=None user_name=None, paste_name=None, expire_date=None)
```

**Parameters:**  
api_dev_key (string): The API developer key of a registered account. This will be used to, among other things, throttle users based on their allocated quota.  
paste_data (string): Textual data of the paste.  
custom_url (string): Optional custom URL.  
user_name (string): Optional user name to be used to generate URL.  
paste_name (string): Optional name of the paste  
expire_date (string): Optional expiration date for the paste.

**Returns:**  (string)  
A successful insertion returns the URL through which the paste can be accessed, otherwise, it will return an error code.

Similarly, we can have retrieve, update and delete Paste APIs:

```
getPaste(api_dev_key, api_paste_key)
putPaste(api_dev_key, id, paste_data, user_name=None, paste_name=None, expire_date=None)
```
Where “api_paste_key” is a string representing the Paste Key of the paste to be retrieved. This API will return the textual data of the paste.

```
deletePaste(api_dev_key, api_paste_key)
```

A successful deletion returns `true` otherwise returns `false`.

### 

### 6. Database Design
A few observations about the nature of the data we are storing:

- We need to store billions of records.
- Each metadata object we are storing would be small (less than 1KB).
- Each paste object we are storing can be of medium size (it can be a few MB).
- There are no relationships between records, except if we want to store which user created what Paste.
- Our service is read-heavy.


#### Database Schema:

We would need two tables, one for storing information about the Pastes and the other for users’ data.

Paste:
	- URLHash varchar
	- ContentKey varchar
	- ExpirationDate datetime
	- UserID int
	- CreationDate datetime

User:
	- UserID int
	- Name varchar
	- Email varchar
	- CreationDate datetime
	- LastLogin datetime

Here, `URlHash` is the URL equivalent of the TinyURL and `ContentKey` is a reference to an external object storing the contents of the paste; we’ll discuss the external storage of the paste contents later in the chapter.

### 7. High Level Design

At a high level, we need an application layer that will serve all the read and write requests. Application layer will talk to a storage layer to store and retrieve data. We can segregate our storage layer with one database storing metadata related to each paste, users, etc., while the other storing the paste contents in some object storage (like [Amazon S3](https://en.wikipedia.org/wiki/Amazon_S3)). This division of data will also allow us to scale them individually.
```
[Client] --------- [App Server] ------- [Object Storage]
					  |
					  |
			  [metadata storgae]
```

### 8. Component Design

#### a. Application layer

Our application layer will process all incoming and outgoing requests. The application servers will be talking to the backend data store components to serve the requests.

**How to handle a write request?**  Upon receiving a write request, our application server will generate a six-letter random string, which would serve as the key of the paste (if the user has not provided a custom key). The application server will then store the contents of the paste and the generated key in the database. After the successful insertion, the server can return the key to the user. One possible problem here could be that the insertion fails because of a duplicate key. Since we are generating a random key, there is a possibility that the newly generated key could match an existing one. In that case, we should regenerate a new key and try again. We should keep retrying until we don’t see failure due to the duplicate key. We should return an error to the user if the custom key they have provided is already present in our database.

Another solution of the above problem could be to run a standalone  **Key Generation Service**  (KGS) that generates random six letters strings beforehand and stores them in a database (let’s call it key-DB). Whenever we want to store a new paste, we will just take one of the already generated keys and use it. This approach will make things quite simple and fast since we will not be worrying about duplications or collisions. KGS will make sure all the keys inserted in key-DB are unique. KGS can use two tables to store keys, one for keys that are not used yet and one for all the used keys. As soon as KGS gives some keys to an application server, it can move these to the used keys table. KGS can always keep some keys in memory so that whenever a server needs them, it can quickly provide them. As soon as KGS loads some keys in memory, it can move them to the used keys table, this way we can make sure each server gets unique keys. If KGS dies before using all the keys loaded in memory, we will be wasting those keys. We can ignore these keys given that we have a huge number of them.

**Isn’t KGS a single point of failure?**  Yes, it is. To solve this, we can have a standby replica of KGS and whenever the primary server dies it can take over to generate and provide keys.

**Can each app server cache some keys from key-DB?**  Yes, this can surely speed things up. Although in this case, if the application server dies before consuming all the keys, we will end up losing those keys. This could be acceptable since we have 68B unique six letters keys, which are a lot more than we require.

**How does it handle a paste read request?**  Upon receiving a read paste request, the application service layer contacts the datastore. The datastore searches for the key, and if it is found, returns the paste’s contents. Otherwise, an error code is returned.

#### b. Datastore layer
We can divide our datastore layer into two:

1.  Metadata database: We can use a relational database like MySQL or a Distributed Key-Value store like Dynamo or Cassandra.
2.  Object storage: We can store our contents in an Object Storage like Amazon’s S3. Whenever we feel like hitting our full capacity on content storage, we can easily increase it by adding more servers.

```
[client]--->[load balancer]--->[app server]--->[load balancer]--->[object storage]
									↑				  |					↓
									|				  |---------->[block cache]
									|				  |		  
						[key generation service]	  |---------->[metadata cache]
									|				  |				    ↑
									|				  |---------->[metadata storage]
								    ↓									↑
			[key-db(stend by)]--[key-db]<------[cleanup service]--------|
```

### 9. Purging or DB Cleanup
If a user-specified expiration time is reached, what should happen to the link?

If we chose to actively search for expired links to remove them, it would put a lot of pressure on our database. Instead, we can slowly remove expired links and do a lazy cleanup. Our service will make sure that only expired links will be deleted, although some expired links can live longer but will never be returned to users.

Whenever a user tries to access an expired link, we can delete the link and return an error to the user. A separate Cleanup service can run periodically to remove expired links from our storage and cache. This service should be very lightweight and can be scheduled to run only when the user traffic is expected to be low. We can have a default expiration time for each link (e.g., two years). After removing an expired link, we can put the key back in the key-DB to be reused. Should we remove links that haven’t been visited in some length of time, say six months? This could be tricky. Since storage is getting cheap, we can decide to keep links forever.

### 10. Data Partitioning and Replication
To scale out our DB, we need to partition it so that it can store information about billions of pastes. We need to come up with a partitioning scheme that would divide and store our data into different DB servers.

**a. Range Based Partitioning**: We can store metadata in separate partitions based on the first letter of the hash key. Hence we save all the URLs starting with letter ‘A’ (and ‘a’) in one partition, save those that start with letter ‘B’ in another partition and so on. This approach is called range-based partitioning. We can even combine certain less frequently occurring letters into one database partition. We should come up with a static partitioning scheme so that we can always store/find a URL in a predictable manner.

The main problem with this approach is that it can lead to unbalanced DB servers. For example, we decide to put all URLs starting with letter ‘E’ into a DB partition, but later we realize that we have too many URLs that start with the letter ‘E’.

**b. Hash-Based Partitioning**: In this scheme, we take a hash of the object we are storing. We then calculate which partition to use based upon the hash. In our case, we can take the hash of the ‘key’ or the short link to determine the partition in which we store the data object.

Our hashing function will randomly distribute URLs into different partitions (e.g., our hashing function can always map any ‘key’ to a number between [1…256]), and this number would represent the partition in which we store our object.

This approach can still lead to overloaded partitions, which can be solved by using Consistent Hashing.

### 11.  Load Balancer
We can add a Load balancing layer at three places in our system:

Between Clients and Application servers Between Application Servers and database servers Between Application Servers and Cache servers Initially, we could use a simple Round Robin approach that distributes incoming requests equally among backend servers. This LB is simple to implement and does not introduce any overhead. Another benefit of this approach is that if a server is dead, LB will take it out of the rotation and will stop sending any traffic to it.

A problem with Round Robin LB is that we don’t take the server load into consideration. If a server is overloaded or slow, the LB will not stop sending new requests to that server. To handle this, a more intelligent LB solution can be placed that periodically queries the backend server about its load and adjusts traffic based on that.

### 12. Cache

We can cache URLs that are frequently accessed. We can use some off-the-shelf solution like Memcached, which can store full URLs with their respective hashes. The application servers, before hitting backend storage, can quickly check if the cache has the desired URL.

How much cache memory should we have? We can start with 20% of daily traffic and, based on clients’ usage pattern, we can adjust how many cache servers we need. As estimated above, we need 170GB memory to cache 20% of daily traffic. Since a modern-day server can have 256GB memory, we can easily fit all the cache into one machine. Alternatively, we can use a couple of smaller servers to store all these hot URLs.

Which cache eviction policy would best fit our needs? When the cache is full, and we want to replace a link with a newer/hotter URL, how would we choose? Least Recently Used (LRU) can be a reasonable policy for our system. Under this policy, we discard the least recently used URL first. We can use a Linked Hash Map or a similar data structure to store our URLs and Hashes, which will also keep track of the URLs that have been accessed recently.

To further increase the efficiency, we can replicate our caching servers to distribute the load between them.

How can each cache replica be updated? Whenever there is a cache miss, our servers would be hitting a backend database. Whenever this happens, we can update the cache and pass the new entry to all the cache replicas. Each replica can update its cache by adding the new entry. If a replica already has that entry, it can simply ignore it.


