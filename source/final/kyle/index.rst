Node.js - Kyle Hovey
====================

Introduction
------------
What is Node.js?
^^^^^^^^^^^^^^^^

JavaScript is a programming language that is used within web browsers to 
manipulate webpages. Normally JavaScript operates within a browser, but what if 
JavaScript could be used outside of a browser? That is what Node.js enables it 
to do. 

One confusing thing is what Node.js actually is. It is not a programming 
language in itself. Rather it is a program that runs the programming language 
JavaScript. The Node.js software is actually written in the language C. Using 
C as the structure of the Node progam gives the program the capability of 
networking, which would not be possible if Node itself was written in 
JavaScript. Node not only provides the program to run JavaScript, but provides 
a JavaScript library that greatly enhances the capabilities of the language. 
Before getting too much into the details of Node.js, here is a guide to getting 
it set up and testing the installation. 

Installing Node.js
------------------

This short tutorial will help to install Node.js and write a "Hello, World!" 
program to test your installation. The first thing that needs to be 
done is downloading Node.js from the `Node.js Website <https://nodejs.org/en/>`_

Testing Installation: Hello, world!
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Once the install is complete create a new document called main.js. No need for 
an IDE or anything, just use a basic text editor such as sublime. Copy the 
following code into the file ::
	/* Hello world program in node.js */
	console.log("Hello, world!")
This is just like a normal Javascript file, the difference is that 
the node.js module is used to execute it. To test the installation open the 
command prompt and navigate to the directory where main.js is saved. Then type 
``node main.js`` and hit enter. "Hello, World!" should appear. 

Why use Node.js?
----------------

Alright, so you can write and run JavaScript code without a browser. What's the 
point? One of the most common uses of Node.js is server side programming. 
The JavaScript libraries that are provided by Node.js give it this capability.
Node.js gives developers the opportunity to develop not only the frontend using 
JavaScript, but the backend of their websites in as well. This means that it is 
not necessary to learn another language to use on the backend such as Java or 
PHP. 

Another benifit of using JavaScript on the frontend and backend is that 
no longer a need for the translation of data. When using different languages 
A translator, such as JSON is used to change the format of the data when sending
and receiving it from the server. Using a translator like JSON can pose an 
issue because it needs to be able to support the data type that you are using, 
and that just adds one more layer of potential problems that could be avoided 
altogether by using Node.js.

Running a File Server with Node.js
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Node.js is made to be run on a server. One operation of a server is to serve 
files to the user. This is incredibly easy to do with Node.js. Copy the 
following code into an empty file with the title ``NodeFileServer.js``. ::
	var sys = require("util"),
	    http = require("http"),
	    url = require("url"),
	    path = require("path"),
	    fs = require("fs");

	http.createServer(function(request, response) {
	    var uri = url.parse(request.url).pathname;
	    var filename = path.join(process.cwd(), uri);
	    fs.exists(filename, function(exists) {
	        if(!exists) {
	            response.writeHead(404, {"Content-Type": "text/plain"});
	            response.end("404 Not Foundn");
	            return;
	        }

	        fs.readFile(filename, "binary", function(err, file) {
	            if(err) {
	                response.writeHead(500, {"Content-Type": "text/plain"});
	                response.end(err + "n");
	                return;
	            }

	            response.writeHead(200);
	            response.end(file, "binary");
	        });
	    });
	}).listen(8080);

	console.log("Server running at http://localhost:8080/");

Then place this picture in the same directory.

	.. image:: img/nodejslogo.jpg

After saving these two things navigate to the directory that these are saved in 
on the command-line and type ``node NodeFileServer.js``. After that executes 
find a browser and go to ``http://localhost:8080/nodejslogo.jpg``. The following
screen should appear. 

	.. image:: img/FileServer.PNG

It is that easy to create a file server with Node.js! But what exactly is 
happening?

How Does Node.js Work?
----------------------

Node.js uses what is called asynchronous event-driven, non-blocking runtime. 
There is quite obviously a lot of explaination for that phrase to make any sense
to the average listener, so the next few sections will hopefully provide some 
clarity. 

Asynchronous Event-Driven Programming
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Asynchronous programming is something that is not often talked about, but is 
used by almost every programmer. Asynchronous programs are responsive to the 
user. In web development this makes a lot of sense. There is no need for a 
webpage to ask "Did anything happen?" repeatedly. Instead the webpage reacts to 
what are called events. On a webpage a user clicks a button, and an event is 
fired. Then the code that is attached to that event runs. It isn't possible to 
see what order the code will be executed in when looking at the source. In the 
above example the file server only provides files at the users request. When a 
user requests a file an event is triggered, and the server retrieves the file. 
The rest of the time the node is inactive. 

Non-Blocking
^^^^^^^^^^^^

