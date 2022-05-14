---
title: "HTML5 File Upload without jQuery"
description: "In this blog post, I’ll explain how to use HTML 5, to read information about file(s) selected by users, and to upload the file(s) on a server. You might want to do is let the user upload the selected file or files to a server. This can be done asynchronously very easily."
date: "2015-05-27T07:03:15.750Z"
lastmod: "2016-09-01T16:21:45.027Z"
slug: "html5-file-upload-without-jquery"
categories: ["Web-Development", "Development"]
tags: ["JavaScript","HTML"]
thumbnail: "/assets/html5-file-upload-without-jquery.png"
image: "/assets/html5-file-upload-without-jquery.png"
source: ""
---


In this blog post, I’ll explain how to use HTML 5, to read information about file(s) selected by users, and to upload the file(s) on a server. You might want to do is let the user upload the selected file or files to a server. This can be done asynchronously very easily.

The [File API](https://developer.mozilla.org/en-US/docs/Web/API/File) is one of the most interesting features added with HTML 5\. Now we can fetch and display file(s) information before they are uploaded on the server, and we can send them without posting a form.

We’ll see how to access file(s) information when they are selected by users, and then upload them asynchronously using an Ajax Request without jQuery.

## Show File information

Access information of a file selected by the user. Here is the HTML code :
```html
    <input type="file" id="fileinput" />
    <p id="info"></p>
```
When the user choose a file, the 'change' event is fired on the input element, so we can listen for it :
```javascript
    document.querySelector('#fileinput').addEventListener('change', function(){

    	if(this.files.length===0)
    		return;

    	// gets first selected file
        var file = this.files[0]; 

        document.querySelector('#info').innerText = 
        	'Name: '+ file.name+
        	', Size: '+file.size +
        	', Type: '+file.type +
        	', Last Modified: ' + file.lastModified;

    }, false);
```
As you can see, the File API is quite simple to use, it adds the `files` property on the HTMLInputElement. As you may have noticed, we retrieved the chosen file, by accessing the index 0 of the FileList collection : `this.files[0]`. 

## Previewing Files

As we can read the file(s) information, we can also read the content of the file, this, for example, can allow us to preview selected files before upload.   
Let’s see an example with previewing images, we make little bit changes to previous example.
```html
    <input type="file" id="fileinput" />
    <img id="preview">
    <p id="info"></p>
```
Here is JavaScript code to manage the selected file(s):
```javascript
    document.querySelector('#fileinput').addEventListener('change', function(){

    	if(this.files.length===0)
    		return;

    	// gets first selected file
        var file = this.files[0]; 

        document.querySelector('#info').innerText = 
        	'Name: '+ file.name+
        	', Size: '+file.size +
        	', Type: '+file.type +
        	', Last Modified: ' + file.lastModified;

        // Using FileReader to display the image content
        var reader = new FileReader();
        reader.onload = function(e) { 
        	document.querySelector('#preview').src = e.target.result;
        };
        reader.readAsDataURL(file);

    }, false);
```
Here we introduced the [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) object, that allow us to asynchronously read the contents of files.  
Instantiate the object with the `new FileReader()`, then tell the object to read the data from the file with the method `readAsDataURL`.  
The `onload` method is called after the content is read by the object like an event, then the content of the file is assigned to the image `src` attribute: `document.querySelector('#preview').src = e.target.result;`

## Upload The files

Now we will upload files using [XMLHttpRequest](https://developer.mozilla.org/en/DOM/XMLHttpRequest/Using_XMLHttpRequest) (Ajax). For each files selected by the user we will create an HTTP request to send the file to the server.   
First create a function to upload a file using [XMLHttpRequest](https://developer.mozilla.org/en/DOM/XMLHttpRequest/Using_XMLHttpRequest):
```javascript
    function uploadFile(file){
        var url = '/file/image';
        var xhr = new XMLHttpRequest();
        var fd = new FormData();
        xhr.open("POST", url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Every thing ok, file uploaded
                console.log(xhr.responseText); // handle response.
            } else if(xhr.readyState == 4){
            	// with some error
    			console.log(xhr.responseText); // handle response.
            }
        };
        fd.append("uploadfile", file);
        xhr.send(fd);
    }
```
This function will create an ajax request (POST) on the url and send the file in the `upload_file` request parameter. Here we introduced the FormData object, that allow us to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest send() method. Now we’ll connect the `uploadFile` function to the javascript that manage the selected files :

Here is HTML:
```html
    <input type="file" id="fileinput" />
    <img id="preview">
    <p id="info"></p>
    <button id="uploadfiles">Upload file</button>
```
Here is JavaScript:
```javascript
    document.querySelector('#uploadfiles').addEventListener('change', function () {
        var files = this.files;
        for(var i=0; i<files.length; i++){
            uploadFile(this.files[i]); // call the function to upload the file
        }
    }, false);
```
That is all. You can send other form fields in such way.