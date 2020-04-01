---
title: "Making Your First Webapp with React"
description: "React has gained a lot of popularity recently and has attracted a large and active community. This results in a vast wealth of reusable components for it that will save you time when coding. The library itself encourages writing loosely coupled code that is modular and composable."
date: "2015-05-20T11:32:24.439Z"
lastmod: "2015-05-20T11:33:07.379Z"
slug: "making-your-first-webapp-with-react"
categories: ["Web-Development", "Development"]
tags: ["React","JavaScript"]
thumbnail: "http://cdn.tutorialzine.com/wp-content/uploads/2015/04/creating-your-first-web-app-with-react.png"
image: "http://cdn.tutorialzine.com/wp-content/uploads/2015/04/creating-your-first-web-app-with-react.png"
source: "http://tutorialzine.com/2015/04/first-webapp-react"
---


React has gained a lot of popularity recently and has attracted a large and active community. This results in a vast wealth of reusable [components](https://www.npmjs.com/browse/keyword/react-component) for it that will save you time when coding. The library itself encourages writing loosely coupled code that is modular and composable.

In this tutorial, I will show you how to create a small application and how to split it into discrete components that talk to each other. As a base, we will take the [npm-driven website example](http://tutorialzine.com/2015/03/npm-driven-website/) from last month, but we’ll do it the React way. It is interesting to compare the results – the React version has a few more lines of code than the jQuery version, but we can both agree that it is much better organized.

### What you need to know about React

*   It is a popular client-side library/framework for building user interfaces, which is developed and used by Facebook.
*   With it, you organize your application around discrete components, with each handling its own rendering and state. Components can be nested within each other.
*   React is fast because it minimizes the number of writes to the DOM (the slowest part of any client-side application).
*   The recommended way to write React code is by using JSX – an extension to JavaScript which presents components as HTML elements. JSX needs to be compiled to JS in order to work in browsers.
*   It hasn’t hit version 1.0 as of this writing, so there might be changes in the future.
*   We have a nice article with [examples for learning react](http://tutorialzine.com/2014/07/5-practical-examples-for-learning-facebooks-react-framework/) which you can check out. Also there is the official getting started guide [here](https://facebook.github.io/react/docs/getting-started.html).