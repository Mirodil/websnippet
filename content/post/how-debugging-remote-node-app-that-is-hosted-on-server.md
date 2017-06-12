---
title: "How debugging remote node app that is hosted on server"
description: "Would you like to connect to your node server running in debug mode on AWS from your development machine, and be able to debug your app remotely. If You want to debug your NodeJS app running on server, then this is details instruction how to do this."
date: "2015-07-10T17:54:05.152Z"
lastmod: "2015-07-10T17:58:43.561Z"
slug: "how-debugging-remote-node-app-that-is-hosted-on-server"
categories: ["Web-Development", "Development"]
tags: ["Node.JS","JavaScript"]
thumbnail: "http://i963.photobucket.com/albums/ae120/Mirodil/WebSnippet/js-black_1.png"
image: "http://i963.photobucket.com/albums/ae120/Mirodil/WebSnippet/js-black_1.png"
source: ""
---


## Port Forwarding using SSH

This is aslo called SSH Port Tunneling. We will use Putty for SSH Tunneling. So lets get start. 

In order to use port forwarding to connect from your local machine to a port on a remote server, you need to:

*   Choose a port number on your local machine (e.g. 5858 in our case) where PuTTY should listen for incoming connections. 
*   Now, before you start your SSH connection, go to the PuTTY Tunnels panel. Make sure the «Local» radio button is set. Enter the local port (e.g. 5858) number into the «Source port» box. Enter the destination host name and port number into the «Destination» box, separated by a colon (e.g. 127.0.0.1:5858 in our case).
*   Now click the [Add] button. The details of your port forwarding should appear in the list box.

Launch Putty. Different categories will be listed on the left side, click on Connection > SSH > Tunnels.  
Under Add new forwarded port:, enter the following information:  
Source port: [port on local machine]  
Destination: [hostname of ccis machine]:[port on ccis machine]  
Click Add.   
It would look like this if I wanted to forward port 5858 on the webserver to 5858 on my local machine:

![](http://i1135.photobucket.com/albums/m637/Maer007/WebSnippet/1436549884873_zps3qaqlohi.png)

Clicking Add will add it to the list of forwarded ports:  
![](http://i1135.photobucket.com/albums/m637/Maer007/WebSnippet/1436549938426_zps0pewmatg.png)

After setting up the port tunnel, select Session from the category list on the left side.  
Enter `login.ccs.neu.edu` in the Host Name (or IP Address) field and click the Open button at the bottom right.  
![](http://i1135.photobucket.com/albums/m637/Maer007/WebSnippet/1436549964122_zpsovegyxzj.png)

Select Yes if prompted with this window.   
And you will be inside your server, then you have to run your node app with debug flag in PuTTY terminal:

    node --debug app.js

Then you have to install `node-inspector` to your local machine:

    install node-inspector -g

 And start `node-inspector` in your local machine:

    node-inspector

Now you can open the following url in you Chrome browser and debug remote nodejs application:

    http://127.0.0.1/debug?port=5858

It may take sometime to load remote files into your browser.