Node.js - Sara Nielsen
======================

.. image:: nodejs.jpg
	:align: center

What is it?
-----------
Node.js is a server-side platform built 
on Chrome's JavaScript runtime for easily building fast and scalable network
applications. It is an open source, cross-platform runtime environment for
developing server-side and networking applications. [tut]_ Node.js applications
are written in JavaScript, but runs on the server. When running JavaScript in an
application the code runs on the web browser and completes once all code has been
run. Node.js runs on the server continuously until it is stopped manually. [you]_ 

History
-------
Node.js was originally developed by Ryan Dahl in 2009. The initial release was supported
by Mac OSX and Linux only. Dahl created Node.js because he desired an easier way
for the browser to query the web server. This idea first came to him when he was
uploading a file to Flickr and the progress bar showed that the browser had no idea
how much of the file had actually been uploaded. Dahl noticed that the code used with the 
most popular web server at the time, Apache HTTP Server, either blocked the entire 
process or implied multiple execution stacks when having simultaneous connections.
This is where Dahl got the idea of creating an asynchronous and event-driven platform. 
Dahl presented his project at the inaugural European JSConf on November 8, 2009 and
the project received a standing ovation. Since then a package manager, npm, was created,
a Windows version was released, and Timothy Fontaine took lead of the project. [wik]_

What is it used for?
--------------------
Node.js has the ability to create non-blocking applications which makes handling
requests very fast. Because of this Node.js is mainly used for I/O bound 
applications, data intensive real-time applications, single page applications, 
JSON APIs, and data-streaming applications. It is not recommended to use Node.js 
for CPU-heavy applications. [air]_

Main Functions
--------------
Asynchronous Functions
~~~~~~~~~~~~~~~~~~~~~~
Node.js prides itself on being asynchronous. In asynchronous programming we do not
return values when the function is done, but instead invoke a callback. A callback
is a function that is usually passed in as the last argument of an asynchronous 
function that allows the program to continue once the callback is finished. [air]_ 
In order to do this, Node.js uses anonymous functions. An anonymous function is a 
function that does not have a name to reference it. We can set a variable equal
to an anonymous function and then use that variable to pass the anonymous 
function into another function. [you]_

.. code-block :: JavaScript

	// set the variable printHello equal to the function
	var printHello = function() {
    	console.log("Hello World!");
	};

	// call the function using the variable name
	printHello();

	// use the variable to pass the function into another function
	setTimeout(printHello, 5000);

By using callbacks, Node.js is considered to be non-blocking. So, instead of the
server waiting for a request to fully complete before moving onto the next, the
server is constantly moving back and forth between the web browser and the 
database. The server will get a request from the web browser, then it will send
the request to the database, and instead of waiting for the request to be finished,
the server moves on to the next request. When the database has completed the 
request, the callback is triggered and the server gets the completed request. [you]_


Modules
~~~~~~~
Actual web applications will have hundreds of lines of code. In order to better
organize this code we can break up code into different files called modules. 
Modules allow us to group together similar code and put it into its own file. 
Then, we export code from the modules and import it into the main file. With 
Node.js we are able to specify what we want to export and what we do not. This is
essentially the same as having public and private methods in a class. [you]_

.. code-block :: JavaScript

	function printFlash() {
    	console.log("Flash: CW");
	}

	function printDoctorWho() {
	    console.log("Doctor Who: BBC");
	}

	module.exports.flash = printFlash;
	module.exports.doctorWho = printDoctorWho;

If we have multiple things to export in a single module it may seem very
repetitive. To fix this we use a variable called ``module.exports``. Module.exports
is a blank object made by default. By calling ``module.exports`` we can add things
to the object. So, instead of doing exports line by line, we can directly assign
our functions to ``module.exports``. [you]_

.. code-block :: JavaScript

	module.exports = {
	    printFlash: function() {
	        console.log("Flash : CW");
	    },
	    printDoctorWho: function() {
	        console.log("Doctor Who : BBC");
	    }
	};

After we export all of our modules, we need to import them into the main file. To 
do this we use the built in ``require`` method and then enter ``/.nameoffile``, 
where ``nameoffile`` is the name of the file that is being imported. After 
importing the file we call the function that we want to use. How we call the 
function depends on the which method was chosen to export the functions. When using 
modules in Node.js its default is to share the module among every file that 
imports it. So, if a change is made to the object in one file, then it will be 
seen in any other file that imports that module. While this is more efficient for 
performance and memory, it may not be useful for all applications. [you]_

.. code-block :: JavaScript
	
	var tvShows = require('./tvShows');

	// First Method
	tvShows.flash();
	tvShows.doctor();

	// Second Method
	tvShows.printFlash();
	tvShows.printDoctorWho();

Result

.. code-block :: JavaScript

	Flash : CW
	Doctor Who : BBC
	
