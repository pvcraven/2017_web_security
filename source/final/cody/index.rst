AngularJS - Cody Good
=====================
Tutorial Basics

.. image:: angular_js.jpg

[amitav]_

Introduction to AngularJS
-------------------------
AngularJS is a powerful JavaScript framework used in Single Page Application
(SPA) projects. It is an open sourced front-end web application framework mostly
maintained by Google. Web application frameworks are designed to support the 
development of web applications including web services and web resource, and 
aimed to automate the overhead associated with activities performed in web 
development. AngularJS aims to simplify the development and testing of 
applications by providing a framework for client-side model-view-controller
(MVC) and model-view-viewmodel (MVVM) architectures. [wiki]_

AngularJS works by reading HTML that has embedded custom tag attributes. The tag
attributes are used as directives to bind together the input and output parts of
the page to a model represented by standard JavaScript. This allows it all to be
more responsive for users. 



History of AngularJS
--------------------
In 2009, Miško Hevery had an idea behind easy-to-make applications. At the 
time, he was working for a company called Brat Tech LLC, and was working to 
create a software behind an online JSON storage service. He, soon after, made 
the project public and released AngularJS as an open-source library.

At first AngularJS was just a side project that Hevery and, his coworker at the
the time, Adam Abrons were working on. It was originally envisioned as a tool
to allow web designers to interact with both the front-end and back-end. When
Hevery joined the team at Google he started a project called Google Feedback 
which took nearly 17,000 lines of code during a six month period. Hevery 
challenged management that he could rewrite the application in no where near 
that amount of time using the project he and Abrons had built previously. 
Because Hevery successfully rewrote the Google Feedback in just three weeks and
right around 1,500 lines of code, his managers were impressed and allowed the 
development of AngularJS to begin. [aw]_

AngularJS version 1.0 was released in 2012. It is now supported by Google and 
has many different versions. Coders all over the world can thank Hevery for 
and easy-to-use application that makes life a little easier.


Overview of AngularJS
---------------------
Behind every problem is a solution. AngularJS is no different from this 
mainstream idea, because it is the solution to a problem that people have been 
working to solve. The problem being, complex code that has to be managed in 
multiple places. For instance, when creating a simple table of items and 
variables, both the HTML (View) and the data (Model) must be updated 
separately. AngularJS has a concept called MV* that is the basis behind 
the framework. Its purpose is to bind the model and the view using what ever 
means necessary. The following is an introduction to simple AngularJS code and 
how the framework operates. Each section includes a small explanation, a code 
sample, and a brief description on what the code is doing behind the scenes. 
[yt]_

**Setting Up an AngularJS Application** [w3]_

There are a few important details when setting up an application. These details
allow the AngularJS to operate and effectively bind the model and the view for 
user efficiency. 

The first thing is loading the library. This is a very simple task and is
recommended to be done in either the head tag or at the beginning of the body tag.

.. code-block:: html

	<!DOCTYPE html>
	<html lang="en-us">
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
	<body>
	</body>
	</html>

Once the library is loaded, the next step is to create a module. AngularJS modules
define an application and are a container for different parts, as well as, controllers
for the application. Modules are created by using the AngularJS function ``angular.module``.

The module is created in JavaScript inside an application variable. As such:

.. code-block:: JavaScript

	var exApp = angular.module('exApp', []);

As discussed before, the purpose of AngularJS was to communicate between the 
model and view efficiently, so the module must then connect to the HTML. 
This is done using an attribute called ``ng-app``. It is recommended that the 
user put this attribute as soon as possible in the HTML, in the original html
tag, for instance, because of the way it works. The attribute will search the 
HTML code for anything that matches AngularJS code and convert it connect it
to the variable created in the JavaScript. So, if the module is initiated at 
the beginning, then the entire HTML file will be overviewed for AngularJS. This 
code looks like the following:

.. code-block:: html

	<!DOCTYPE html>
	<html lang="en-us" ng-app="exApp">
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
	<body>
	</body>
	</html>

With this, the rest of the code that is included in the HTML will be connected 
to the ``var exApp = angular.module('exApp', []);``. Next, controllers come into
play.


**Controllers** [w3]_

As redudant as it sounds, controllers control the data in AngularJS
applications. Meaning that when the controller is created under the module, it
will control what ever HTML it is connected to and the AngularJS will keep
these two things bound no matter what. The controllers have properties and
methods, as well as, include functions, so when writing the JavaScript code it
looks like the following.

.. code-block:: JavaScript

	exApp.controller('exController', function() {
		
	});

For this example, the controller is named ``exController`` and is found under
the ``exApp`` module. In order to connect it will HTML, the following code is 
then used.

