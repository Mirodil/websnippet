---
title: "CSS Transition in Examples"
description: "We will create the basic  examples to show your how CSS Transition works. CSS transitions let you decide which properties to animate, when the animation will start, how long the transition will last, and how the transition will run."
date: "2015-06-01T16:23:47.828Z"
lastmod: "2015-06-01T16:25:41.235Z"
slug: "css-transition-in-examples"
categories: ["Web-Development", "Development"]
tags: ["CSS"]
thumbnail: "http://i1135.photobucket.com/albums/m637/Maer007/WebSnippet/th_1433175821455_zpsjsvgwxma.png"
image: "http://i1135.photobucket.com/albums/m637/Maer007/WebSnippet/1433175821455_zpsjsvgwxma.png"
source: ""
---


We will create the basic  examples to show your how [CSS Transition](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Using_CSS_transitions) works. CSS transitions let you decide which properties to animate, when the animation will start, how long the transition will last, and how the transition will run.

## Basic Animation

The `transition` property is a shorthand property used to represent up to four transition-related longhand properties:

    .selector {
        transition: [transition-property] [transition-duration] [transition-timing-function] [transition-delay];
    }

These transition properties allow elements to change values over a specified duration, animating the property changes, rather than having them occur immediately. Here is a simple example that transitions the background color of a `div` element on `:hover`:

    div {
      transition: background-color 0.5s ease;
      background-color: red;
    }
    div:hover {
      background-color: green;
    }

That div will take half a second when the mouse is over it to turn from red to green. Here is a live demonstration of such a transition:

<iframe frameborder="0" height="250px" scrolling="yes" src="http://embed.plnkr.co/P8aAhw/" width="100%"></iframe>

You can specify a particular property as we have above, or use a value of "`all`" to refer to transition properties.

    div {
      transition: all 0.5s ease;
      background: red;
      padding: 10px;
    }
    div:hover {
      background: green;
      padding: 20px;
    }

In this above example, both background and padding will transition, due to the value “all” specified for the `transition-property` portion of the shorthand.

You may comma separate value sets to do different transitions on different properties:

    div {
      transition: background 0.2s ease,
                  padding 0.8s linear;
    }

For the most part, the order of the values does not matter -- unless a delay is specified. If you specify a delay, you must first specify a duration. The first value that the browser recognizes as a valid time value will always represent the duration. Any subsequent valid time value will be parsed as the delay.

Some properties cannot be transitioned because they are not animatable properties. See the spec for a full list of [which properties are animatable](http://www.w3.org/TR/css3-transitions/#animatable-properties).

More examples you can find [here](http://www.css3.info/preview/css3-transitions/)