---
title: "JavaScript Arrow functions - ES6"
description: "It’s official, the long wait is finally over, as ECMAScript 6 has been approved as a new standard. The anticipation for this approval has been running wild in the community for months, and years for others. While the evolutionary progress of the language was slow at first, the last few years have seen an incredible growth rate.

A lot of developers and developer publications out there have started to write more concisely about the ES6 standard, and what kind of changes one can expect. The new standard is known under the names of ECMAScript 2015, ES6, and JavaScript Harmony."
date: "2015-06-22T04:26:59.563Z"
lastmod: "2015-07-05T06:20:45.382Z"
slug: "javascript-arrow-functions-es6"
categories: ["Web-Development", "Development"]
tags: ["JavaScript"]
thumbnail: "http://i1135.photobucket.com/albums/m637/Maer007/WebSnippet/th_1434947211044_zpsy4kd327q.jpeg"
image: "http://i1135.photobucket.com/albums/m637/Maer007/WebSnippet/1434947211044_zpsy4kd327q.jpeg"
source: ""
---


Arrow functions are shorthand for an anonymous function that keep the current context. example:

    const a = 2;

    const multiply = function (num) {
      return num * a;
    }.bind(this);

    console.log(multiply(3)) //=> 6

Can be written as:

    const a = 2;

    const multiply = num => num * a;

    console.log(multiply(3)) //=> 6

This is most useful for cases like map or reduce:

    const numbers = [1, 2, 3, 4];
    const doubled = numbers.map(number => number * 2);

    console.log(doubled);//=> [2, 4, 6, 8]

## Arrow function syntax

Arrow functions take the following form:`(<arguments>) => <return statement>`. for more [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

When there is only a single argument, the parens are optional e.g.`(x) => x * x and x => x * x` are both valid. When there are 0 or 2 or more arguments, parens are required. e.g.`() => 'blah' or (x, y) => x * y`

For multiline statements wrap the function body in curly braces:

    const numbers = [1, 2, 3, 4];
    const cubed = numbers.map(number => {
      const squared = number * number;

      return squared * number;
    });

    console.log(cubed);//=> [1, 8, 27, 64]

### JavaScript - ES6

*   [JavaScript Arrow functions](http://websnippet.io/articles/javascript/javascript-arrow-functions-es6)
*   [JavaScript Classes](http://websnippet.io/articles/javascript/javascript-classes-es6)
*   [JavaScript Concise methods](http://websnippet.io/articles/javascript/javascript-concise-methods-es6)
*   [JavaScript Destructuring](http://websnippet.io/articles/javascript/javascript-destructuring-es6)
*   [JavaScript Generators](http://websnippet.io/articles/javascript/javascript-generators-es6)
*   [JavaScript Object literals](http://websnippet.io/articles/javascript/javascript-object-literals-es6)
*   [JavaScript Spread operator](http://websnippet.io/articles/javascript/javascript-spread-operator-es6)