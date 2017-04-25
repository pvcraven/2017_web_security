Node.js - Nathan Hawkins
========================

.. image:: img/nodejs_title.png
	:align: center

Main text goes here.

Introduction
------------
History
~~~~~~~
JavaScript is an incredibly helpful language. Nearly every modern web page uses JavaScript as a way to provide client-side interactivity between the user and their page, but the web hasn't always been so convenient. If JavaScript had never been developed, users wouldn't be able to like cat pictures on their grandmother's FaceBook page. There certainly wouldn't be a way to change viewing preferences on YouTube video. Heck, without JavaScript, the fancy menu bar to the left of this text wouldn't change colors based on where you, the user, placed your cursor. Before JavaScript, web pages were simply words, links, pictures, and whatever could be done through the restrictions of HTML. (6)

When Brendan Eich created JavaScript, the web no longer had to be boring. Web developers could create interactive objects for more convenient browsing. Finally, there was a way to access the user's computer without forcing them to load a separate page! However, there was one problem: JavaScript was strictly client-side. There wasn't an easy way for the server to initiate contact with the user, and this issue limited the developers in what they could do (4). For example, if an eBay user wanted to know real-time when a bid was made on their product, tough luck. They better get used to mashing that refresh button.

That's why when Ryan Dahl developed Node.js in 2009 it gained huge momentum from the get-go (1). Used by huge corporations such as Neflix, GitHub, Google, and PayPal, Node.js is a widely popular server-side platform that uses JavaScript to let developers create extremely fast web applications (7). Yes, you read that right: Node.js applications are coded in Javascript, and they're lightning fast. Instead of using common languages like Java to run their servers, full-stack developers could now use the same language in both their front-end and back-end applications. But enough of how Node.js came to be. What is Node.js, and why is it so popular?

What is Node.js?
~~~~~~~~~~~~~~~~
The official Node.js website defines Node.js as, "a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient." (3). These features allow for Node.js applications to serve more requests than traditional back-end servers, which is crucial if the owner wishes to serve multiple thousands of clients at a time.


Features of Node.js
-------------------

Event-Driven I/O
~~~~~~~~~~~~~~~~
Although Node is a fantastic tool for some situations, not every problem should be solved using it. Everything in Node is driven by an event on a single thread (4). This means that a Node web server can connect to tens of thousands of connections at a single time, but this should only be done for applications that are extremely CPU-unintensive. Because the server operates on a single thread, if an event is processed through one connection, it backlogs the other requests until the first request is finished. This is why Node should only be used for light applications that require few calculations.

The main event loop in Node.js is in charge of connecting to and distributing between clients on a single thread. This feature of Node.js ensures that the server is optimized to make as many connections as possible, but there is a cost. Because the server runs everything in a single thread, the server sacrifices CPU power for more connections to clients. This is important because it highlights the situations for which you should pick Node.js: lightweight applications that require few CPU operations. 

However, when used correctly, Node can greatly outshine popular tools such as PHP. 

Examples of Node.js Applications
--------------------------------
Simple Get
~~~~~~~~~~
.. code-block :: JavaScript

	// Include http module, 
	var http = require("http"), 
	// And url module, which is very helpful in parsing request parameters. 
		url = require("url"); 

	// Create the server. 
	http.createServer(function (request, response) { 

		request.on('readable', function () {
	       request.read(); // throw away the data
	  	});

		// Attach listener on end event. 
		request.on('end', function () { 
			// Parse the request for arguments and store them in _get variable. 
			// This function parses the url from request and returns object representation. 
			var _get = url.parse(request.url, true).query; 
			// Write headers to the response. 
			response.writeHead(200, { 
				'Content-Type': 'text/plain' 
			}); 
			// Send data and end response. 
			response.end('Here is your data: ' + _get['data']); 
		}); 
	// Listen on the 8080 port. 
	}).listen(8080);

(2)

