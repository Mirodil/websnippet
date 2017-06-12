---
title: "Authenticate a Node.js API with JSON Web Tokens"
description: "Authentication is one of the big parts of every application. Security is always something that is changing and evolving. In the past, we have gone over Node authentication using the great Passport npm package.
Those articles used the session based authentication however, which has problems when we talk about scaling web services and creating an API that can be consumed across many devices and services."
date: "2015-05-20T11:00:44.155Z"
lastmod: "2015-05-20T11:01:35.381Z"
slug: "authenticate-a-node-js-api-with-json-web-tokens"
categories: ["Web-Development", "Development"]
tags: ["Node.JS"]
thumbnail: "http://i963.photobucket.com/albums/ae120/Mirodil/WebSnippet/nodejs-token-based-authentication1.png"
image: "http://i963.photobucket.com/albums/ae120/Mirodil/WebSnippet/nodejs-token-based-authentication1.png"
source: "https://scotch.io/tutorials/authenticate-a-node-js-api-with-json-web-tokens"
---


Authentication is one of the big parts of every application. Security is always something that is changing and evolving. In the past, we have gone over Node authentication using the great [Passport](http://passportjs.org/) npm package.

Those articles used the session based authentication however, which has problems when we talk about scaling web services and creating an API that can be consumed across many devices and services.

As a primer to this article, go ahead and get yourself familiar with token based authentication principles and the standard used for token based authentication,JSON Web Tokens.

Now that we’ve got all the important information about token based authentication out of the way, let’s build a very simple Node API and use tokens to authenticate users that request access.