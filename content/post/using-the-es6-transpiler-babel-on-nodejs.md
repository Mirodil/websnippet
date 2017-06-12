---
title: "Using the ES6 transpiler Babel on Node.js"
description: "This post explains how to use the ES6 transpiler Babel with Node.js. Use next generation JavaScript, today with Babel JavaScript compiler. ECMAScript 6 is the upcoming version of the ECMAScript standard. This standard is targeting ratification in June 2015. ES6 is a significant update to the language, and the first update to the language since ES5 was standardized in 2009. Implementation of these features in major JavaScript engines is underway now."
date: "2015-05-21T09:46:23.021Z"
lastmod: "2015-05-21T09:46:23.021Z"
slug: "using-the-es6-transpiler-babel-on-nodejs"
categories: ["Web-Development", "Development"]
tags: ["Node.JS"]
thumbnail: "http://rs963.pbsrc.com/albums/ae120/Mirodil/WebSnippet/babel.png~c200"
image: "http://i963.photobucket.com/albums/ae120/Mirodil/WebSnippet/babel.png"
source: ""
---


This post explains how to use the ES6 transpiler Babel with Node.js. Use next generation JavaScript, today with Babel JavaScript compiler.

## Running normal Node.js code via Babel

Firts needs to install babel package. The npm package `babel` brings Babel support to Node.js:

    $ npm install --global babel

This package contains the shell script `babel-node`, which is a Babel-ified version of `node`. It compiles everything from ES6 to ES5 that is run or required. For example, you can start a REPL via the following shell command:

    $ babel-node

In the REPL, you can use ES6:

     > [1,2,3].map(x => x * x)
        [ 1, 4, 9 ]

`babel-node` also lets you run Node.js scripts such as the following one.

    // point.js
    export class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    if (require.main === module) {
        let pt = new Point(7,4);
        console.log(`My point: ${JSON.stringify(pt)}`);
    }

The following shell command runs `point.js`:

    $ babel-node point.js 
        My point: {"x":7,"y":4}

The package `babel` has many more features, which are all [documented](http://babeljs.io/docs/using-babel/#node) on the Babel website. For example, from within a normal Node module, you can install a “require hook”, which compiles all required modules via Babel (except, by default, modules in`node_modules`).

## Running Jasmine unit tests via Babel

Another npm package, [babel-jest](https://github.com/babel/babel-jest), is a preprocessor for [the Jasmine-based unit testing tool Jest](http://facebook.github.io/jest/).

One way to install babel-jest is by mentioning it in the `devDependencies` of your`package.json`:

    {
      "devDependencies": {
        "babel-jest": "*",
        "jest-cli": "*"
      },
      "scripts": {
        "test": "jest"
      },
      "jest": {
        "scriptPreprocessor": "<rootDir>/node_modules/babel-jest",
        "testFileExtensions": ["js"],
        "moduleFileExtensions": ["js", "json"],
        "testDirectoryName": "spec"
      }
    }

Afterwards, you only need to execute the following command inside the directory of`package.json` and both babel-jest and a command line interface (CLI) for Jest will be installed.

    npm install

The configuration options for Jest are [documented](http://facebook.github.io/jest/docs/api.html) on its website. I have used`testDirectoryName` to specify that the tests are inside the directory `spec` (the default is`__tests__`). Let’s add the following test file to that directory: 

    // spec/point.spec.js
    jest.autoMockOff();
    import { Point } from '../point';

    describe('Point', () => {
        it('sets up instance properties correctly', () => {
            let p = new Point(1, 5);
            console.log(JSON.stringify(p));
            expect(p.x).toBe(1);
            expect(p.y).toBe(5);
        });
    });

Because we have specified `scripts.test` in `package.json`, we can run all tests inside`spec/` via the following command:

    npm test