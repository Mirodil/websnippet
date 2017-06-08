---
title: "AngularJS Constants"
description: "AngularJS Constants is a provider where you can store or save application configuration data. AngularJS Constants is injectable at any part of your application and it works."
date: "2015-05-19"
slug: "angularjs-constants"
categories:
    - "Web-Development"
    - "Development"
tags: ["AngularJS", "JavaScript"]
thumbnail: "http://googledrive.com/host/0By3B_nz_FbUDWEhxbzl6dWZkZW8/1431684150521-angularjs-logo.png"
image: "http://googledrive.com/host/0By3B_nz_FbUDWEhxbzl6dWZkZW8/1431684150521-angularjs-logo.png"
source: ""
---

AngularJS offers a provider for [constants](https://docs.angularjs.org/api/auto/service/$provide#constant) that despite is not very popular it could save you hours of debugging.

Let’s see an example about how Constants works and will be used.

```javascript
angular
    .module('app', [])
    .constant("AppConfig", {
        "url": "http://localhost",
        "port": "80"
    })
    .controller('MainCtrl', function (AppConfig) {
        // Do something with AppConfig...
    });
```

Above the snippet of code is a classic example, you want a config that could be injectable at any part of your application and it works but maybe is not the best use of a constant.

There are better ways to inject a config in your application, probably the best you can do is to create a service and load with [$http](https://docs.angularjs.org/api/ng/service/$http) a JSON file. This is better for many reasons, but probably the most important is that you can update your config file without modifying your code, so if you have the same project in different servers you can have one source code base. That’s better for testing and maintainability.

