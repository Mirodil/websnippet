---
title: "Introduction fetch API - the new AJAX"
description: "The Fetch API provides an interface for fetching resources (e.g., across the network.) It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set."
date: "2015-06-07T16:08:56.339Z"
lastmod: "2015-06-07T16:12:00.602Z"
slug: "introduction-fetch-api-the-new-ajax"
categories: ["Web-Development", "Development"]
tags: ["JavaScript"]
thumbnail: "https://2.bp.blogspot.com/-k0RYC7NXty4/WhDKfhg_TnI/AAAAAAAAD20/4PH54d0axJEQkfOHzsnKaFAnjvpOVFMrwCLcBGAs/s400/1433693516339_zpsor3v2pza.png"
image: "https://2.bp.blogspot.com/-k0RYC7NXty4/WhDKfhg_TnI/AAAAAAAAD20/4PH54d0axJEQkfOHzsnKaFAnjvpOVFMrwCLcBGAs/s1600/1433693516339_zpsor3v2pza.png"
source: ""
---


Fetch provides a generic definition of [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) and [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) objects. This will allow them to be used whether it’s for service workers, Cache API and other similar things that handle or modify requests and responses, or any kind of use case that might require you to generate your own responses programmatically. It also provides a definition for related concepts such as CORS and the HTTP origin header semantics, supplanting their separate definitions elsewhere. 

fetch() allows you to make network requests similar to XMLHttpRequest (XHR). The main difference is that the Fetch API uses Promises, which enables a simpler and cleaner API, avoiding callback hell and having to remember the complex API of XMLHttpRequest.

## Basic Fetch Request

A fetch function is now provided in the global window scope, with the first argument being the URL:

    // url (required), options (optional)
    fetch('/some/url').then(function(response) {
    	// todo
    }).catch(function(err) {
    	// Error :(
    });

## Handling JSON

Let's say your service gets JSON as response, the resulting callback data has a `json` method for converting the raw data to a JavaScript object:

    fetch('/some/url/json')
    .then(function(response) { 
    	// Convert to JSON
    	return response.json();
    }).then(function(j) {
    	// a JavaScript object
    	console.log(j); 
    });

## Handling Basic Text Responses

Let's say your service gets HTML template as response, so here's how you can work with an HTML or text response:

    fetch('/some/url')
    .then(function(response) { 
    	// Convert to text
    	return response.text();
    }).then(function(txt) {
    	// String
    	console.log(txt); 
    });

You can get the response text via chaining the Promise's `then` method along with the `text()` method(`response.text()` returns Promise object).

## Headers and Metadata

Response headers and metadata are available on the response object via straight properties and a get method for headers are illustrated below:

    fetch('/some/url')
    .then(function(response) {  
        console.log(response.headers.get('Content-Type'));  
        console.log(response.headers.get('Date'));

        console.log(response.status);  
        console.log(response.statusText);  
        console.log(response.type);  
        console.log(response.url);  
    });

You can also set headers in your initial request but you cannot set cookies:

    // url (required), options (optional)
    fetch('/some/url', {
    	headers: {
    		'Accept': 'application/json',
        	'Content-Type': 'application/json'
    	}
    });

## POST Form Data

Another common use case for AJAX is sending form data. To do this we can set the method and `body` parameters in the `fetch()` options.

    fetch('/some/url', {  
      method: 'post',  
      headers: {  
        "Content-type": "application/x-www-form-urlencoded"  
      },  
      body: 'a=1&b=2'
    })
    .then(function(res){
      return res.json();
    })
    .then(function (data) {  
      console.log('Request succeeded with JSON response', data);  
    })
    .catch(function (error) {  
      console.log('Request failed', error);  
    });

## Sending Credentials with a Fetch Request

Should you want to make a fetch request with credentials such as cookies, you should set the credentials of the request to “`include`”.

    fetch('/some/url', {  
      credentials: 'include'  
    })

More about [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)