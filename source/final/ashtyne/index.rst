Angular JS - Ashtyne Madsen
===========================

History
-------

Developed in 2009 by Misko Hevery and Adam Abrons
Version 1.0 was release in 2012
Version 2
Internet Explorer versions 6,7 , and 8 do not support versions 1.2 and later [AJSHist]_.
JavaScript framework, library written in JavaScript

HTML attribute extension with directives and binds data to HTML with expressions

The Basics of Angular JS
------------------------

Add ng- to many of the AngularJS (using data-ng- creates proper HTML) [W3]_
	App – tells AngularJS to be active in whatever portion of the page it is added to [AJS]_

	Example Code
	^^^^^^^^^^^^
	.. code-block:: javascript
	
		<!DOCTYPE html>
		<html lang="en">
		<head>
	    	<meta charset="UTF-8">
		    <title>Final Code Samples</title>
		    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
		</head>
		<body>
		    <div ng-app="">
		        <p>This is how to start AngularJS.</p>
		    </div>
		</body>
		</html>

	Model – links the form and model so whenever something is typed in the input box, it shows up wherever you call the model name [AJS]_

	Example Code
	^^^^^^^^^^^^
	
	Bind – a way to automatically update either the view when the model changes or the model when the view changes [AJS]_

	Example Code
	^^^^^^^^^^^^
	
	Init – initializes AngularJS application variables [W3]_

	Example Code
	^^^^^^^^^^^^
	
	Expression – written inside {{}} and will print data exactly as it is written can be used in the same way as a bind [W3]_

	Example Code
	^^^^^^^^^^^^
	
	Module – defines an application, is a container for different parts of an application and for the application controller [W3]_

	Example Code
	^^^^^^^^^^^^
	
	Controller – a JavaScript object that controls the data of an application [W3]_

	Example Code
	^^^^^^^^^^^^
	

References
----------

.. [W3]	"`AngularJS Introduction <https://www.w3schools.com/angular/angular_intro.asp>`_." W3Schools.com. Web. 06 April 2017.
.. [AJS] "`AngularJS - Superheroic Javascript MVW Framework <https://angularjs.org/>.`_" Google. Web. 06 April 2017.
.. [AJSHist] "'AngularJS History <https://angularzone.wordpress.com/angularjs-history/>.'_" 