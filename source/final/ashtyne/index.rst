Angular JS - Ashtyne Madsen
===========================

Introduction
------------
AngularJS is a type of JavaScript structural framework. It can easily be added 
to HTML and allows HTML’s syntax to be extended [W3]_. It can convey the
application’s components efficiently. It ends up compacting much of the code
that would typically have to be written, into simple HTML additions. The
framework is used by reading the HTML page with its embedded custom tag
attributes. Then AngularJS interprets the attributes to a model that is
represented by standard JavaScript variables, which can be set within the code
or retrieved from JSON resources. AngularJS's aim is to simplify the
developmental and testing of cross-platform mobile applications by
contributing a framework for client-side architectures [Wiki]_. 

History
-------

AngualarJS was developed in 2009 by Misko Hevery and Adam Abrons while they
were at Brat Tech LLC [AJSHist]_. They felt that they were not productive at
building front-end applications using Java [JOAJS]_. It was created for an
online JSON storage service’s behind-the-scenes software. Hevery and Abrons
believed that declarative programming should be utilized to make user
interfaces and connect software components. They also believed that imperative
programming was AngularJS was more appropriate to define the business logic of
an application. AngularJS was originally only available online and cost per
megabyte, but not many people were interested so Hevery and Abrons decided to
make AngularJS an open-source library [Wiki]_. Making the code open source,
has led to the web community being able to make contributions and create a
better platform [FMH]_.

Google supported AngularJS from the start because Hevery worked there as the
Senior Computer Scientist and Technical Lead Manager. In this position, he
leads teams to figure out ways to increase speed and quality of code [FMH]_.
It is continuously updated and maintained by Google and a community of
individuals and corporations. Version 1.0 of AngularJS was released in 2012
and by Version 1.2, AngularJS did not support Internet Explorer versions 6 or
7. When AngularJS Version 1.3 came out, it dropped its support of Internet
Explorer 8 [AJSHist]_. AngularJS continues to support Chrome, Firefox, Safari,
iOS, and Android, though. Version 1.5 was released and added many new concepts
including a piece based on architecture. When AngularJS released Version 1.6,
it had removed the Sandbox, which was thought to provide extra security.

When Version 2+ came out, AngularJS was simply called Angular, which went on to
become an open-source front-end web application [Wiki]_. Version 2 came with
semantic versioning and a deprecation policy for any following Angular
releases. The team that works on Angular, became committed to providing a
smooth transition between the different versions [FMH]_. The most recent
version is Angular 4, which was announced on December 13, 2016 [Wiki]_.

In 2012, a plug-in for Google Chrome called Batarang was released. The purpose
of this was mainly to improve the debugging and profiling of AngularJS web
applications. This plug-in however, did not work with any of the versions of
AngularJS after Version 1.2. Now, as of the latter half of 2016, the plug-in
works with all versions of Angular [Wiki]_.

The Basics of Angular JS
------------------------

As previously stated in the first paragraph, AngularJS is an extension to
HTML. Where HTML fails in being able to declare dynamic views in
web-applications, AngularJS excels. It creates an environment that is
"extraordinarily expressive, readable, and quick to develop" [AJS]_. AngularJS
can be extended and easily used with other libraries. 

AngularJS has a JavaScript framework for. This means that the library
containing all of the shortcuts is written in JavaScript. Using AngularJS, one
can extend HTML with attributes called directives [W3]_. Directives are HTML
codes that begin with "ng-." To make proper HTML, the code should be
"data-ng-" [W3]_.

* 	**ng-app:** This tells AngularJS to be active in whatever portion of the
	page/code piece it is added to and defines it as an AngularJS application
	[AJS]_. This will also automatically initialize the application when the
	page is loaded [W3]_.

*Example Code*

.. code-block:: javascript

    <div ng-app="">
        <p>This is how to initialize AngularJS.</p>
    </div>

* 	**ng-model:** This links the form and model so that whenever something is
	typed in the input box, it shows up wherever you call the model name [AJS]_.
	This directive can also provide validation for application data, status
	for application data, provide CSS classes for HTML elements, and bind HTML
	elements to HTML forms [W3]_.

*Example Code*

.. code-block:: javascript

	<div ng-app="myApp">
		Name: <input ng-model="name">
	</div>

* 	**ng-init:** This initializes AngularJS application variables by defining
	initial values for an application [W3]_. This is typically placed directly
	after the "ng-app" in the code.

*Example Code*

.. code-block:: javascript

	<div ng-app="" ng-init="flower='Rose'">
        <p>This is how to initialize AngularJS.</p>
    </div>

* 	**ng-bind:** This is a way to automatically update either the view when
	the model changes or the model when the view changes [AJS]_. This is
	typically used when an application already has a data model [W3]_.

*Example Code*

.. code-block:: javascript

	<div ng-app="" ng-init="flower='Rose'">
        <p>This is how to use a bind in AngularJS.</p>
        <p ng-bind="flowerColor"></p>
    </div>

.. figure:: bindExample.PNG
	:height: 300px
	:width: 300px
	:align: center

Binds can also be made using this next type of directive, an expression.

* 	**Expression:** These are written inside {{}} and will print data exactly
	as it is written and can be used in the same way as a bind  because they
	both bind the data to the HTML [W3]_. Unlike JavaScript expressions,
	AngularJS expressions don't support conditionals, loops, and exceptions.

*Example Code*

