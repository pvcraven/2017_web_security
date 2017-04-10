Title Goes Here
===============

Hello, World!
-------------

This short tutorial will help to install Node.js installed and write a short 
"Hello, World!" file to test your installation. The first thing that needs to be 
done is downloading Node.js from the `Node.js Website <https://nodejs.org/en/>`_
. This install should be in the ``C:\Program Files\nodejs\`` directory. 

.. image:: img\capture.png
	:align: center

Then hit next a couple times, leaving the rest of the features the same, and 
finally install. 

Testing Installation
^^^^^^^^^^^^^^^^^^^^

Once this install is complete create a new document called 
main.js. No need for an IDE or anything, just use a basic text editor such as 
sublime. Copy the following code into the file ::
	/* Hello world program in node.js */
	console.log("Hello, world!")
You can see this is just like a normal Javascript file, the difference is that 
the node.js module is used to execute it. To test the installation open the 
command prompt and navigate to the directory where main.js is saved. Then type 
``node main.js`` and hit enter. "Hello, World!" should appear. 

Creating a HTTP Server
^^^^^^^^^^^^^^^^^^^^^^

The next step is to get out of the command prompt and to start operating on a 
server. :
	var http = require("http");

	http.createServer(function (request, response) {
		response.writeHead(200, {'Content-Type': 'text/plain'});

		response.end('Hello World\n');
	}).listen(8081);

	console.log('Server running at http://127.0.0.1:8081/');