Node.js is designed to be non-blocking, but what exactly does this mean? In 
plain english it means that the program doesn't have to wait for one thing to 
finish before it can move on to the next thing. This specifically applies to 
non-JavaScript operations when using Node.js. In the above example, if another 
function was added to the program then that function would not have to wait for 
the program to retrieve the file before it could execute. This feature, combined
with asynchronous event-driven programming makes Node.js really fast. Speed is 
one of the major advantages of Node.js.

Using Javascript to program
---------------------------
It is also possible with Node.js to run programs that would typically be written
in other languages. This next example shows how advanced these programs can be. 
It outputs CIS in ASCII characters with a user specified font size. This is done
using while loops, nested for loops, and if else statements in order to show 
that these programs can be just as complex as programs written in other 
languages. Place this code in a file named ``PrintCIS.js`` and run in from the 
command-line by entering ``node PrintCIS.js`` ::

	var stdin = process.openStdin();

	stdin.addListener("data", function(d) {
	    // note:  d is an object, and when converted to a string it will
	    // end with a linefeed.  so we (rather crudely) account for that  
	    // with toString() and then trim() 
	    var scale = Number(d.toString().trim());
		var c1 = ["C", "C", "C", "C", "C"];
		var c2 = ["C", " ", " ", " ", " "];
		
		var i1 = ["I", "I", "I", "I", "I"];
		var i2 = [" ", " ", "I", " ", " "];
		
		var s1 = ["S", "S", "S", "S", "S"];
		var s2 = ["S", " ", " ", " ", " "];
		var s3 = [" ", " ", " ", " ", "S"];

		var count = 0;
		var line = 1;
		var output = "";
		while (line <= 5*scale)
		{
			if (line == ((scale*5) - (scale - 1)) || line == 1){
			    for (var i = 0; i < scale; i++) {
		    		for (var j = 0; j < c1.length; j++) {
		    			count = 0;
		    			while(count < scale)
		    				{
		    					output += c1[j];
		    					count++;
		    				}
		    			}
		    			output += "\n";
		    			line++;
		    		}
	   			}	
			else
			{
				for (var i = 0; i < c2.length; i++)
				{
					count = 0;
					while (count < (scale))
					{
						output+=c2[i];
						count++;
					}
				}
				
				output += "\n";
				line++;
			}
		}
		
		line = 1;
		output += "\n";

		while (line <= (5*scale))
				{
					if (line == ((scale*5) - (scale - 1)) || line == 1)
					{
						for (var j = 0; j < scale; j++)
						{
							for (var i = 0; i < i1.length; i++)
							{
								count = 0;
								while (count < (scale))
								{
									output += i1[i];
									count++;
								}
							}
							output += "\n";
							line++;
						}
					}
					else
					{
						for (var i = 0; i < i2.length; i++)
						{
							count = 0;
							while (count < (scale))
							{
								output += i2[i];
								count++;
							}
						}
						
						output += "\n";
						line++;
					}
				}

		line = 1;
		output += "\n";

		while (line <= 5*scale)
				{
					if (line == ((scale*5) - (scale - 1)) || line == 1 || line == (scale*2) + 1)
					{
						for (var j = 0; j < scale; j++)
						{
							for (var i = 0; i < s1.length; i++)
							{
								count = 0;
								while (count < (scale))
								{
									output += s1[i];
									count++;
								}
							}
							
								
							output += "\n";
							line++;
						}
						
					}
					
					
					
					else if (line < (scale*2) + 1 && line > 1)
					{
						for (var i = 0; i < s2.length; i++)
						{
							count = 0;
							while (count < (scale))
							{
								output += s2[i];
								count++;
							}
						}
						
						output += "\n";
						line++;
					}
					
					else
					{
						for (var i = 0; i < s3.length; i++)
						{
							count = 0;
							while (count < (scale))
							{
								output += s3[i];
								count++;
							}
						}
						
						output += "\n";
						line++;
					}
				}

	    console.log(output);
	  });
	
Nothing happened? Enter a number into the command prompt.

	.. image :: img/PrintCIS.PNG

Enter any font size and watch the letters get bigger!


Creating a HTTP Server -- Not Sure if I want to include this
^^^^^^^^^^^^^^^^^^^^^^

The next step is to get out of the command prompt and to start operating on a 
server. ::
	var http = require("http");

	http.createServer(function (request, response) {
		response.writeHead(200, {'Content-Type': 'text/plain'});

		response.end('Hello World\n');
	}).listen(8081);

	console.log('Server running at http://127.0.0.1:8081/');


https://organicdonut.com/2013/08/technical-understanding-javascript-node-js-and-their-libraries/#

https://www.oreilly.com/ideas/what-is-node

http://stackoverflow.com/questions/17959663/why-is-node-js-single-threaded