New Features in JavaScript ES6 - Kyann
==============================

There have been many new additions and changes made from JavaScript ES5 to ES6. 
Some of the changes that will be highlighted in this example will be constants, 
block-scope variables and functions, default parameter values, String Interpolation, 
Array Matching, Classes, Unicode with strings and Regular Expressions, binary and 
octal. Finally, there are several new built-in functions and formatting options. 

Constants
---------

One of the new features of ES6 is the ability to use constant variables. A constant 
variable is one that cannot be assigned any new content. Instead of using the typical 
``var`` to declare the variable, ``const`` is used. 

``const constant = 5``

``print(constant) // 5``

``constant +=2``


.. code-block:: javascript

	const constant = 5
	print(constant) // 5
	constant +=2

With a constant variable, the 

Const can be especially useful in programming situations were there are multiple 
programmers or developers working on the same project. It makes the code a little easier 
to read, and lets other developers know that the variable will not be changing, and 
should not be changed by them. [PR_Newswire]_


Block-Scope
-----------

* Explain what block-scope is

* Explain difference between Javascript not having, and other languages having it

* Talk about let declaration

* Example code using let

[Compatibility]_

[ECMAScript_6]_



Parameter Values
----------------

* What default parameters are

* How/when they can be used

* What was used in ES5 instead

* What is used in ES6 - simpler

* Example code

[Prusty]_

[ECMAScript_6]_



String Interpolation
--------------------

* Explanation - basically a string that is on multiple lines with concatonation 
  not necessary
  
* Bug in the ES5 allowed this using \, but definently a bug, not recommended for use

* Update in ES6 allowed strings to fall on multiple lines

* Code comparison between Es5 and ES6

[Zakas]_  pg 26-28



Array Matching
--------------

* What array matching is

* Changed how you can set multiple variables to different variables in an array list

* Update that makes switching values between two variables much easier - similar to Python?

[ECMAScript_6]_


Array Element Finding
---------------------

* Updated code for simpler function

* Use of arrows

	* Brief explanation of arrows, also new in ES6
	
* Code comparison

[ECMAScript_6]_ 


Classes
-------

* Added a new definition for classes

* More similar to Object-Oriented Programming style

* Also updated inheritance ability

[ECMAScript_6]_ 


Unicode
-------

* Several changes made especially to astral symbols unicode 

* Code point escaping

[Simpson]_ 

[es6_Features]_ 


Binary and Octal
----------------

* Quick explanation of binary and octal

* Simplifies code to compare binary/octal numbers with decimal numbers

* Updated forms to indicate which number system is being used 

	* Especially needed for Hex, old programming habit of putting 0 in front of numbers 
	  for indentation purposes would accidentally change it to haxidecimal
	  
[Simpson]_

* Contrast code for ES5 and ES6

* ES5 Code for comparing binary/octal to decimal [ECMAScript_6]_


New Built-in Methods
--------------------

* Repeating Strings

* Searching in Strings

* Number Type

* Number Truncation

* Number Sign

[ECMAScript_6]_



New Formatting Methods
----------------------

* 3 new formatting types - time/date, currency, and money 

* built in function that have different settings based on country code given

* Examples of each here

* Benefits:
	* Easier to format local currency
	* Easier to reformat for use in different countries
	* Would also be easier to read - countries may use similar signs but different 
	  decimal/commas, makes it easier to see which currency it's referencing
	  
* Not a thing in ES5, so they're brand new. 

[ECMAScript_6]_



Sources
-------

.. [Compatibility] "`ECMAScript 6 compatibility table <https://kangax.github.io/compat-table/es6/>`_" ECMAScript 6 compatibility table. kangax., 2016. Web. 04 Apr. 2017. 

.. [ECMAScript_6] Engelschall, Ralf S. "`ECMAScript 6: New Features: Overview and Comparison <http://es6-features.org/#Constants>`_" ECMAScript 6: New Features: Overview and Comparison. Ralf S. Engelschall, 2017. Web. 04 Apr. 2017. 

.. [es6_Features] Hoban, Luke. "`Lukehoban/es6features <https://github.com/lukehoban/es6features#math--number--string--array--object-apis>`_" GitHub. N.p., 24 July 2016. Web. 04 Apr. 2017

.. [PR_Newswire] PR Newswire. "Lounge Lizard Highlights 3 Ways to Improve JavaScript with ES6." PR Newswire US. PR Newswire, 03 June 2016. Web. 4 Apr. 2017

.. [Prusty] Prusty, Narayan. Learning ECMAScript 6: learn all the new ES6 features and be among the most prominent JavaScript developers who can write efficient JS programs as per the latest standards! Birmingham: Packt Publishing, 2015. Print.

.. [Simpson] Simpson, Kyle. You Don't Know JS: ES6 & Beyond. Sebastopol: O'Reilly Media, 2016. Print.

.. [Zakas] Zakas, Nicholas C. Understanding ECMAScript 6: The Definitive Guide for Javascript Developers. San Francisco: No starch Press, 2016. Print. 



*Written by Kyann B*