Bulls and Cows Game
~~~~~~~~~~~~~~~~~~~
.. code-block :: JavaScript

	/**
	 * Created by Nathan Hawkins on 4/17/2017.
	 */
	// 5 letter isogram in Node.js
	// When running (done by locating in command prompt and using "node BullsAndCows.js"),
	// go to localhost:8080/?data=*your_data_here*

	var secretWord = "slant";
	var secretWordLength = 5;

	// Include http module,
	var http = require("http"),
	// And url module, which is very helpful in parsing request parameters.
	    url = require("url");

	// Create the server.
	http.createServer(function (request, response) {

	    request.on('readable', function () {
	        request.read(); // throw away the data
	    });

	    // Attach listener on end event.
	    request.on('end', function () {
	        // Parse the request for arguments and store them in userData variable.
	        // This function parses the url from request and returns object representation.
	        var userData = url.parse(request.url, true);
	        var data = userData.query.data;

	        // Write headers to the response.
	        response.writeHead(200, {
	            'Content-Type': 'text/plain'
	        });

	        // Here goes the logic for the BullsAndCows game
	        // If the user is correct, show the solution. Otherwise, show number of
	        // bulls and cows
	        var isUserCorrect = checkSolution(data);

	        if (isUserCorrect) {
	            // CORRECT, show answer
	            // Send data and end response.
	            response.end('Congratulations! ' + secretWord + ' is the secret word!');
	        }
	        else {
	            // INCORRECT, show number of bulls and cows
	            var numBulls = checkBulls(data);
	            var numCows = checkCows(data);

	            if (numCows >= 0)
	            	response.end('Number of Bulls: ' + numBulls + 
	            		'\nNumber of Cows: ' + numCows);
	            else if (numCows == -1)
	            	response.end('Make sure your isogram is ' + secretWordLength + 
	            		' characters in length');
	            else if (numCows == -2)
	            	response.end('Please enter a ' + secretWordLength + '-letter isogram');
	        }

	        // Send data and end response.
	        // response.end('Here is your data: ' + userData['data']);
	    });
	// Listen on the 8080 port.
	}).listen(8080);

	// Returns whether or not the user has entered the correct solution
	function checkSolution(data) {
	    // userData must be 5 characters long
	    // For some reason, you have to ask if there is data in here. Don't ask me
	    // why it works. It just does. I've spent like 5 hours on this stupid thing
	    // and this is what I've got. FOR THE LOVE OF OUR NEWLY-RISEN GOD, 
	    // ------------------------DO NOT CHANGE THIS----------------------------
	    if (data) {
	    	// console.log('There is data');
	    	if (data.length != secretWordLength) return false;
	    	else if (!(data === secretWord)) return false;
	    }
	    return true;
	}

	// Returns the number of letters in the correct location
	function checkBulls(data) {
	    if (data.length != secretWordLength) return -1;

	    var numBulls = 0;

	    for (var i = 0; i < secretWordLength; i++) {
	        if (data[i] == secretWord[i]) numBulls++;
	    }

	    return numBulls;
	}

	// Returns the number of letters in the word, but out of position
	function checkCows(data) {
	    if (data.length != secretWordLength) return -1;

	    var numCows = 0;
	    var lettersUsed = ['0', '0', '0', '0', '0'];

	    for (var i = 0; i < secretWordLength; i++) {
	        var char = data[i];
	        if (secretWord.includes(char) && !(char === secretWord[i]) &&
	        	!(lettersUsed.includes(char))) numCows++;

	        if (lettersUsed.includes(char)) return -2;
	        lettersUsed[i] = char;
	    }

	    return numCows;
	}

Conclusion
----------

We're doing Node.js, 'cause it's awesome.

References
----------
1 - http://blog.training.com/2016/09/about-nodejs-and-why-you-should-add.html

2 - https://code.tutsplus.com/tutorials/nodejs-for-beginners--net-26314

3 - https://nodejs.org/en/

4 - https://www.toptal.com/nodejs/why-the-hell-would-i-use-node-js

5 - https://developers.google.com/v8/

6 - http://www.makeuseof.com/tag/what-is-javascript-and-can-the-internet-exist-without-it/

7 - https://www.coderfactoryacademy.edu.au/posts/top-8-sites-built-with-node-js