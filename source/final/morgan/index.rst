AngularJS - Morgan Ryan
========================

Introduction
-------------

AngularJS is a "JavaScript-based open-source front-end web application framework that is maintained by Google with a community of individuals and corporations to address many of the challenges encountered in developing single-page applications [wikiAngularJS]_." "AngularJS is put in place to help simplify the development and testing of mobile apps but providing client-side model-view-controller (MVC) and model-view-viewmodel (MVVM) and will work with most up to date internet applications." In short terms, AngularJS takes your framework and adapts and extends your HTML and creates it in a format that is able to be used by different models and views. Once this process is complete the end result for AngularJS is to improve the testing and performance of the program. 

History of AngularJS
---------------------

AngularJS first came about when the first team started working on it in 2014. It first reads the HTML page it then interprets the tag attributes in the HTML to directives, which is a language construct, to make the inputs and outputs readable by JavaScript variables. Then those variables are grabbed by JSON resources. "Some common websites that use this is ABC News, Sprint, Walgreens, etc. This is used a lot throughout the world, according to various sources it is used on 12,000 sites and this was from 2016!" 

AngularJS Framework
--------------------

.. code-block:: javascript

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

Above is the script tag that is used to add the AngularJS to an HTML page. With this script tag the HTML is extending by ng-bind, ng-app and ng-model. Listed below are the different directives that come with AngularJS and what each of them entail, along with some sample code as well. 

	* ng-app: directive initializes an AngularJS application.
	* ng-init: directive initializes application data.
	* ng-model: directive binds the value of HTML controls (input, select, textarea) to the application.

Below is a piece of sample code that puts to use the above directives. The print out of the sample code is listed below the code. After a full understanding of the code below it leads right into the topic of Data Binding. 

.. code-block:: javascript

	<div ng-app="" ng-init="firstName='John'">

	<p>Name: <input type="text" ng-model="firstName"></p>
	<p>You wrote: {{ firstName }}</p>

	</div>

.. image :: Directives.PNG
   :align: center

Data Binding
---------------------

"Data Binding in AngularJS binds AngularJS expressions with AngularJS data." In the code above this is shown with the {{ firstName }} part of the code. This section of the code is bound with the ng-model="firstName." The next directive is ng-repeat which repeats an HTML element. It can clone HTML elements when the item is in a collection. Below is sample code that explains how this works and the output of this code. 

.. code-block:: javascript

	<div ng-app="" ng-int="names=[
	{name:'Jani', country:'Norway'},
	{name:'Hege', country:'Sweden'},
	{name:'Kai', country:'Denmark'}]">

	<ul>
	  <li ng-repeat="x in names">
		{{ x.name + ', ' + x.country }}
	  </li>
	</ul>

	</div>
	
.. image :: Repeat.PNG
   :align: center

More on Directives
-------------------

Along with what was stated above about ng-model this directive can also:

	* Provide type validation for application data (number,email,required) *Code shown below*
	* Provide status for application data (invalid, dirty,touched,error)
	* Provide CSS classes for HTML elements-Bind HTML elements to HTML forms
	
.. code-block:: javascript

	<form ng-app="" name="myForm">
		Email:
		<input type="email" name="myAddress" ng-model="text">
		<span ng-show="myForm.myAddress.$error.email">Not a valid e-mail address</span>
	</form>
	
.. image :: Model.PNG
   :align: center

AngularJS Controller
---------------------

All these directives or applications are controlled by the AngularJS controller. In order for the controller to be defined in the HTML the correct call is ng-controller. Below is a more in depth explaination of the application.

	"The AngularJS application is defined by ng-app="myApp." the application runs inside the <div>. The ng-controler="myCtrl" attribute is an AngularJS directive. It defines a controller. The mtCtrl funtion is a JavaScript Funtion.AngularJS will invoke the controller with a $scopte object. In AngularJS, $scopte si the application object (the owner of application variables and functions). The controller creates two properties in the scopte. The ng-model directives bind the input fields to the controler properties [w3SchoolsAngularJS]_." 
	
.. code-block:: javascript

	<div ng-app="myApp" ng-controller="personCtrl">

	First Name: <input type="text" ng-model="firstName"><br>
	Last Name: <input type="text" ng-model="lastName"><br>
	<br>
	Full Name: {{fullName()}}

	</div>

	<script>
	var app = angular.module('myApp', []);
	app.controller('personCtrl', function($scope) {
		$scope.firstName = "John";
		$scope.lastName = "Doe";
		$scope.fullName = function() {
			return $scope.firstName + " " + $scope.lastName;
		};
	});
	</script>

.. image :: Controller.PNG
   :align: center
   
Scopes
-------

Now tying HTML and Controllers together, the binding part between them which is when the scope has to be used. "The scope is an object with properties and methods, it is also available for both the HTML and the controller." To properly use scope the tag would be $scope wich gets the access to the properties. But that tag only works for the controller, to use it in the HTML the tag would be refering to the propertyname like {{ firstName }}.

To keep things straight the view is the HTML, the model is the data available in the HTML and the controller is the JavaScript function that does things to the data. Now adding scope which is the model. 

Filters
--------

