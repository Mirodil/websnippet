---
title: "JavaScript Destructuring - ES6"
description: "It’s official, the long wait is finally over, as ECMAScript 6 has been approved as a new standard. The anticipation for this approval has been running wild in the community for months, and years for others. While the evolutionary progress of the language was slow at first, the last few years have seen an incredible growth rate.

A lot of developers and developer publications out there have started to write more concisely about the ES6 standard, and what kind of changes one can expect. The new standard is known under the names of ECMAScript 2015, ES6, and JavaScript Harmony."
date: "2015-06-29T16:34:06.152Z"
lastmod: "2015-07-05T06:21:22.282Z"
slug: "javascript-destructuring-es6"
categories: ["Web-Development", "Development"]
tags: ["JavaScript"]
thumbnail: "https://2.bp.blogspot.com/-E98DedRkHR4/WhDMZGkeuNI/AAAAAAAAD3M/gIgMNbULznkvrrlyoiRpOpT-L0wOFhtfQCLcBGAs/s400/ecmascript6.JPG"
image: "https://2.bp.blogspot.com/-E98DedRkHR4/WhDMZGkeuNI/AAAAAAAAD3M/gIgMNbULznkvrrlyoiRpOpT-L0wOFhtfQCLcBGAs/s1600/ecmascript6.JPG"
source: ""
---


Both arrays and objects now support destructuring.

Array destructuring gives a quicker and more fine-grained approach to interacting with elements in an array. See below:

    const foo = ["one", "two", "three"];

    const [a, b, c] = foo;

    console.log(a + b + c); //=> "onetwothree"

    const [x, ,z] = foo;

    console.log(x + z); //=> "onethree"

    const [, y] = foo;

    console.log(y); //=> "two"

Object destructuring is similar to array destructuring but uses key names to do the destructuring.

    const foo = {a: "1", b: "2", c: "3"};
    const {a, c} = foo;

    console.log(a + c); //=> "13"

    // Assign a new variable name
    const {b: baz} = foo;

    console.log(baz); //=> "2"

Object destructuring also gives us some extra flexibility with nested objects and computed properties.

    let foo = {a: "1", b: "2", c: "3"};

    const computed = "d";

    foo[computed] = "4";

    // Destructure computed property
    const {[computed]: bar} = foo;

    console.log(bar); //=> "4"

    const baz = {w: {x: "5", y: "6"}};

    // Notice the overloaded ":" for nesting
    const {w: {x: z}} = baz;

    console.log(z); //=> "5"

Array and object destructuring can be used in conjuction with any nesting depth.

    const foo = {a: [{b: "2"}, {c: ["3", "4"]}]};

    const {a: [{b: x}, {c: [y, z] }] } = foo;

    console.log(x); //=> "2"
    console.log(y); //=> "3"
    console.log(z); //=> "4"

Arrays also supports the rest operator `...`. This allows us to grab the remaining un-deconstructed subset of the array as an array.

    const foo = [1, 2, 3, 4, 5];

    const [a, b, ...cde] = foo;

    console.log(cde); //=> [3, 4, 5]

    // Can be used in other patterns
    const [w, , ...[, ,z]] = foo;

    console.log(z); //=> 5

The rest operator looks identical to the spread operator but the two have different functions.

In ES7, objects also support the rest operator. This allows us to grab the remaining un-deconstructed properties of the object as an object.

    const foo = {a: "1", b: "2", c: "3"};
    const {a, ...others} = foo;

    console.log(others); //=> Object {b: "2", c: "3"}

`yield` statements can also be used to pass in new information to the generator.

    const foo = function* (x) {
      const y = x + (yield x);

      yield y;
    }

    const bar = foo(5);

    // outputs from 'yield x'
    console.log(bar.next().value) //  5 

    //outputs 'yield y' of '<x=5> + <yield x=8>'
    console.log(bar.next(8).value) // 13

A little confusing right? What happens when we hit the first `yield` is we pass out `x` as `value`. The `yield x` statement then becomes whatever is passed into .`next().x` is still `5` but `yield x` is now `8`.

Note: `return` statements in generators are not a good idea. Although they are easy to reason about for done: true, they don't show up in for..of loops. See below

Generators can be used with `for..of` loops for iterating through all of the `yield` statements.

    const foo = function* (x) {
      yield x + 1;
      yield x + 2;
      yield x + 3;

      // Any return statement here would be ignored by the for..of loop
    }

    for (let y of foo(6)) {
      console.log(y); //=> 7, 8, 9
    }

In the `for..o`f the variable `Y` is the result of the `yield` statements. As mentioned above, any return statement will be ignored by the loop.

### JavaScript - ES6

*   [JavaScript Arrow functions](http://websnippet.io/articles/javascript/javascript-arrow-functions-es6)
*   [JavaScript Classes](http://websnippet.io/articles/javascript/javascript-classes-es6)
*   [JavaScript Concise methods](http://websnippet.io/articles/javascript/javascript-concise-methods-es6)
*   [JavaScript Destructuring](http://websnippet.io/articles/javascript/javascript-destructuring-es6)
*   [JavaScript Generators](http://websnippet.io/articles/javascript/javascript-generators-es6)
*   [JavaScript Object literals](http://websnippet.io/articles/javascript/javascript-object-literals-es6)
*   [JavaScript Spread operator](http://websnippet.io/articles/javascript/javascript-spread-operator-es6)