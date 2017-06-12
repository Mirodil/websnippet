---
title: "JavaScript Spread operator - ES6"
description: "It’s official, the long wait is finally over, as ECMAScript 6 has been approved as a new standard. The anticipation for this approval has been running wild in the community for months, and years for others. While the evolutionary progress of the language was slow at first, the last few years have seen an incredible growth rate.

A lot of developers and developer publications out there have started to write more concisely about the ES6 standard, and what kind of changes one can expect. The new standard is known under the names of ECMAScript 2015, ES6, and JavaScript Harmony."
date: "2015-07-05T06:17:04.077Z"
lastmod: "2015-07-05T06:22:56.333Z"
slug: "javascript-spread-operator-es6"
categories: ["Web-Development", "Development"]
tags: ["JavaScript"]
thumbnail: "http://i1135.photobucket.com/albums/m637/Maer007/WebSnippet/th_1434947211044_zpsy4kd327q.jpeg"
image: "http://i1135.photobucket.com/albums/m637/Maer007/WebSnippet/1434947211044_zpsy4kd327q.jpeg"
source: ""
---


The spread operator `...` takes an iterable and expands it into the individual elements. The spread operator looks identical to the rest operator but instead performs the opposite action.

    const numbers = [1, 2, 3, 4];

    const moreNumbers = [...numbers, 5, 6];

    console.log(moreNumbers);//=> [1, 2, 3, 4, 5, 6]

This is most useful for dealing with cases like `apply` where you want to pass an iterable as its components. In fact, apply is no longer needed to pass an array as arguments.

    const foo = function (a, b, c) {
      console.log("a:", a); //=> "a:"1, "a:"4
      console.log("b:", b); //=> "b:"2, "b:"5
      console.log("c:", c); //=> "c:"3, "c:"6
    }

    const bar = [1, 2, 3];

    foo(...bar);

    const baz = [5,6];

    foo(4, ...baz);

### JavaScript - ES6

*   [JavaScript Arrow functions](http://websnippet.io/articles/javascript/javascript-arrow-functions-es6)
*   [JavaScript Classes](http://websnippet.io/articles/javascript/javascript-classes-es6)
*   [JavaScript Concise methods](http://websnippet.io/articles/javascript/javascript-concise-methods-es6)
*   [JavaScript Destructuring](http://websnippet.io/articles/javascript/javascript-destructuring-es6)
*   [JavaScript Generators](http://websnippet.io/articles/javascript/javascript-generators-es6)
*   [JavaScript Object literals](http://websnippet.io/articles/javascript/javascript-object-literals-es6)
*   [JavaScript Spread operator](http://websnippet.io/articles/javascript/javascript-spread-operator-es6)