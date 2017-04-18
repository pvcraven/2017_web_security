AngularJS-Michael Borland
=========================

The Brief History of Google's AngularJS
---------------------------------------


Content Delivery Network Description
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

AngularJS has two ways of implementing the libraries that compose the entirety of the framework in your HTML pages. One, is going to the website: `AngularJS <https://angularjs.org/>`_ and downloading the library, or you can use a content delivery network. Now, to explain further the content delivery network, it is a static or not group of Web Servers that that will always send you to a server location nearest to your IP, that is a very brief a limited description of a CDN explained in much more detail by ..[AMZ]_. Sites that are available as content delivery networks are the two listed below in the example, and several others. Programmers can investigate CDN’s to see if they offer the libraries that they’re looking for. By searching AngularJS CDN on Google and it should come up with the most popular CDN for Angular. The CDN's that are listed below, may not necessarily come up with angular content, but they could serve up other libraries. The list came in part, in no particular order from: `cdnreviews <http://www.cdnreviews.com/popular-cdns/>`_. 

* Amazon cloud front
* MaxCDN
* CDN77



Examples Of Libraries Available In AngularJS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. code-block:: html

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">	
	<title>Example of Angular Libraries</title>

	<!-- This is the main library that you need to have linked, or downloaded to use AngularJS. -->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>


	<!-- These are a bunch of libraries that expand the functionality of the above library. -->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-messages.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-message-format.min.js.map"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-message-format.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-message-format.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-loader.min.js.map"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-loader.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-loader.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-csp.css"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-cookies.min.js.map"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-cookies.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-cookies.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-aria.min.js.map"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-aria.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-animate.min.js.map"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-animate.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.4/angular-animate.js"></script>

	</head>
	<body>
	<!-- Links to a bunch more libraries are found at the link below. -->
	<a href="https://cdnjs.com/libraries/angular.js/1.6.4">AngularJS libraries Available here</a>


	</body>
	</html>

Introduction to AngularJS
-------------------------
* I will going to  when angular JS was developed by Google and The 2 Different Versions, and the differences between the two, and the positives and negatives between the two.  I will step them through each aspect that they need to know of angular JS in order to understand The example below which is a form. How this will be done is each important concept will get its own and subheading and paragraph explaining the importance and then a paragraph explaining what the example does.I will focus on doing a more complex example, yet to be determined and go it even more in depth into Framework features, and I will have sublists for any new big concept that I cover.

For example, it will be probably formatted like this.


Scope
~~~~~
NG-app
~~~~~~
Data binding
~~~~~~~~~~~~

Controller
~~~~~~~~~~

Module 
~~~~~~


Form Example
~~~~~~~~~~~~
Explanation of what the form does goes here.

.. code-block:: html

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="utf-8">
	<title>Angular Form Example</title>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-route.js"></script>
	</head>

	<body>
	<div ng-app="myAngularTest" ng-controller="testForm">


	<form>
	<h1>{{changeHeading}}</h1>
	<label for="changeHeading">Change Form Title:<input type="text" name="changeHeading" ng-model="changeHeading"></label><br /> <br />
	<label for="ID_number">Type Your ID:<input type="text" name="ID_number" ng-model="ID_number"></label><br /><br />
	<label for="firstName">Type your First Name:<input type="text" name="firstName" ng-model="firstName"></label><br /><br />
	<label for="lastName">Type your Last Name:<input type="text" name="lastName" ng-model="lastName"></label><br /> <br />
	<label for="email"> Type Your Email:<input type="text" name="email" ng-model="email"></label><br /> <br /> 
	<label for="username">Type Your Username:<input type="text" name="username" ng-model="username"></label>  <br /> <br />
	<label for="pass">Type Your Password:<input type="password" name="pass" ng-model="pass"></label>
	<label for="hf"><input type="hidden" name="hf" ng-model="hf"></label>
	</form>
	<h1 style="text-decoration: underline;">Test Form Output Below For {{firstName}} {{lastName}}</h1>

	<p>Your ID is: {{ID_number}}</p>
	<p> Your First Name is: {{firstName}}</p>
	<p> Your Last Name is: {{lastName}}</p>
	<p>Your Email is: {{email}}</p>
	<p>Your Username is: {{username}}</p>
	<p>Your Password is: {{pass}}</p>
	<p>Hidden Field Test: {{hf}}</p>

	</div>
	<script>
	var testFormApp = angular.module('myAngularTest', []);
	testFormApp.controller('testForm',function($scope){
	$scope.ID_number ="";
	$scope.firstName=""; 
	$scope.lastName=""; 
	$scope.email=""; 
	$scope.username=""; 
	$scope.pass="";
	$scope.hf="This is a test of the hidden field Binder.";
	$scope.changeHeading="Test Form";

	}); 
	</script>


	</body>
	</html>

More Advanced Topics 
--------------------

Undetermined example
~~~~~~~~~~~~~~~~~~~~


References 
----------
.. [AMZ] No Author List."`Amazon CloudFront – Content Delivery Network (CDN) <https://aws.amazon.com/cloudfront/?sc_channel=PS&sc_campaign=acquisition_US&sc_publisher=google&sc_medium=juice_test_nb&sc_content=cdn_p&sc_detail=cdn&sc_category=cloudfront&sc_segment=164981649830&sc_matchtype=p&sc_country=US&s_kwcid=AL!4422!3!164981649830!p!!g!!cdn&ef_id=WO8RiAAABBvbPdZA:20170413055000:s>`_.Amazon.Web.Date Accessed 20 Feb 2017"






