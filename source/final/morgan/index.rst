AngularJS - Morgan Ryan
===============

Introduction
-------------

AngularJS is a "JavaScript-based open-source front-end web application framework that is maintained by Google with a community of individuals and corporations to address many of the challenges encountered in developing single-page applications[wikiAngularJS]_." AngularJS is put in place to help simplify the development and testing of mobile apps but providing client-side model-view-controller (MVC) and model-view-viewmodel (MVVM) and will work with most up to date internet applications. 

History of AngularJS
---------------------

AngularJS first came about when the first team started working on it in 2014. It first reads the HTML page it then interprets the tag attributes in the HTML to directives, which is a language construct, to make the inputs and outputs readable by JavaScript variables. Then those variables are grabbed by JSON resources. 

AngularJS Framework
--------------------

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

Scope Term
-----------

Bootstrapper
-------------

.. code-block:: javascript

	<!DOCTYPE html>
	<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
	<body>

	<div ng-app="">
	<p>Name: <input type="text" ng-model="name"></p>
	<p ng-bind="name"></p>
	</div>

	</body>
	</html>
	
.. code-block:: javascript

	<div ng-app="" ng-init="firstName='John'">

	<p>The name is <span ng-bind="firstName"></span></p>

	</div>


Two-Way Data Binding
---------------------

AngularJS Module
-----------------

.. code-block:: javascript

	var app = angular.module('myApp', []);

AngularJS Controller
---------------------
.. code-block:: javascript

	app.controller('myCtrl', function($scope) {
		$scope.firstName= "John";
		$scope.lastName= "Doe";
	});

References
-----------

.. [wikiAngularJS]	"`AngularJS <https://en.wikipedia.org/wiki/AngularJS>`_", Wikipedia. Web. 6 Apr. 2017.
