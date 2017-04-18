AngularJS - Cody Good
=====================
Tutorial Basics


Introduction to AngularJS
-------------------------
AngularJS is a powerful JavaScript framework used in Single Page Application
(SPA) projects. It is an open sourced front-end web application framework mostly
maintained by Google. Web application frameworks are designed to support the 
development of web applications including web services and web resource, and 
aimed to automate the overhead associated with activities performed in web 
development. AngularJS aims to simplify the development and testing of applications
by providing a framework for client-side model-view-controller and model-view-viewmodel
architectures. 

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

Verison 1.0 was released in 2012. 
Miško Hevery started working on the project in 2009.
Version 1.0 released in 2012.
Now supported by Google.



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

**Setting Up an AngularJS Application**

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


**Controllers**

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


**Tag Attributes**

Attributes are used in AngularJS as directives to bind input and output.
The developers of AngularJS included many preprogrammed attributes in the 
framework, but users can also create custom attributes. Later some of the
main attributes will be introduced, but the following is what a custom attribute might look like inside a simple header.

.. code-block:: html

<h1 ng-call="Hello">Phone Number</h1>

.. code-block:: JavaScript

console.log($("h1").attr("ng-call"));

The HTML only prints the header "Phone Call" on the page, but by using the AngularJS custom attribute ``ng-call``, "Hello" prints on the console. Very simple communication between the HTML and JavaScript. 

Some of the more common attributes (or directives) include:
	* ``ng-app`` - defines an AngularJS application
	* ``ng-model`` - binds the value of HTML controls to application data
	* ``ng-init`` - initializes application data
	* ``ng-repeat`` directive repeats an HTML element
	* ``ng-bind`` - binds application data to the HTML view


**AngularJS Expressions**


	``{{ expression }}``
	``ng-init = "expression"``

	* Resolves the expression and returns the result as the expression is written.
	
	* Can contain literals, operators, and variables.
	
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



New directives are created by using the .directive function
	
EXAMPLE CODE HERE
	
Data Binding
	* AngularJS binds AngularJS expressions with AngularJS data.
	* Data binding in AngularJS is the synchronization between the model and the view
	* Data Model
	* HTML View
	* Two-way Binding
	
ng-model
	* You can bind the value of an input field to a variable created in AngularJS.
	* If the user changes the value inside the input field, the AngularJS property will also change its value
	* Provide type validation for application data
	* Provide status for application data 
	* Provides CSS classes for HTML elements, depending on their status
	
EXAMPLE CODE HERE
	

Scopes
	* The binding part between HTML and JavaScript
	* An object with properties and methods (like a controller)
	* Available for the view and controller
	* **$scope**
	* Always know what scope you are dealing with at all times
	
EXAMPLE CODE HERE

Filters
	* Can be added to format data
	* Examples
	
Services
	* Function or object, available for and limited to, your AngularJS application
	* 30 built in services in AngularJS
	* Examples
	
Select Boxes
	* AngularJS lets you create drop-down lists based on items or objects in an array
	* **ng-options**
	* Also can use **ng-repeat**
	* Example
	
SQL
	* Data from databases can easily be shown using AngularJS as long as the data are in JSON format









**Sources**

https://www.w3schools.com/angular/default.asp

https://docs.angularjs.org/tutorial

https://www.tutorialspoint.com/angularjs/index.htm

https://www.airpair.com/angularjs

https://en.wikipedia.org/wiki/AngularJS