Node.js also has many built in modules called core modules. There are a ton of
core modules and all are very helpful as they have many built in properties and
functions. When importing a core module into the main file do not include ``/.`` ,
only use the file name. The example below shows how to import the file system
module. The file system module has built in functions that can read and write 
to a file. [you]_

.. code-block :: JavaScript

	// Import the File System Module
	var fs = require('fs');

	// Create a file called shows.txt
	fs.writeFileSync("shows.txt", "The Flash is an awesome TV Show!");

	// Read and print the contents of shows.txt to the console
	console.log(fs.readFileSync("shows.txt").toString());

Event Driven
~~~~~~~~~~~~
Node.js also uses events heavily and is another reason why it is pretty fast
compared to other technologies. In an event-driven application there is a main 
loop that listens for events and then triggers a callback function when one of
the events is detected. Events are very similar to callbacks, but the difference
is in how they are called. Callbacks are called when an asynchronous function 
returns its result, whereas event handling works on the observer pattern. An 
observer is a function that listens to or observes an event. Whenever an event 
is initiated, the observer starts executing. [tut]_


Basic Server Application
------------------------
Creating a basic web server application in Node.js is a lot easier than it may 
sound. By using some of the built in modules, the process of creating a server
becomes very easy, very fast. The code below shows how to create a simple server
that is listening on port 8888 and simply writes ``Hello World!``.

.. code-block :: JavaScript

	// import http module
	var http = require('http');

	// function to be called when request is sent to server
	function onRequest(request, response) {
	    console.log("A user made a request.");

	    // type of context being written to the server
	    response.writeHead(200, {"Context-Type": "text/plain"});

	    // data to be written to the server
	    response.write("Hello World!");

	    // always close the response when finished
	    response.end();
	}

	// create the server on port 8888 using request function onRequest
	http.createServer(onRequest).listen(8888);
	console.log("Server is running...");
[you]_

Result

.. image:: basicserver.jpg
	:align: center


To take this even further, instead of just sending plain text we can send an HTML
file. The code below shows how to create a simple web file server application. The
main differences between this code and the code above is that the file system 
module is being used to read the html file and pipe it to the response. Also, a 
new function called ``send404()`` is created in case the user tries to access a 
page that does not exists.

.. code-block :: JavaScript

	// import http and fs modules
	var http = require('http');
	var fs = require('fs');

	// 404 response error message
	function send404 (response) {
	    response.writeHead(404, {"Content-Type": "text/plain"});
	    response.write("Error 404: Page Not Found");
	    response.end();
	}

	// handle a user request
	function onRequest(request, response) {
		// if the user requests the index page
	    if(request.method == 'GET' && request.url == '/'){

	    	// type of context being written to the server
	        response.writeHead(200, {"Content-Type": "text/html"});

	        // use fs to read the html file and pipe it to the response
	        fs.createReadStream("./index.html").pipe(response);
	    }
	    // the page the user requested does not exist
	    else{
	        send404(response);
	    }
	}

	// create the server on port 8888
	http.createServer(onRequest).listen(8888);
	console.log("Server is running...");
[you]_

Result

.. image:: webfile.jpg
	:align: center


Conclusion
----------
Overall, Node.js is a very useful tool to have when making any web application.
It is extremely helpful when creating data intensive and real time applications
because of its event driven and asynchronous environment. Because of this it makes
retrieving data and sending it to the server so much faster than other technologies.
The built in modules make coding much simpler for the programmer and most of the
concepts are easy to pick up on. The most useful module by far has to be the ``http``
module. This module allows us to create a server with one line of code, versus
the numerous lines it would take otherwise. As far as learning how to use Node.js, 
it is fairly easy as long as you have previous JavaScript experience. I would 
definitely recommend any web developer to look into Node.js because it could 
possibly simplify an application, and if not it is still a very useful tool to 
know about.


Sources
-------
.. [air] Vladutu, Alexandru. "Node.js Tutorial – Step-by-Step Guide For Getting Started." Www.airpair.com. AirPair, n.d. Web. 10 Apr. 2017. <https://www.airpair.com/javascript/node-js-tutorial>.
.. [cod] Pollack, Greg, and Carlos Souza. "Real-Time Web with Node.js." Code School. PluralSight, n.d. Web. 11 Apr. 2017. <https://www.codeschool.com/courses/real-time-web-with-node-js>.
.. [tut] Tutorialspoint.com. "Node.js Tutorial." Www.tutorialspoint.com. Tutorials Point, n.d. Web. 11 Apr. 2017. <https://www.tutorialspoint.com/nodejs/index.htm>.
.. [wik] "Node.js." Wikipedia. Wikimedia Foundation, 24 Apr. 2017. Web. 24 Apr. 2017. <https://en.wikipedia.org/wiki/Node.js>.
.. [you] YouTube. Thenewboston, 5 Apr. 2015. Web. 10 Apr. 2017. <https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_>.