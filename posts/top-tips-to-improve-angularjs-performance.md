---
title: "Top Tips to Improve AngularJS Performance"
description: "I am new to Angular, so please take everything that I am about to say with a grain of salt. That being said, I watched a lot of talks and read a lot of articles relevant to Angular performance, and this post is the summary of my findings."
date: "2015-06-02T07:26:03.621Z"
lastmod: "2015-06-02T07:26:03.621Z"
slug: "top-tips-to-improve-angularjs-performance"
categories: ["Web-Development", "Development"]
tags: ["AngularJS","JavaScript"]
thumbnail: "http://i1135.photobucket.com/albums/m637/Maer007/WebSnippet/th_1433229958444_zpsvyvreq32.png"
image: "/assets/1433229958444_zpsvyvreq32.png"
source: ""
---


## Minimize/Avoid Watchers

Usually, if your Angular app is slow, it means that you either have too many watcher, or those watchers are working harder then they should.

Angular uses dirty checking to keep track of all the changes in app. This means it will have to go through every watcher to check if they need to be updated (call the digest cycle). If one of the watcher is relied upon by another watcher, Angular would have to re-run the digest cycle again, to make sure that all of the changes has propagated. It will continue to do so, until all of the watchers have been updated and app has stabilized.

Even though running JavaScript in modern browsers is really fast, in Angular it is fairly easy to add so many watchers that you app will slow down to a crawl.

Keep in mind the following when implementing or refactoring an Angular app:

1.  Watches are set on:
    *   `$scope.$watch`
    *   `{{ }}` type bindings
    *   Most directives (i.e. `ng-show`)
    *   Scope variables `scope: { bar: '='}`
    *   Filters `{{ value | myFilter }}`
    *   `ng-repeat`
2.  Watchers (digest cycle) run on
    *   User action (`ng-click` etc). Most built in directives will call `$scope.apply` upon completion which triggers the digest cycle.
    *   `ng-change`
    *   `ng-model`
    *   `$http` events (so all ajax calls)
    *   `$q` promises resolved
    *   `$timeout`
    *   `$interval`
    *   Manual call to `$scope.apply` and `$scope.digest`

##  Avoid ng-repeat. If you have to use ng-repeat use infinite scrolling or pagination

This was the biggest win for our app. I am not going to go into too much details, but I found the article “[AngularJS: My solution to the ng-repeat performance problem](http://www.williambrownstreet.net/blog/2013/07/angularjs-my-solution-to-the-ng-repeat-performance-problem/)” to be extremely helpful.

For example a unique step id, is a good value to track by when doing an ng-repeat.

    <li ng-repeat="doc in docs track by doc.Id></li>

## Use Bind once when possible

Angular 1.3 added `::` notation to allow one time binding. In summary, Angular will wait for a value to stabilize after it’s first series of digest cycles, and will use that value to render the DOM element. After that, Angular will remove the watcher forgetting about that binding, more about [here](https://code.angularjs.org/1.3.15/docs/guide/expression#one-time-binding).

## Use $watchCollection instead of $watch (with a 3rd parameter)

`$watch` with only 2 parameters, is fast. However, Angular supports a 3rd parameter to this function, that can look like this: `$watch('value', function(){}, true)`. The third parameter, tells Angular to perform deep checking, meaning to check every property of the object, which could be very expensive.

To address this performance issue, angular added `$watchCollection('value', function(){})`. $watchColleciton acts almost like $watch with a 3rd parameter, except it only checks the first layer of object’s properties, thus greatly improving the performance.

## Avoid repeated filters and cache data whenever possible

One time binding does not seem to play well with filters. There seems to be work arounds to make it work, but I think it’s cleaner and more intuitive to simply assign the needed value to a variable (or set it as a property on an object, if you are dealing with a lot of variables).

For example, instead of:

    {{'DESCRIPTION' | translate }}

You can do:  
– In JavaScript `$scope.description: $translate.instant('DESCRIPTION')`  
– In HTML `{{::description}}`

Or instead of: `{{step.time_modified | timeFormatFilter}}`

In JavaScript

    var timeFormatFilter = $filter('timeFormatFilter');
    step.time_modified = timeFormatFilter(step.time_modified);

In HTML

    {{::Path.time_modified}}

## Debounce ng-model

If you know there is going to be a lot of changes coming from an ng-model, you can de-bounce the input.

For example if you have a search input like Google, you can de-bounce it by setting the following ng-model option: `ng-model-options="{ debounce: 250 }`.

This will ensure that the digest cycle due to the changes in this input model will get triggered no more then once per 250ms, more about [model options](https://docs.angularjs.org/api/ng/directive/ngModelOptions).

## Use ng-if instead of ng-show (but confirm that ng-if is actually better for your use case)

`ng-show` will render an element, and use `display:none` to hide it,  
`ng-if` will actually removes the element from DOM, and will re-create it, if it’s needed.

You may need ng-show for an elements that toggles on an off often, but for 95% of the time, ng-if is a better way to go.

## Use Batarang to benchmark your watchers

[Batarang](https://chrome.google.com/webstore/detail/angularjs-batarang-stable/niopocochgahfkiccpjmmpchncjoapek) is a great tool from the Angular team, and it was very helpful in my debugging efforts. It has a lot of useful features, but the one that was the most relevant to this use-case is the performance tab.

![](/assets/1433229511834_zpskh3suh7k.png)