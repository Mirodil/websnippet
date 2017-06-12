---
title: "Speech Recognition & Text to Speech in the Browser"
description: "This is an introduction to experimental Chrome APIs. With these tools, you can build your very own iOS Siri, Windows Cortana clone."
date: "2016-08-03T02:17:59.830Z"
lastmod: "2016-08-17T03:11:47.762Z"
slug: "speech-recognition-and-text-to-speech-in-the-browser"
categories: ["Web-Development", "Development"]
tags: ["JavaScript"]
thumbnail: "http://i963.photobucket.com/albums/ae120/Mirodil/Voice-Processing1.jpg"
image: "http://i963.photobucket.com/albums/ae120/Mirodil/Voice-Processing1.jpg"
source: ""
---


## Speech Recognition

If you've ever clicked the microphone on the right-hand side of the Google search input, you've already experienced the power of the SpeechRecognition API. The speech recognizer will listen to what you say and convert your words to a string.

[Browser support](http://caniuse.com/#feat=speech-recognition) is currently limited to just Chrome for now. Firefox support can be enabled by setting the `media.webspeech.recognition.enable` flag in `about:config`.

    // This API is currently prefixed in Chrome
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    // Create a new recognizer
    var recognizer = new SpeechRecognition();

    // Start producing results before the person has finished speaking
    recognizer.interimResults = true;

    // Set the language of the recognizer
    recognizer.lang = 'en-US';

    // Define a callback to process results
    recognizer.onresult = function (event) {
      var result = event.results[event.resultIndex];
      console.log('Interim result', result[0].transcript);
    };

    // Start listening...
    recognizer.start();

[Demo](https://www.google.com/intl/en/chrome/demos/speech.html)

For more information, visit the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition) and [Web Speech API Specification](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html)

## Speech Synthesis or Text to Speech

Another API that might surprise you is the browser's speechSynthesis API. It allows you to make your browser talk. 

[Browser support](http://caniuse.com/#feat=speech-synthesis) is a little better for this API, as it works on both Chrome and Safari (including mobile browsers).

    speechSynthesis.speak(
      new SpeechSynthesisUtterance('Hello World')
    );

You can also specify which voice to use:

    var voices = speechSynthesis.getVoices();
    var utterance = new SpeechSynthesisUtterance('Hello World');
    utterance.voice = voices[1];
    speechSynthesis.speak(utterance);

For more information, visit the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) and [Web Speech API Specification](https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html)