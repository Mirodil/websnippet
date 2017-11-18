---
title: 'Handling long unexpected text content in CSS'
date: "2017-06-19T18:32:36.120Z"
description: 'In this article, we will go through different UI bugs from real-world examples websites so we can consider for them from the beginning.'
slug: "handling-long-unexpected-text-content-in-css"
categories: [ "Web-Development", "Development" ]
tags: ["CSS"]
thumbnail: "https://4.bp.blogspot.com/-seJJbpJWRwM/Wg2v8-oOmXI/AAAAAAAAD0s/5JoNHCDf_h4svjywhHH0M2kVh0AXzwJRQCLcBGAs/s400/html-and-css.jpg"
image: "https://4.bp.blogspot.com/-seJJbpJWRwM/Wg2v8-oOmXI/AAAAAAAAD0s/5JoNHCDf_h4svjywhHH0M2kVh0AXzwJRQCLcBGAs/s1600/html-and-css.jpg"
source: ""
---

When we write CSS, sometimes we forget about edge cases in the designs. For example, when the content is longer than we expected or has long word or link enough and we didn't account for that possibility. We can't guarantee that our CSS will always work as expected, but at least we can reduce that by testing different types of the text content.

Sometimes there are long words in an article or in a block. This might not cause an issue with a very wide viewport. But when we change viewport to smaller sizes like mobile or tablet, this will cause a horizontal scrolling and it will be annoying.

We walk through each solution for solve such issues. Ready? Let's go.

## Use CSS `word-break`

```css
.article{
    word-break: break-all;
}
```

Using [word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break) word breaks may be inserted between any character. For instances: `the` might be broken into `th` and `e`, which makes hard to read an article content. You have to test well when using word-break since it has some differences between browsers. 

## Using CSS `text-overflow`

```css
.article {
  overflow: hidden;
  text-overflow: ellipsis;
}
```
The property `overflow: hidden` is required for [text-overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow).
In the case of [text-overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow), a word or a link can be clipped, and display an ellipsis, or display a custom string. Here you can check available values [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow).

It is good for single line text content, such as titles, but for multi-line content, it does not work well.

## Using CSS `overflow-wrap` or `word-wrap`

> Originally a Microsoft (unprefixed) proprietary extension called word-wrap, and implemented by most 
> browsers, it has been renamed to overflow-wrap. The original name word-wrap is now considered an 
> "alternate name" for overflow-wrap.
>
> -- <cite>[developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap)</cite>

```css
.article{
    overflow-wrap: break-word;
    /* the following is required for overflow-wrap/word-wrap */
    width: 500px;
}
```

Words may be broken at arbitrary points if there are no otherwise-acceptable break points in the line. It works very well for the multi-line contents, such as articles or block of texts. In this case, it does not brake word `the` into `th` and `e`, instead moves to next line, if the word is longer than the container width then it will break the word at arbitrary points.

As no one likes to specify `width`(by my assumption), We are going to improve it in the next solution.

## Without specifying width

As you can notice last example works well but we have to specify `width` property.
We can make it better without specifying `width` property in pixels.
We need add two more CSS properties: `table-layout: fixed;` and `display: table;`,
otherwise we have to wrap it into `table` element with one column and one row.

```
.article{
    overflow-wrap: break-word;
    /* the following are required for overflow-wrap/word-wrap */
    table-layout: fixed;
    word-break: normal;
    display: table;
    width: 100%;
}
```

Here is the result:

<iframe src="http://jsfiddle.net/Mirodil/qc38ky3v/embedded/result,html,css/" width="100%" height="450">
</iframe>
