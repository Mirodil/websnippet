---
title: "Facebook authentication in AngularJS web application"
description: "In this post we are trying to implement a login system based on the Facebook’s authentication system."
date: "2015-05-20T10:25:41.010Z"
lastmod: "2015-05-20T10:25:41.010Z"
slug: "facebook-authentication-in-angularjs-web-application"
categories: ["Web-Development", "Development"]
tags: ["AngularJS","JavaScript"]
thumbnail: "http://i963.photobucket.com/albums/ae120/Mirodil/WebSnippet/facebook-angular.png"
image: "http://i963.photobucket.com/albums/ae120/Mirodil/WebSnippet/facebook-angular.png"
source: ""
---


In this post we are trying to implement a login system based on the Facebook’s authentication system.

## Authentication with Facebook

When I started to work on the facebook authentication I was not a big expert in the matter of Facebook’s api in this case I think that the smarter thing you can do is start reading the Facebook’s document about [Facebook’s authentication system](https://developers.facebook.com/docs/facebook-login).

You’ll discover that Facebook makes available different ways to authenticate the users of your website, or application, on the basis of the device they are using (Web, iOS or Android), and even for a web app is possible to choose between two different flows: with or without JavaScript SDK.

I chose to follow the [login flow with Javascript SDK](https://developers.facebook.com/docs/facebook-login/login-flow-for-web) to integrate it into AngularJS.

## Initialize the JavaScript SDK

After adding the Facebook JavaScript SDK to our page, needs to call `init` method in the JavaScript SDK as soon as possible, for this reason I will put the initialization code inside the [`run`](https://docs.angularjs.org/api/ng/type/angular.Module#run) method. Moreover this will be the place from which load the SDK itself:

    app.run(['$rootScope', '$window', 'srvAuth', function($rootScope, $window, sAuth) {

      $rootScope.user = {};

      $window.fbAsyncInit = function() {
        // Executed when the SDK is loaded

        FB.init({ 

          /* 
           The app id of the web app;
           To register a new app visit Facebook App Dashboard
           ( https://developers.facebook.com/apps/ ) 
          */

          appId: '***************', 

          /* 
           Adding a Channel File improves the performance 
           of the javascript SDK, by addressing issues 
           with cross-domain communication in certain browsers. 
          */

          channelUrl: 'app/channel.html', 

          /* 
           Set if you want to check the authentication status
           at the start up of the app 
          */

          status: true, 

          /* 
           Enable cookies to allow the server to access 
           the session 
          */

          cookie: true, 

          /* Parse XFBML */

          xfbml: true 
        });

        sAuth.watchAuthenticationStatusChange();
      };
    }]);

Just a couple of notes before to move to the next paragraph:

*   What is `srvAuth`? Is a custom AngularJS service that I use to wrap all the authentication related stuff.
*   What is the channel file? It helps dealing with cross-domain communication in certain browsers. The contents of the channel.html file should be just a single line:

    <script src="http://connect.facebook.net/en_US/all.js"></script>

To end with the initialization tasks, it’s also a good practice to add the fb-root div, that is the place where the Javascript SDK attaches itself to; however if you skip this step the fb-root div will be created automatically. Accomplish this task is so simple that we can do it ourselves; just write the following snippet wherever you want in the body of your page.

## The authentication service

The service I created is pretty simple: just three methods, and a single property that stores the user’s information retrieved from Facebook.

You already saw the first method because it’s executed from the previous snippet:

    watchLoginChange = function() {

      var _self = this;

      FB.Event.subscribe('auth.authResponseChange', function(res) {

        if (res.status === 'connected') {

          /* 
           The user is already logged, 
           is possible retrieve his personal info
          */
          _self.getUserInfo();

          /*
           This is also the point where you should create a 
           session for the current user.
           For this purpose you can use the data inside the 
           res.authResponse object.
          */

        } 
        else {

          /*
           The user is not logged to the app, or into Facebook:
           destroy the session on the server.
          */

        }

      });

    }

This method uses the Facebook api to register a callback function that will be executed each time a change to the user authentication status occurs.

When the user is logged to Facebook, and also to the web app we receive the connected response status; then it’s possible to retrieve the user personal information from Facebook (using another method offered by the service). Otherwise when the user is not logged to Facebook, or did not granted the web app yet, we have not the permissions to call the Facebook api to retrieve personal information, so in this case we have also to destroy the user’s session on the server, created at the moment of the login.

How to retrieve user’s personal information from Facebook? Continue the analysis of the service with the `getUserInfo` method:

    getUserInfo = function() {

      var _self = this;

      FB.api('/me', function(res) {

        $rootScope.$apply(function() { 

          $rootScope.user = _self.user = res; 

        });

      });

    }

This method simply wraps a call to the Facebook’s service that responds with the user’s profile information. The most important thing to note here is the use of the [$apply](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$apply) AngularJS method. Infact, because the answer from Facebook is asynchronous, and so it comes from outside the framework world, we need to include it in AngularJS with the `$apply` method.

Finally, the last method of the service provide a way to logout the user from the web application (and from Facebook). However this operation won’t revokes the permission accorded to the app; so when the user will logged to Facebook in the future, he will logged to the app as well.

    logout = function() {

      var _self = this;

      FB.logout(function(response) {

        $rootScope.$apply(function() { 

          $rootScope.user = _self.user = {}; 

        }); 

      });

    }

## The Facebook login button

Finally, is the time to introduce the real star of this post: the Facebook login button… and the good news is that you’ve not more to do that include the following snippet in your web app.

    <fb:login-button show-faces="true" max-rows="1" size="large"></fb:login-button>

However probably, sooner or later, you would like to [customize the look of the login button](https://developers.facebook.com/docs/plugins/login-button?locale=it_IT).

Everything I wrote for a generic authentication system is still valid for the login system based on Facebook’s authentication system that I described in this post. Anyway don’t trust the front-end, but repeat each check on the back-end.