---
title: "JavaScript Generators - ES6"
description: "It’s official, the long wait is finally over, as ECMAScript 6 has been approved as a new standard. The anticipation for this approval has been running wild in the community for months, and years for others. While the evolutionary progress of the language was slow at first, the last few years have seen an incredible growth rate.

A lot of developers and developer publications out there have started to write more concisely about the ES6 standard, and what kind of changes one can expect. The new standard is known under the names of ECMAScript 2015, ES6, and JavaScript Harmony."
date: "2015-07-05T06:09:41.838Z"
lastmod: "2015-07-05T06:21:41.303Z"
slug: "javascript-generators-es6"
categories: ["Web-Development", "Development"]
tags: ["JavaScript"]
thumbnail: "https://2.bp.blogspot.com/-E98DedRkHR4/WhDMZGkeuNI/AAAAAAAAD3M/gIgMNbULznkvrrlyoiRpOpT-L0wOFhtfQCLcBGAs/s400/ecmascript6.JPG"
image: "https://2.bp.blogspot.com/-E98DedRkHR4/WhDMZGkeuNI/AAAAAAAAD3M/gIgMNbULznkvrrlyoiRpOpT-L0wOFhtfQCLcBGAs/s1600/ecmascript6.JPG"
source: ""
---


Generators functions take the following form `function* name() {}`. Or our preferred `const name = function* () {};`, since we avoid function declarations in favor of function expressions.

Calling a generator doesn't actually run any of its contents. A call to a generator returns a generator instance.

    const foo = function* () {
      console.log("foo");
    }

    // No console output here
    // bar is now an instance of the generator and the console.log has never been run.
    const bar = foo();

To use a generator instance we have to call `.next()`

    const foo = function* () {
      console.log("here");
    }

    // No console output here
    const bar = foo();

    bar.next(); //=> "here"

`.next()` returns an object that looks like this:

    { value: undefined, done: true }

What do `value` and `done` mean?

`done` means that the generator doesn't have any more code to execute. AKA we are past the last `yield` statement. To understand `value`, we have to look at `yield`.

    const foo = function* (x) {
      yield x;
    }

    const bar = foo(3);

    console.log(bar.next()); //=> {value: 3, done: false}

    console.log(bar.next()); //=> {value: undefined, done: true}

A `yield` statement tells the generator to stop executing and return the following value. You can have `yield` statements without a return value. The generator will return `done: true` on the subsequent call to next after the last `yield` statement (see above).

### JavaScript - ES6

*   [JavaScript Arrow functions](http://websnippet.io/articles/javascript/javascript-arrow-functions-es6)
*   [JavaScript Classes](http://websnippet.io/articles/javascript/javascript-classes-es6)
*   [JavaScript Concise methods](http://websnippet.io/articles/javascript/javascript-concise-methods-es6)
*   [JavaScript Destructuring](http://websnippet.io/articles/javascript/javascript-destructuring-es6)
*   [JavaScript Generators](http://websnippet.io/articles/javascript/javascript-generators-es6)
*   [JavaScript Object literals](http://websnippet.io/articles/javascript/javascript-object-literals-es6)
*   [JavaScript Spread operator](http://websnippet.io/articles/javascript/javascript-spread-operator-es6)