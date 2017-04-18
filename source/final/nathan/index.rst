Node.js - Nathan Hawkins
========================

.. image:: img/nodejs_title.png
	:align: center

Main text goes here.

What Is It?
-----------
Node.js (or Node) is a relatively new server-side scripting environment that pushes the benefits of asynchronous programming to the limit. All applications using Node are written in JavaScript and interpreted using Google's V8 Engine (1).

History
-------
Node.js was developed by Ryan Dahl in 2009. 

Why do People Use Node.js?
---------------------
Event-Driven I/O
~~~~~~~~~~~~~~~~
Although Node is a fantastic tool for some situations, not every problem should be solved using it. Everything in Node is driven by an event on a single thread (4). This means that a Node web server can connect to tens of thousands of connections at a single time, but this should only be done for applications that are extremely CPU-unintensive. Because the server operates on a single thread, if an event is processed through one connection, it backlogs the other requests until the first request is finished. This is why Node should only be used for light applications that require few calculations.

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