.. code-block:: html

	<!DOCTYPE html>
	<html lang="en-us" ng-app="exApp">
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
	<body>
		<div ng-controller="exController">
			<h1>Hello!</h1>
		</div>
	</body>
	</html>

In the example above, notice that an attribute ``ng-controller`` is used to 
associate back to the module where ``exController`` can be found. With this, 
``exController`` now "controls" everything inside of the div tag by means of
the function inside of the ``exController``. Before continuing to build, it's 
important to understand the idea behind attributes and the different kinds. 


**Tag Attributes** [tp]_

Attributes are used in AngularJS as directives to bind input and output.
The developers of AngularJS included many preprogrammed attributes in the 
framework, but users can also create custom attributes. Later some of the
main attributes will be introduced, but the following is what a custom attribute
might look like inside a simple header.

.. code-block:: html

	<h1 ng-call="Hello">Phone Number</h1>

.. code-block:: JavaScript

	console.log($("h1").attr("ng-call"));

The HTML only prints the header "Phone Call" on the page, but by using the 
AngularJS custom attribute ``ng-call``, "Hello" prints on the console. Very 
simple communication between the HTML and JavaScript. 

Some of the more common attributes (or directives) include:
	* ``ng-app`` - defines an AngularJS application
	* ``ng-model`` - binds the value of HTML controls to application data
	* ``ng-init`` - initializes application data
	* ``ng-repeat`` directive repeats an HTML element
	* ``ng-bind`` - binds application data to the HTML view


**AngularJS Expressions** [w3]_

Expressions are used to bind data to HTML in AngularJS. First the application
resolves the expression and then it returns the result as the expression is 
written. Expressions can contain literals, operators, variables, etc. 
Expressions can either be written in double braces ``{{ expression }}`` or
inside an attribute ``ng-init = "expression"``.

The following is an example of how an expression can be used inside of an 
attribute to change the color of a box on the browser. The user can edit the
expression in the div tag and the AngularJS will produce the appropriate new 
color on the screen.
	
.. code-block:: html

	<!DOCTYPE html>
	<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

	<body>

	<div ng-app="" ng-init="color='red'">
	<input style="background-color:{{color}}" ng-model="color" value="{{color}}">
	</div>

	</body>

	</html>

This is what the code results in:

.. image:: colorexample.jpg



Conclusion
----------

AngularJS is a very powerful tool that programmers are able to benefit from. 
Even though this tutorial is brief, there are many out on the web that include
much more detailed step-by-step workshops to help users better understand the 
framework. One of the most important aspects that AngularJS brings to the table
is simplicity and efficiency. Often times, coding can be a very challenging and 
rigorous task. With many complications of what is the right way to code things 
and which way is fastest, AngularJS stands out by making the development and 
testing of applications easier. The framework that Hevery and Abrons started 
working on in 2009, now provides for client-side MVC and MVVM architectures 
everywhere. With the ability to bind the model and the view that allows for 
faster response times for users, AngularJS is a very intuitive and 
problem-solving application. 



**Sources**

.. [amitav] Amitav Roy. `"AngularJS Using Factory Method, Post Data and Saving 
	To DB." <http://www.amitavroy.com/justread/content/articles/angularjs-using-factory-method-post-data-and-saving-db/>`_ WordPress, 19 Mar. 2013. Web. 24 Apr. 2017.

.. [aw] Andrew Austin. `"An Overview of AngularJS for Managers." <http://andrewaustin.com/an-overview-of-angularjs-for-managers/>`_ 
	27 Aug. 2017. Web. 24 Apr. 2017.

.. [angjs] `"AngularJS." <https://docs.angularjs.org/tutorial>`_ The MIT License, Web. 17 Apr. 2017.

.. [wiki] `"AngularJS, Wikipedia." <https://en.wikipedia.org/wiki/AngularJS>`_ Wikipedia, 20 Apr. 2017. Web. 24 Apr. 2017.

.. [w3] `"AngularJS Tutorial." <https://www.w3schools.com/angular/default.asp>`_ W3Schools, Web. 17 Apr. 2017. 

.. [tp] `"Learn AngularJS." <https://www.tutorialspoint.com/angularjs/index.htm>`_ TutorialsPoint. Web. 17 Apr. 2017.

.. [ap] Todd Motto. `"AngularJS Tutorial: A Comprehensive 10,000 Word Guide." 
		<https://www.airpair.com/angularjs>`_ AirPair, Web. 17 Apr. 2017.

.. [yt] Tony Alicea. `"Learn and Understand AngularJS - The First 50 Minutes." 
		<https://www.youtube.com/watch?v=ejBkOjEG6F0>`_ YouTube, 8 Oct. 2014. Web. 17 Apr. 2017.








