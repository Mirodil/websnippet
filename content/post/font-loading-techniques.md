---
title: "Font Loading Techniques"
description: "It seems as though most websites use non-default fonts these days and who can blame them?  System fonts are all pretty boring and custom fonts add a bit of flare and freshness to a site's design.  The problem with using custom fonts, however, is they can really slow down your site load.  Font files are large, can require separate font files for bold and italic, and can block rendering if the developer doesn't work around them.  Let me show you a strategy for faster font loading!"
date: "2015-06-13T09:12:43.044Z"
lastmod: "2015-06-13T09:12:43.044Z"
slug: "font-loading-techniques"
categories: ["Web Management"]
tags: []
thumbnail: ""
image: ""
source: ""
---


It seems as though most websites use non-default fonts these days and who can blame them?  System fonts are all pretty boring and custom fonts add a bit of flare and freshness to a site's design.  Web fonts are great and make the web a more beautiful space; however, loading them can be slow, which results in an unwanted side effect. Let me show you a strategy for faster font loading!

## Put Fonts on CDN

One simple solution for improving site speed is using a CDN, and that's no different for fonts.  It's important to ensure the CDN has proper CORS settings.

    # Apache config
    <FilesMatch ".(eot|ttf|otf|woff)">
    	Header set Access-Control-Allow-Origin "*"
    </FilesMatch>

    # nginx config
    if ($filename ~* ^.*?\.(eot)|(ttf)|(woff)$){
    	add_header Access-Control-Allow-Origin *;
    }

You'll see AJAX / cross-domain errors in the console if the CDN's CORS settings are not properly configured.

## Use Non-Blocking CSS Loading

 It's actually genius, which outlines a strategy for preventing CSS loading from blocking render. 

    <link rel="stylesheet" type="text/css" href="fonts.css" media="none" onload="this.media='all';">
    <link rel="stylesheet" type="text/css" href="style.css" media="none" onload="this.media='all';">

Essentially using media=none let's the browser download the stylesheet without blocking rendering, so when the stylesheet has loaded, setting the media(`onload="this.media='all';"`) to its desired setting will then render the screen as it should.

## Storing Fonts in localStorage

First let’s add a class to the `<html>` DOM node that will hold the fallback font styles. Using JavaScript, this will later be replaced with a class that has the styles of the loaded font. We will also save a path pointing to the font file to a variable for later reuse.

    document.documentElement.className = 'fallback';
    var css_href = '../path/fonts.css';

Next we need to check for local storage support by trying to set and get an item into local storage. Some browsers can’t store anything in private mode but `window.localStorage` will still return a storage object. We need this extra request to make sure that our script will work properly:

    var localStorageSupported = function() {
      return 'localStorage' in window;
    }

If the browser passes the `localStorageSupported` test and our font file is already stored, we can get the file and add it to the page header inside a `style` tag using the `injectRawStyle()` function. If the browser doesn’t pass the test, we call the `injectFontsStylesheet()` function on the `onLoad` event, so that we don’t block the ui thread:

    if (localStorageSupported() && localStorage.webFonts) {
      injectRawStyle(localStorage.webFonts);
    } else {
      window.onload = function() {
        injectFontsStylesheet();
      } 
    }

The `injectFontsStylesheet()` function makes an `xhr` request to get the font file content, injects it into the header with the help of the `injectRawStyle` function and saves it to local storage:

    function injectFontsStylesheet() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', css_href, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          injectRawStyle(xhr.responseText);
          localStorage.webFonts = xhr.responseText;
        }
        xhr.send();
      }
    }

This is the function that creates the `style` tag in the `head` of the document and gets its content through the `text` parameter. It’s also at this stage that we replace the fallback class with the font class that has the web font styles:

    function injectRawStyle(text) {
      var style = document.createElement('style');
      style.innerHTML = text;
      document.getElementsByTagName('head')[0].appendChild(style);
      document.documentElement.className = 'webFont';
    }

With this solution, you’re now able to store your fonts asynchronously into local storage, while providing a good and reliable fallback font.