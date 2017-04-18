New Features in JavaScript ES6 - Kyann
======================================

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

.. code-block:: javascript

	const constant = 5
	print(constant) // 5
	
	
.. code-block:: javascript
	:Caption: Error

	constant +=2 
	
* With a const variable, this will not be allowed, and will pop up an error that 
  indicates constant is of type const and cannot be reassigned. 
 

Const can be especially useful in programming situations were there are multiple 
programmers or developers working on the same project. It makes the code a little easier 
to read, and lets other developers know that the variable will not be changing, and 
should not be changed by them. [PR_Newswire]_


Block-Scope and Let
-------------------

Block-scope variables are variables that can only be used inside a 'block' of code. 
With ``var``, any variable declared in JavaScript with ES5 is a global variable, or 
one that can be accessed anywhere in the function. 

.. code-block:: javascript
	:Caption: Global variable
	
	var global = "Hello";
	
	function block (x)
	{
		var a = 5;
	}
	
	console.log(global);
	console.log(a)
	
	
.. code-block:: text
	:Caption: Output
	
	Hello
	5
	
Because both variables were declared with ``var``, they were global variables that 
could be called later in the program.

ES6 has included an option to use ``let`` inside of ``var`` when declaring a variable, 
and it will be a block-scope variable.

.. code-block:: javascript
	:Caption: Block-scope variable
	
	var global = "Hello";
	
	function block (x)
	{
		let block = 5;
		console.log(block)
	}
	
	console.log(global);
	console.log(block)
	
	
.. code-block:: text
	:Caption: Output
	
	5
	Hello
	Reference Error Exception

* Explain what block-scope is

* Explain difference between Javascript not having, and other languages having it

* Talk about let declaration

* Example code using let

[Compatibility]_

[ECMAScript_6]_

[Prusty]_ 



Parameter Values
----------------

Default parameters are used when the programmer wants a certain value to be used 
if one isn't given when the method is called. If a parameter is specified but not 
given a value, it is set to ``undefined``.

Defualt parameters are useful when being undefined could cause an incorrect answer, 
cause an error, or crash the program. ES5 did have a way to set default parameters, 
but it was slightly complex and time consuming. The new ES6 version is much easier to 
use, and makes the code nicer to read. 

In ES5, there was no easy way to set default parameters. Instead, programmers would 
check within the function to see of the parameter was underfined and then set if 
to a value if it was. 

* What was used in ES5

	.. code-block:: javascript
		:Caption: Return the sum of three numbers
		
		function defaultValues(a, b, c)
		{
			if (b ===undefined)
				b = 5;
			if (c === undefined)
				c = 12;
			return a + b + c;
		}
		
		f(1, 2, 3)
		
		f(1, 2)
		
		f(5)
	

* What is used in ES6 - simpler

	.. code-block:: javascript
		:Caption: Return the sum of three numbers
		
		function defaultValues(a, b = 5, c = 12)
		{
			return a + b + c;
		}
		
		f(1, 2, 3)
		
		f(1, 2)
		
		f(5)
	
* Output 
	
	.. code-block:: javascript
		:Caption: The output for both functions remains the same. 
		
		f(1, 2, 3) === 6 //1+2+3
		f(1, 2) === 15 // 1+2+12
		f(1) === 18 //1+5+12

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

Several built in functions for ES5 have been updated to work faster and/or be easier to 
read and code. 

* Repeating Strings
	As the name suggests, reapeating a string a certain number of times.
	
	.. code-block:: javascript
		:Caption: Es5
		
		Array(5).join("hello")
	
	.. code-block:: javascript
		:Caption: Es6
		
		"Hello".repeat(5)

* Searching in Strings

* Number Type

* Number Truncation

* Number Sign

[ECMAScript_6]_



New Formatting Methods
----------------------

There have been several new updates that have been added to ES6 that are based on 
location. These include new formatting functions for time and date, currency, and money. 
They are all built in functions, and the location is based on a BCP 47 language tag. 
Some examples of a BCP 47 language tag included [Arai]_ 

* "hi" - Stands for Hindi

* "de" - Stands for German

* "en" - Stands for English

You can also add on locations in addition to language, in order to work with different 
dialects. For example

* "en-US" is English in the United States

* "de-DE" is German in Germany

* "de-AT" is German used in Australia 

The new formatting functions 

* Number Formatting:

	.. code-block:: javascript
		
		var american = new Intl.NumberFormat("en-US")
		var german = new Intl.NumberFormat("de-DE")
		
		german.format(999888777.58)
		american.format(999888777.58)
	
german.format will return "999.888.777,58", and the american.format will return 
"999,888,777.58". The difference between the two may seem small, as the German number 
system uses commas were the American used periods and vice versa, but it does create 
several benefits, such as

	* Making it easier to format to local currency, as there was no easy way to do this 
	  in ES5
	* Easier to reformat for use in different countries, as programmers and their developers 
	  and/or users can be global
	* It would also be easier to read - countries may use similar signs but different 
	  decimal/commas, makes it easier to see which currency it's referencing

* Currency Formatting:

The currency formatting starts off similar to the basic number formatter, but adds 
on a section that specifies currency, and what currency to use. 

	.. code-block:: javascript
		
		var american = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD")
		var italian = new Intl.NumberFormat("it-IT", style: "currency", currency: "EUR")
		
		america.format(147258.36)
		italian.format(147258.36)
		
		
	.. code-block:: text
		:Caption: Output:

		$147,258.36

		147.258,36€ 


* Date and Time Formatting:

	.. code-block:: javascript
		
		var american = new Intl.DateTimeFormat("en-US")
		var german = new Intl.DateTimeFormat("de-De")
		
		american.format(new Date(2017-04-13))
		german.format(new Date(2017-04-13))
		
	.. code-block:: text
		:Caption: Output:
		
		4/13/2017
		
		13.4.2017

  
There is no equivalent function in ES5, so all of these functions are brand new. [ECMAScript_6]_ 





Sources
-------

.. [Compatibility] "`ECMAScript 6 compatibility table <https://kangax.github.io/compat-table/es6/>`_" ECMAScript 6 compatibility table. kangax., 2016. Web. 04 Apr. 2017. 

.. [ECMAScript_6] Engelschall, Ralf S. "`ECMAScript 6: New Features: Overview and Comparison <http://es6-features.org/#Constants>`_" ECMAScript 6: New Features: Overview and Comparison. Ralf S. Engelschall, 2017. Web. 04 Apr. 2017. 

.. [es6_Features] Hoban, Luke. "`Lukehoban/es6features <https://github.com/lukehoban/es6features#math--number--string--array--object-apis>`_" GitHub. N.p., 24 July 2016. Web. 04 Apr. 2017

.. [Arai] Arai. "`Intl <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl>`_" Intl, MDN. 05 Apr. 2017. Web. 13 Apr. 2017

.. [PR_Newswire] PR Newswire. "Lounge Lizard Highlights 3 Ways to Improve JavaScript with ES6." PR Newswire US. PR Newswire, 03 June 2016. Web. 4 Apr. 2017

.. [Prusty] Prusty, Narayan. Learning ECMAScript 6: learn all the new ES6 features and be among the most prominent JavaScript developers who can write efficient JS programs as per the latest standards! Birmingham: Packt Publishing, 2015. Print.

.. [Simpson] Simpson, Kyle. You Don't Know JS: ES6 & Beyond. Sebastopol: O'Reilly Media, 2016. Print.

.. [Zakas] Zakas, Nicholas C. Understanding ECMAScript 6: The Definitive Guide for Javascript Developers. San Francisco: No starch Press, 2016. Print. 



*Written by Kyann B*
