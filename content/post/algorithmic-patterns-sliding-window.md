---
title: "Algorithmic Patterns: Sliding Window"
description: "Algorithmic Patterns: Sliding Window is a method, strategy, or technique of solving a problem"
date: "2020-02-19T14:32:44.228Z"
lastmod: "2020-02-19T14:32:44.228Z"
slug: "algorithmic-patterns-sliding-window"
categories: ["Algorithm"]
tags: ["Algorithm", "JavaScript"]
thumbnail: "/assets/algorithm.svg"
image: "/assets/algorithm.svg"
source: ""
---


When you start to prepare for interviews it is good to know common strategis to solve problem. You may find that several
solution strategies for given problem, but a good programmer is one who is proficient at examining the problem to be solved and identifying the appropriate algorithmic technique to use.
We are going to review pattern called **Sliding Window** in this short article. I will try to give you at least a high level overview of Sliding Window stratege. 
Currently, I have solved around 400 problems in the [leetcode](https://leetcode.com) and 200 problems in the [hackerrank](https://hackerrank.com) and time to time participate in contests. I usually solve 3 problems in a contest and sometimes 4 problems. Lets come back to the topic.

Generate problem statement for this pattern starts:

> Given an array(list), find the average(maximum|minimum|sum) of all contiguous subarrays of size(adds up to) ‘K’


And the approach for this is

> Keep track of any consecutive subarrays of size N. You can visualize each contiguous subarray as a sliding window of N elements add/remove as needed

Example: Given an array, find the average of all contiguous subarrays of size 3 in it.

```JavaScript
function find_averages_of_subarrays(arr, k) {
  const result = [];
  let sum = 0;
  let start = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (i >= k - 1) {
      result.push(sum / k); // calculate the average
      sum -= arr[start]; // subtract the element from begining
      start++; // slide the window ahead
    }
  }

  return result;
}
```




Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>