.. code-block:: javascript

	<div ng-app="myApp" ng-controller="myCtrl">
		<p>Flower Color: {{flowerColor}}</p>
	</div>

.. figure:: expressionExample.PNG
	:height: 300px
	:width: 300px
	:align: center

* 	**Controller:** This is a JavaScript object that controls the data of an
	AngularJS application. Controllers, more specifically, are JavaScript
	objects that are created by a JavaScript object constructor [W3]_. This
	section of code is where the functions and values are defined along with
	the rest of the application's behavior. Controllers can be called with
	$scope. This is the owner of the application's variables and functions. It
	is also the binding between the HTML and the JavaScript.

*Example Code*

.. code-block:: javascript

	<div ng-app="myApp" ng-controller="myCtrl">
		Flower Color: <input type="text" ng-model="flowerColor"><br>
		Flower Size: <input type="text" ng-model="flowerSize"><br>
		<br>
		Flower Order: {{flowerSize + " " + flowerColor + " Roses"}}
	</div>

	<script>
		app.controller('myCtrl', function($scope) {
		    $scope.flowerColor = "Red";
		    $scope.flowerSize = "Large";
		});
	</script>

.. figure:: controllerExample.PNG
	:height: 300px
	:width: 300px
	:align: center

* 	**Module:** This defines an application and is a container for different
	parts of an application and for the application controller [W3]_. A module
	makes the application easier to maintain, test, and read. Once the module
	is created, controllers and other AngularJS features can be added.

*Example Code*

.. code-block:: javascript

	<div ng-app="myApp" ng-controller="myCtrl">
		{{ flowerSize + " " + flowerColor + " Roses"}}
	</div>

	<script>
		var app = angular.module("myApp", []);
		app.controller("myCtrl", function($scope) {
		$scope.flowerColor = "Red";
	    $scope.flowerSize = "Large";
		});
	</script>

.. figure:: moduleExample.PNG
	:height: 300px
	:width: 300px
	:align: center

* 	**Deep Linking:** AngularJS uses deep linking and desktop app-like
	behavior [AJS]_. This is where the user is in the application and can
	bookmark and email links to places inside the application.

* 	**Form Validation:** This is the client side validation. AngularJS lets
	you create validation rules for the specific form without having to write
	JavaScript [AJS]_.  It can also hold information about the form, whether
	it has been entered in or not [W3]_. It monitors the form's state and
	notifies the user.

*Example Code*

.. code-block:: javascript

	<p>Number of roses:</p>

	<form name="myForm">
		<input type="number" name="myInput" ng-model="myInput" required>
	</form>

	<p>The input's valid state is:</p>
	<h1>{{myForm.myInput.$valid}}</h1>

.. figure:: validationExample.PNG
	:height: 300px
	:width: 300px
	:align: center

* 	**Filter:** This is a part of AngularJS that can transform data. Filters
	in AngularJS are simply added into expressions that already exist [W3]_.
	An example of this would be if someone entered a decimal, then the filter
	would change it into a currency.


* 	**Animations:** AngularJS provides animated transitions from one piece of
	the screen to another. In the example below there is a colored box, and
	when the check box is clicked on; the colored box decreases upward and
	disappears. There are animation features such as showing a box, repeating,
	and switching, just to name a few.

*Example Code*

.. code-block:: javascript

	div {
		transition: all linear 0.5s;
		background-color: purple;
		height: 100px;
		width: 100%;
		position: relative;
		top: 0;
		left: 0;
	}

	.ng-hide {
	  height: 0;
	  width: 0;
	  background-color: transparent;
	  top:-200px;
	  left: 200px;
	}

	</style>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.js"></script>

	<body ng-app="ngAnimate">

	<h1>Hide the Rose Order: <input type="checkbox" ng-model="myCheck"></h1>

	<div ng-hide="myCheck"></div>

Closing
-------

Before, AngularJS developers used HTML to create static documents. Now, with
these AngularJS pieces and all the unnamed ones, the world of single-page
JavaScript applications has been completely changed. It is so revolutionary
that many popular websites, such as Walgreens, Intel, Sprint, and over 12,000
others, use AngularJS [Wiki]_. While AngularJS is very popular, it is not the
only coding framework out there. There are many others and they are all trying
to further innovate code in order to distribute compelling experiences for
users. 

References
----------

.. [W3]	"`AngularJS Introduction <https://www.w3schools.com/angular/angular_intro.asp>`_." W3Schools.com. Web. 06 April 2017.
.. [AJS] "`AngularJS - Superheroic Javascript MVW Framework <https://angularjs.org/>`_." Google. Web. 06 April 2017.
.. [AJSHist] "`AngularJS History <https://angularzone.wordpress.com/angularjs-history/>`_." 
.. [Wiki] "`AngularJS <https://en.wikipedia.org/wiki/AngularJS>`_." Wikipedia.org. Web. 10A April 2017.
.. [JOAJS] "`The Java Origins of AngularJS: Angular vs JSF vs GWT <http://blog.jhades.org/the-java-origins-of-angular-js-angular-vs-jsf-vs-gwt/>`_." Disqus. Web. 11 April 2017.
.. [FMH] "`Misko Hevery, Inventor of Angular And How Open Source Languages Are Redefining Enterprise Software <https://www.forbes.com/sites/louiscolumbus/2016/11/14/misko-hevery-inventor-of-angular-and-how-open-source-languages-are-redefining-enterprise-software/#3c83c368270d>`_." Forbes.com. Web. 23 April 2017.