Next we move to filters, filters are used to trasform the data. Below are the various filters used in AngularJS.

	* currency: fomat a number a a currency format-date: format a date to a specified format-filter: slect a subset of items from an array
	* json: format an object to a json string
	* limitTo: limits an array/string into a speciried number of elemtns/characters
	* lowercase: format a string to lower case 
	* orderBy: orders an array by an expressions
	* uppercase: format a string to upper case *code shown below*
	* number: format a number to a string
	
.. code-block:: javascript

	<div ng-app="myApp" ng-controller="personCtrl">

	<p>The name is {{ lastName | uppercase }}</p>

	</div>
	
Services
---------

AngularJS has many built in services, one service that is very commonly used $location. This service helps find the location of an element in the HTML. Below is more services built in AngularJS.

	* $http: requests data from the server
	* $timeout: display something in a specific amount of time
	* $interval: display something in a specific amount of time but in intervals

Display Options
----------------
	
AngularJS Tables
^^^^^^^^^^^^^^^^^

Once all the data is the way it is supposed to be putting it in a table is super simple in AngularJS. Below is the code to use to display a table in AngularJS.

.. code-block:: javascript
	<div ng-app="myApp" ng-controller="customersCtrl"> 

	<table>
	  <tr ng-repeat="x in names">
		<td>{{ x.Name }}</td>
		<td>{{ x.Country }}</td>
	  </tr>
	</table>

	</div>

	<script>
	var app = angular.module('myApp', []);
	app.controller('customersCtrl', function($scope, $http) {
		$http.get("customers.php")
		.then(function (response) {$scope.names = response.data.records;});
	});
	</script>
	
Dropdown Box
-----------

To create a dropdown box with AngularJS use ng-options, but ng-repeat will also create a dropdown box. "The difference between the two are ng-reapt repeats a block of HTML code for each item in an array, it can be used to create options in a dropdown list. The ng-options is made for filling a dropdown list with options and allows the selected selected value to be an object. Dropdowns made from ng-repeat has to be a string.  Below is the code to create the dropdown box with ng-options."

.. code-block:: javascript

	<div ng-app="myApp" ng-controller="myCtrl">

	<select ng-model="selectedName" ng-options="x for x in names">
	</select>

	</div>

	<script>
	var app = angular.module('myApp', []);
	app.controller('myCtrl', function($scope) {
		$scope.names = ["Emil", "Tobias", "Linus"];
	});
	</script>
	
On top of these AngularJS allows users to create checkboxes, radio buttons, etc. There are many different styling tips that can be found on w3schools.com. 

Validation
-----------

Lastly, validation is key when it comes to creating a form on a website. "AngularJS offers client-side form validation that checks the state of the form and fields, it then lets the client know about what needs to be filled in or what is already filled in. For the validation functions use HTML5 attributes. Now keep in mind that even though the page has client-side validation it also needs server side validtion to make sure that everything is secure properly." Below is a list of the fields  and forms used in AngularJS.

	Fields:
	
	* $untouched: the field has not been touched yet
	* $touched: the field has been touched
	* $pristine: the field has not been modified yet 
	* $dirty: the field content is not valid 
	* $invalid: the field content is not valid 
	* $valid: the field content is valid
	
	Forms:
	
	* $pristine: no fields have been modified yet
	* $dirty: one or more have been modified
	* $invalid: the form content is not valid
	* $valid: the form content is valid
	* $submitted: the form is submitted
	
All of these are going to give true or false results. Below is sample code of how validation would look like. 

.. code-block:: javascript

	<html>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
	<body>

	<h2>Validation Example</h2>

	<form  ng-app="myApp"  ng-controller="validateCtrl"
	name="myForm" novalidate>

	<p>Username:<br>
	  <input type="text" name="user" ng-model="user" required>
	  <span style="color:red" ng-show="myForm.user.$dirty && myForm.user.$invalid">
	  <span ng-show="myForm.user.$error.required">Username is required.</span>
	  </span>
	</p>

	<p>Email:<br>
	  <input type="email" name="email" ng-model="email" required>
	  <span style="color:red" ng-show="myForm.email.$dirty && myForm.email.$invalid">
	  <span ng-show="myForm.email.$error.required">Email is required.</span>
	  <span ng-show="myForm.email.$error.email">Invalid email address.</span>
	  </span>
	</p>

	<p>
	  <input type="submit"
	  ng-disabled="myForm.user.$dirty && myForm.user.$invalid ||
	  myForm.email.$dirty && myForm.email.$invalid">
	</p>

	</form>

	<script>
	var app = angular.module('myApp', []);
	app.controller('validateCtrl', function($scope) {
		$scope.user = 'John Doe';
		$scope.email = 'john.doe@gmail.com';
	});
	</script>

	</body>
	</html>

Final Statement
----------------

There are so many different ways that AngularJS can be used in websites, this brief report only touched the surface of what AngularJS can do. There are so many resources out there that can go more in depth on AngularJS. This client-side application is becoming more and more common, so it crucial that everyone becomes familiar with it. 

References
-----------

.. [wikiAngularJS]	"`AngularJS <https://en.wikipedia.org/wiki/AngularJS>`_", Wikipedia. Web. 6 Apr. 2017.
.. [w3SchoolsAngularJS]	"`AngularJS Tutorial <https://https://www.w3schools.com/angular/default.asp>`_", w3schools. Web. 9 Apr. 2017.
