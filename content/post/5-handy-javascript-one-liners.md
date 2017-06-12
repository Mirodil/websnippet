---
title: "5 handy JavaScript one-liners"
description: "5 handy JavaScript one-liners"
date: "2016-05-17T00:46:55.892Z"
lastmod: "2016-05-17T00:46:55.892Z"
slug: "5-handy-javascript-one-liners"
categories: ["Web-Development", "Development"]
tags: ["JavaScript"]
thumbnail: "http://i1135.photobucket.com/albums/m637/Maer007/WebSnippet/th_1433693516339_zpsor3v2pza.png"
image: "http://i1135.photobucket.com/albums/m637/Maer007/WebSnippet/1433693516339_zpsor3v2pza.png"
source: "https://gist.github.com/nepsilon/066098f6b5be23cd39bdca6676aef323"
---


## Generate a random string

    Math.random().toString(36).substr(2);

<span style="color:rgb(34, 34, 34); font-family:helvetica neue,helvetica,helvetica,arial,sans-serif; font-size:15px">This simply generates a random float, casts it into a String using base 36 and remove the 2 first chars </span>``0``<span style="color:rgb(34, 34, 34); font-family:helvetica neue,helvetica,helvetica,arial,sans-serif; font-size:15px"> and </span>``.``<span style="color:rgb(34, 34, 34); font-family:helvetica neue,helvetica,helvetica,arial,sans-serif; font-size:15px">.</span>

## Clone an array

    var newA = myArray.slice(0);

<span style="color:rgb(34, 34, 34); font-family:helvetica neue,helvetica,helvetica,arial,sans-serif; font-size:15px">This will return a copy of the array, ensuring no other variables point to it.</span>

## Remove HTML tags

    '<b>A</b>'.replace(/<[^>]+>/gi, '');

<span style="color:rgb(34, 34, 34); font-family:helvetica neue,helvetica,helvetica,arial,sans-serif; font-size:15px">This is using a simple regular expression to remove any string that looks like </span>``<xxx>``<span style="color:rgb(34, 34, 34); font-family:helvetica neue,helvetica,helvetica,arial,sans-serif; font-size:15px"> where </span>``x``<span style="color:rgb(34, 34, 34); font-family:helvetica neue,helvetica,helvetica,arial,sans-serif; font-size:15px"> can be any char, including </span>``/``<span style="color:rgb(34, 34, 34); font-family:helvetica neue,helvetica,helvetica,arial,sans-serif; font-size:15px">.</span>

## Set a default value

    function foo(opts) { 
       var options = opts || {}; 
    }

<span style="color:rgb(34, 34, 34); font-family:helvetica neue,helvetica,helvetica,arial,sans-serif; font-size:15px">You will see this in any decent JS code. If </span>`opts`<span style="color:rgb(34, 34, 34); font-family:helvetica neue,helvetica,helvetica,arial,sans-serif; font-size:15px"> is defined and not “binarily” </span>`false `<span style="color:rgb(34, 34, 34); font-family:helvetica neue,helvetica,helvetica,arial,sans-serif; font-size:15px">it will be assigned to </span>``options``<span style="color:rgb(34, 34, 34); font-family:helvetica neue,helvetica,helvetica,arial,sans-serif; font-size:15px">, otherwise it will assign an empty dictionary </span>``{}``<span style="color:rgb(34, 34, 34); font-family:helvetica neue,helvetica,helvetica,arial,sans-serif; font-size:15px">.</span>

##  Reverse a string

    var str = "Pouet this string."; 
    str.split('').reverse().join(''); // "gnirts siht teuoP"  

    // Keep words order with: 
    str.split(' ').reverse().join(' '); // "string this Pouet"

<span style="color:rgb(34, 34, 34); font-family:helvetica neue,helvetica,helvetica,arial,sans-serif; font-size:15px">The first example splits on every character, reverses them and puts them back together. The second splits only on words and joins them back separated by a space.</span>