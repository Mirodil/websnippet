---
title: "JavaScript Classes - ES6"
description: "It’s official, the long wait is finally over, as ECMAScript 6 has been approved as a new standard. The anticipation for this approval has been running wild in the community for months, and years for others. While the evolutionary progress of the language was slow at first, the last few years have seen an incredible growth rate.

A lot of developers and developer publications out there have started to write more concisely about the ES6 standard, and what kind of changes one can expect. The new standard is known under the names of ECMAScript 2015, ES6, and JavaScript Harmony."
date: "2015-06-24T07:10:42.910Z"
lastmod: "2015-07-05T06:21:05.361Z"
slug: "javascript-classes-es6"
categories: ["Web-Development", "Development"]
tags: ["JavaScript"]
thumbnail: "http://i1135.photobucket.com/albums/m637/Maer007/WebSnippet/th_1434947211044_zpsy4kd327q.jpeg"
image: "http://i1135.photobucket.com/albums/m637/Maer007/WebSnippet/1434947211044_zpsy4kd327q.jpeg"
source: ""
---


Class syntax has been added to ES6\. The underlying inheritance model is still prototypal but the class syntax can make it easier to reason about relationships. To create a class just use the `class` keyword. Classes can be created with class expressions or class declarations. Unlike function declarations, class declarations are not hoisted.

    // class declaration
    class Rectangle {
      constructor(height, width) {
        this.height = height;
        this.width = width;
      }
    }

    // class expression (unnamed)
    var Square = class {
      constructor(width) {
        this.width = width;
      }
    };

ES6 classes support `super`, `constructor`, `get`, `set`, and `static` methods. Inheritance is achieved with the extends keyword.

    class Rectangle {
      constructor(height, width) {
        this.height = height;
        this.width = width;
      }

      get color() {
        return this.color;
      }

      set color(c) {
        this.color = c;
      }

      // Read only property
      get dimensions() {
        return "height: " + this.height + ", width: " + this.width;
      }

      static area(rectangle) {
        return rectangle.width * rectangle.height;
      }
    }

    class Square extends Rectangle {
      constructor(width) {
        super(width, width);
      }
    }

    const s = new Square(10);

    console.log(s.width);//=> 10

    console.log(s.dimensions);//=> "height: 10, width: 10"

    console.log(Rectangle.area(s));//=> 100

Classes can have computed method names, including setters and getters, and generator methods.

    class Rectangle {
      constructor(width, height) {
        this.width = width;
        this.height = height;
      }

      ['perimeter']() {
        return (this.width * 2) + (this.height * 2);
      }

      get ['area']() {
        return this.width * this.height;
      }

      * dimensions() {
        yield this.width;
        yield this.height;
      }
    }

    const r = new Rectangle(3, 5);

    console.log(r.perimeter());//=> 16

    console.log(r.area);//=>15

    for (let x of r.dimensions()) {
      console.log(x);//=> 3, 5
    }

### JavaScript - ES6

*   [JavaScript Arrow functions](http://websnippet.io/articles/javascript/javascript-arrow-functions-es6)
*   [JavaScript Classes](http://websnippet.io/articles/javascript/javascript-classes-es6)
*   [JavaScript Concise methods](http://websnippet.io/articles/javascript/javascript-concise-methods-es6)
*   [JavaScript Destructuring](http://websnippet.io/articles/javascript/javascript-destructuring-es6)
*   [JavaScript Generators](http://websnippet.io/articles/javascript/javascript-generators-es6)
*   [JavaScript Object literals](http://websnippet.io/articles/javascript/javascript-object-literals-es6)
*   [JavaScript Spread operator](http://websnippet.io/articles/javascript/javascript-spread-operator-es6)