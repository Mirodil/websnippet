---
title: "Build a Time Tracker with Laravel 5 and AngularJS"
description: "Laravel and AngularJS work great together, but it can be a little tricky to get going at first, especially if you are new to the frameworks. In a previous article, Chris showed you how to make a Single Page Comment App with Laravel and Angular. This tutorial will again bring the two frameworks together as we build out a simple time tracking application."
date: "2015-05-20T11:07:44.355Z"
lastmod: "2015-05-20T11:07:44.355Z"
slug: "build-a-time-tracker-with-laravel-5-and-angularjs-scotchio"
categories: ["Web-Development", "Development"]
tags: ["Node.JS"]
thumbnail: "http://i963.photobucket.com/albums/ae120/Mirodil/WebSnippet/laravel-angular-time-tracker-11.jpg"
image: "http://i963.photobucket.com/albums/ae120/Mirodil/WebSnippet/laravel-angular-time-tracker-11.jpg"
source: "https://scotch.io/tutorials/build-a-time-tracker-with-laravel-5-and-angularjs-part-1"
---


Laravel and AngularJS work great together, but it can be a little tricky to get going at first, especially if you are new to the frameworks. In a previous article, Chris showed you how to make a Single Page Comment App with Laravel and Angular. This tutorial will again bring the two frameworks together as we build out a simple time tracking application.

We’ll be going into a lot of detail in this tutorial, so to make things manageable it has been broken into two parts. The first part will focus on getting the front-end setup with AngularJS and the second part on getting the backend setup with Laravel 5.

We’ll be building a simple time tracking application that will give users the ability to track hours spent on tasks by clocking-in and clocking-out. We’ll use the[Timepicker directive](http://angular-ui.github.io/bootstrap/#/timepicker) offered by UI Bootstrap to let users enter their start and end times, and will give them a field to enter comments. Users will be able to list all of their time entries, create new ones, and also edit or delete existing entries.

[![time-tracker-1-1](http://i963.photobucket.com/albums/ae120/Mirodil/WebSnippet/time-tracker-1-1-832x5001.png)](https://cask.scotch.io/2015/03/time-tracker-1-1.png)

We will be using the [AngularJS Style Guide](https://github.com/johnpapa/angularjs-styleguide) by John Papa which sets out an opinionated set of conventions for Angular apps. If you haven’t seen this style guide before, some of the ways we set things up might look a bit foreign. Don’t worry though, it’s easy to catch on, and you’ll likely find our code easier to read and understand with the it applied.