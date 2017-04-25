AngularJS Tutorial By:Michael Borland
=====================================
The Brief History of Google's AngularJS
---------------------------------------

Angular.js was developed by Google as an open source way to make HTML at the time,
HTML5 now more efficient and gives a simpler way to do what would take would take
a bunch of JavaScript to achieve before angular. The development history of
AngularJS the first release was put on GitHub in 2010 on November 11 [GITHUB]_.
The tech crunch article went into depth about the second full version release of 
AngularJS. It offered some insightful details on what are the big pluses to the 
two versus one, and it made a point of pointing out that  one and two are not at 
all compatible. Article offered up some possible solutions to help you make your 
decision on which version to pick. The modern progression of things is probably 
go with two if you’re new to angular JS. If you’re a developer coming under 
projects that are written and angular JS 1.0-1.6 what this tutorial written. 
The decision whether to upgrade it is tied to availability of the money or not, 
to essentially rewrite the same program in the upgraded version.The
tech crunch article also, announced the release date for angular 2.0 out of beta
in 2014,so took them four years to innovate the framework to make it even more 
efficient, and make mobile development easier. In doing so as mentioned above 
they made one and two incompatible[TECHCRUNCH]_. 


Introduction to AngularJS
-------------------------

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






 
An important topic to discuss when trying to implement libraries nowadays is
the use of linking in with content delivery networks. 
Below CDN's are described in a little bit of detail, as they pertain to the
implementation of AngularJS the framework, and the many libraries that increase
the functionality of the framework.

Content Delivery Network Description
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

AngularJS has two ways of implementing the libraries that compose the entirety of the framework in your HTML pages. One, is going to the website: `AngularJS <https://angularjs.org/>`_ and downloading the library, or you can use a content delivery network. Now, to explain further the content delivery network, it is a static or not group of Web Servers that that will always send you to a server location nearest to your IP, that is a very brief a limited description of a CDN explained in much more detail by [AMZ]_. Sites that are available as content delivery networks are the two listed below in the example, and several others. Programmers can investigate CDN’s to see if they offer the libraries that they’re looking for. By searching AngularJS CDN on Google and it should come up with the most popular CDN for Angular. The CDN's that are listed below, may not necessarily come up with angular content, but they could serve up other libraries. The list came in part, in no particular order from: `cdnreviews <http://www.cdnreviews.com/popular-cdns/>`_. 

* Amazon cloud front
* MaxCDN
* CDN77



Examples Of Libraries Available In AngularJS
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
.. code-block:: html
	:linenos:

	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">	
	<title>Example of Angular Libraries</title>

	<!-- This is the main library that you need to have linked, or downloaded to use AngularJS. -->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

	<!-- These are a bunch of libraries that expand the functionality of the above  the above framework. -->
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

Form Example
~~~~~~~~~~~~
Explanation of what the form does goes here.

.. code-block:: html
	:linenos:

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
	<!-- The below script tag contains the code that constructs the
	 AngularJS form Application, and allows for the data binding above. -->
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

References 
----------
.. [TECHCRUNCH] Frederic Lardinois."`Google launches final release version of Angular 2.0 <https://techcrunch.com/2016/09/14/google-launches-final-release-version-of-angular-2-0/>`_.Crunch Network.Web.Date Accessed 18 April 2017" 

.. [ANGULAR] No author listed. "`What is angular JS? <https://docs.angularjs.org/guide/introduction>`_. Google. Web. Date Accessed 24 April 2017."
.. [John] John Resig."`jQuery 1.0 <https://blog.jquery.com/2006/08/26/jquery-10/>`_.Jquery.com.Web.Date Accessed 18 April 2017" 

.. [AMZ] No Author List."`Amazon CloudFront – Content Delivery Network (CDN) <https://aws.amazon.com/cloudfront/?sc_channel=PS&sc_campaign=acquisition_US&sc_publisher=google&sc_medium=juice_test_nb&sc_content=cdn_p&sc_detail=cdn&sc_category=cloudfront&sc_segment=164981649830&sc_matchtype=p&sc_country=US&s_kwcid=AL!4422!3!164981649830!p!!g!!cdn&ef_id=WO8RiAAABBvbPdZA:20170413055000:s>`_.Amazon.Web.Date Accessed 13 April 2017"

.. [GITHUB] No Author Listed."`First Known Release Of AngularJS <https://github.com/angular/angular.js/releases?after=v0.9.4>`_.GitHub.Web.Date Accessed 18 April 2017."







