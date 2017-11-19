---
title: "Video Streaming with NodeJS"
description: "Streaming small video files to HTML5 video with Node is easy what about big one, how streaming (any size) video files with node.js"
date: "2016-03-27T05:46:51.827Z"
lastmod: "2016-04-21T21:19:40.230Z"
slug: "video-streaming-with-nodejs"
categories: ["Web-Development", "Development"]
tags: ["Node.JS"]
thumbnail: "https://4.bp.blogspot.com/-9tcBliK6fN4/WhDK9gRtsTI/AAAAAAAAD24/QWBZCzXmABQAxZkRCUNOI4gjcjO7EHLSgCLcBGAs/s400/nodejs.png"
image: "https://4.bp.blogspot.com/-9tcBliK6fN4/WhDK9gRtsTI/AAAAAAAAD24/QWBZCzXmABQAxZkRCUNOI4gjcjO7EHLSgCLcBGAs/s1600/nodejs.png"
source: ""
---


We can stream video files by utilizing fs.createReadStream(), the server can read the file in a stream rather than reading it all into memory at once. First, we need to create node.js server(here is a code).

    var fs = require("fs"),
        http = require("http"),
        url = require("url"),
        path = require("path");

    http.createServer(function (req, res) {
      if (req.url = '/movie.mp4') {
        // here will be code :)
      }
    }).listen(3000);

We will take care about the `Accept-Ranges` header  as is required for the HTML5 video controls to work instead of just blindly send the full file. So we should first check the `Accept-Ranges` header in the incoming request, then read in and send just that bit.

    var range = req.headers.range;
    var positions = range.replace(/bytes=/, '').split('-');
    var start = parseInt(positions[0], 10);

 Now we hava to check requested file and after write reponse header:

    fs.stat(file, function(err, stats) {    
        var total = stats.size;
        var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
        var chunkSize = (end - start) + 1;

        res.writeHead(206, {
            'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'video/mp4'
        });
    });

The main part, create stream with `fs.createReadStream`:

    var stream = fs.createReadStream(file, { start: start, end: end })
        .on("open", function() {
            stream.pipe(res);
        }).on("error", function(err) {
            res.end(err);
        });

That is all. Here is complete code:

    var fs = require('fs'),
        http = require('http'),
        url = require('url'),
        path = require('path');

    http.createServer( (req, res)=>{
      if (req.url === '/movie.mp4') {
        var file = path.resolve(__dirname,'movie.mp4');
        var range = req.headers.range;
        var positions = range.replace(/bytes=/, '').split('-');
        var start = parseInt(positions[0], 10);

        fs.stat(file, (err, stats)=>{
          var total = stats.size;
          var end = positions[1] ? parseInt(positions[1], 10) : total - 1;
          var chunkSize = (end - start) + 1;

          res.writeHead(206, {
            'Content-Range': 'bytes ' + start + '-' + end + '/' + total,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'video/mp4'
          });

          var stream = fs.createReadStream(file, { start: start, end: end })
            .on('open', ()=>{
              stream.pipe(res);
            }).on('error', (err)=>{
              res.end(err);
            });

            res.on('close', ()=>{
              // close or destroy stream
              stream = null; 
            });
        });    
      }
    }).listen(3000);