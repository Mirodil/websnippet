---
title: "Another One Way to Create a Multilingual AngularJS Application"
description: "The rise of multilingual user interface has bought an interesting shift in the way complex information is perceived by today’s web users. These days, a variety of web projects demand the use of multilingual graphical interface to cater the needs of an international audience. Creating a unique international application requires you to make use of translated resource strings which ultimately lets you render the data using locale-sensitive objects."
date: "2015-05-22T11:12:26.249Z"
lastmod: "2015-05-22T11:13:54.067Z"
slug: "another-one-way-to-create-a-multilingual-angularjs-application"
categories: ["Web-Development", "Development"]
tags: ["AngularJS","JavaScript"]
thumbnail: "http://i963.photobucket.com/albums/ae120/Mirodil/WebSnippet/unnamed.png"
image: "http://i963.photobucket.com/albums/ae120/Mirodil/WebSnippet/unnamed.png"
source: ""
---


The rise of multilingual user interface has bought an interesting shift in the way complex information is perceived by today’s web users. These days, a variety of web projects demand the use of multilingual graphical interface to cater the needs of an international audience. Creating a unique international application requires you to make use of translated resource strings which ultimately lets you render the data using locale-sensitive objects.

Designing a mobile application interface that supports a great deal of languages can help you make headways to the international market in the quickest possible manner. It also lets you earn a large number of installation base as you provide the user freedom to use your app in a language which is relevant to their choice.

Since English is not enough to stay competitive, one needs to give a thought to multilingual applications to unlock the doors of other cultures. English is a global language, but there are chances that you’ll miss some other opportunities if it is all we follow, especially in a business scenario.

With this in mind, I am going to explain you a process of creating a multilingual application with Angularjs. AngularJS is a cutting-edge amongst all JavaScript frameworks that allows you to create striking mobile apps efficiently.

So, let’s begin.

To begin with, we need to create a language setting function for our interface. There are two types of components wherein this function needs to be added.

*   Label

We are provided with a route parameter that allows us define the actual language the user prefers to choose. The route parameter looks something like this:

    $routeProvider.when('/:lang/module/...', {...})

Here, notice the use of :lang parameter that allows us to render the user current language by calling and accessable from.

    $routeParams.lang

Now, we will use an easy to use angular translate. It’s quite simple to set up. All you need is just add [angular-translate.js](http://angular-translate.github.io/) file to your `index.html` and use a reference of ‘pascalprecht.translate’ function while defining the module. Below is an example showcasing the entire process.

    var app = angular.module('app', ['pascalprecht.translate']);

Once you are done with this, let’s proceed to create a json file for any language you want to define. For example: for English, it would be like en.js file that also contains some critical components of English language. You can go on to define any language you want like this.

    // en.js
    (function(){
    	var en = angular.module("en");
    	en.labels = { 
       		"name": "Name",
       		"surname": "Surname"
    	};
    })();

Next, it’s time to inform our app about the language translation configuration we are playing around with for quite a while. For this, it is recommended to create an individual configuration file which we can name as main`.js`. Also, make sure you reference this file to `index.html`. Look at the following piece of code to understand the concept better.

    (function(){
    	var app = angular.module("app");
    	app.config(["$translateProvider", function ($translateProvider) {
    		$translateProvider.translations("en", en.labels);
            $translateProvider.translations("ru", ru.labels);
    		$translateProvider.preferredLanguage("en");
    	}]);
    })();

If you want to add a translation for Russion language, you need to create a ru.js file which contains all the translation relating stuff.

    // ru.js
    (function(){
    	var en = angular.module("en");
    	en.labels = { 
       		"name": "Имя",
       		"surname": "Фамилия"
    	};
    })();

Now, the above code should be added to `main.js` file.

    $translateProvider.translations("ru", ru.labels);

We have successfully created an automatic support for a different language.

After this, we need to instruct our controller about the language we wish to use by fetching the param from the route and passing it to the `$translate` object.

    $translate.use($routeParams.lang);

We’ll now add the dynamic labels and messages with the help of angularjs binding and filtering the same using translate.

    <h1>{{greet | translate }} Plunker!</h1>

The above code will help us translate our labels on the basis of route `parameter :lang`. 

Here is demo result: [http://embed.plnkr.co/6i2Bxh/](http://embed.plnkr.co/6i2Bxh/)

Hope you’ve gained a pretty good understanding of adding a multilingual function in your angularjs application. It’s a nice way to attract international audience in the manner most effective.