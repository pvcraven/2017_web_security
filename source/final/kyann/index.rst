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
 

Const can be especially useful in programming situations where there are multiple 
programmers or developers working on the same project. It makes the code a little 
easier to read, and lets other developers know that the variable will not be changing, 
and should not be changed by them. [PR_Newswire]_ [Simpson]_


Block-Scope and Let
-------------------

Block-scope variables are variables that can only be used inside a 'block' of code. 
With ``var``, any variable declared in JavaScript with ES5 is a global variable, or 
one that can be accessed anywhere in the function. [Block_scope]_

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

[Compatibility]_

[ECMAScript_6]_

[Prusty]_ 



Parameter Values
----------------

Default parameters are used when the programmer wants a certain value to be set  
if one isn't given when the method is called. If a parameter is specified but not 
given a value, it is set to ``undefined``.

Having an undefined answer when a function is called could cause errors, give an 
incorrect answer, or even crash the program. Programmers could find defaul parameters 
useful to help avoid these situations. ES5 did have a way to set default parameters, 
but it was slightly complex and time consuming. The new ES6 version is much easier to 
use, and makes the code nicer to read. 

In ES5, there was no easy way to set default parameters. Instead, programmers would 
check within the function to see if the parameter was undefined and then set it 
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

ES6 adds an update the JavaScripts string interpolation. The first update that was 
made from ES5 to ES6 was the ability to write strings on multiple lines without having 
to program in concatenation at the end of each line. There actually was a way to 
"technically" accomplish this in ES5, but it was also considered a bug and not 
recommended to use. 

.. code-block:: javascript
	:Caption: Correct was to use String Interpolation in ES5
	
	var string = "Here is a string \n" +
	"on multiple line"
	

.. code-block:: text
	:Caption: ES5 Bug
	
	var string = "To get a string on multiple lines \"
	"a programmer could put a backslash \"
	"at the end of the line and the computer would read it \"
	"all as one line"
	
	
ES6 String Interpolation also makes it easier for programmers to call attributes 
of objects in strings without having to use concatenation. Previously in ES5, in 
order to call an object attribute and add it to a string, the programmer would have 
to end the string and concatenate on the object's attribute. In ES6, this was changed 
so that the object call could be made within the string itself. This, in addition to 
being able to write strings on multiple lines made strings much easier to code, and 
easier for other programmers to read. 

.. code-block:: javascript
	:Caption: ES5 Concatenation
	
	var person = {firstName = "Kyann", lastName = "Brown", occupation = "student"}
	
	var college = {name = "Simpson College"}
	
	var string = person.firstName + person.lastName + " is a " + person.occupation +", \n" +
	"at " + college.name + "."
	
.. code-block:: javascript
	:Caption: ES6
	
	var person = {firstName = "Kyann", lastName = "Brown", occupation = "student"}
	
	var college = {name = "Simpson College"}
	
	var string = `${person.firstName} ${person.lastName} is a ${person.occupation}
	"at ${college.name}.`
	
An important part of this change was that in order to signify a string that will 
be on multiple lines, or have an object select in the middle of the string is by 
using ` `backticks` ` instead of the normal "double quotes" or 'single quotes'. 


[Zakas_Understanding]_  pg 26-28
[es6_Features]_


New Built-in Methods
--------------------

Several built in functions for ES5 have been updated to work faster and/or be easier to 
read and code. 

* Repeating Strings
	As the name suggests, this function allows the programmers to repeat a string 
	a certain number of times.
	
	.. code-block:: javascript
		:Caption: Es5
		
		Array(5).join("hello")
	
	.. code-block:: javascript
		:Caption: Es6
		
		"Hello".repeat(5)

* Searching in Strings
	Searching in strings has also been updated in ES6 for simplicity and easier 
	readability. The new methods include ``.startsWith``, ``.endsWith``, and 
	``.includes``. 

	.. code-block:: javascript
	
		"Kyann".startsWith("Ky")
		"Simpson".endsWith("son")
		"JavaScript".includes("Scr")
		//You can also specify where to start in the string
		"Simpson".startsWith("imp", 1)
		"Simpson".startsWith("imp", 2)
		
	.. code-block:: text
		:Caption: Output
		
		true
		true
		true
		
		true
		false
	

* Number Type
	In ES5, to check a number's type, the programmer would have to write a function 
	themselves to do it. ES6 now includes several functions to help check number
	types. These methods include ``.isNaN`` which checks if something is not a number, 
	and ``.isFinite`` which checks to make sure you have a finite, and not an infinite, 
	number. Both functions are used by calling Number, then ".", then the name of the 
	function that is wanted. 
	
	For this testing, the variable Infinity is used. Numerical, JavaScript uses this to 
	store a number that exceeds the upper limit of the floating point. If printed out, it would 
	display "Infinity". If displayed as a number, it would show 1.797693134862315E+308. It 
	can also be used to represent negative infinity by putting a "-" sign in front. 
	
	.. code-block:: javascript
	
		Number.isNan(2017)
		Number.isNan(Hello)
		
		//JavaScript has the variable Infinity which exceeds the upper limit of the 
		floating point.
		Number.isFinite(Infinity)
		Number.isFinite(-Infinity)
		Number.isFinite(2018)
		
	.. code-block:: text
		:Caption: Output
		
		true
		false
		
		false
		false
		true


* Number Truncation
	Number truncation is a pretty simple function, its purpose is to take a floating 
	point number and drop off the decimal or fraction part. However, it does not 
	round the number, it strictly drops off the decimal. Like Number Type, this 
	was possible in ES5, but the code had to be written by the programmer and it 
	was not a built in function. 
	
	.. code-block:: javascript
		:Caption: ES6
		
		console.log(Math.trunc(96.9)
		console.log(Math.trunc(12.1)
		console.log(Math.trunc(0.1)
	
	.. code-block:: text
		:Caption: Output
		
		96
		12
		0

* Number Sign
	Number sign is also a simple function that takes place of the programmer having 
	to personally write the function. This function will return what sign the number 
	entered has. The possible answers are 1 (positive), -1 (negative) and 0/-0 for 
	positive and negative 0 or decimal numbers
	
	.. code-block:: javascript
		
		console.log(Math.sign(2017))
		console.log(Math.sign(-2014))
		console.log(Math.sign(0))
		console.log(Math.sign(-0.1)
		
	.. code-block:: text
		:Caption: Output
		
		1
		-1
		0
		-0

[ECMAScript_6]_



New Formatting Methods
----------------------

There have been several new updates that have been added to ES6 that are based on 
location. These include new formatting functions for time and date, currency, and money. 
They are all built in functions, and the location is based on a BCP 47 language tag. 
Some examples of a BCP 47 language tag included: [Arai]_ 

* "hi" - Stands for Hindi

* "de" - Stands for German

* "en" - Stands for English

You can also add on locations in addition to language, in order to work with different 
dialects. For example:

* "en-US" is English in the United States

* "de-DE" is German in Germany

* "de-AT" is German used in Australia 

The New Formatting Functions 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

* Number Formatting:

	.. code-block:: javascript
		
		var american = new Intl.NumberFormat("en-US")
		var german = new Intl.NumberFormat("de-DE")
		
		german.format(999888777.58)
		american.format(999888777.58)
	
german.format will return "999.888.777,58", and the american.format will return 
"999,888,777.58". The difference between the two may seem small, as the German number 
system uses commas were the American uses periods and vice versa, but it does create 
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

  
There is no equivalent functions in ES5, so all of these functions are brand new. [ECMAScript_6]_ 


Conclusion
----------

There have been many differnet updates to the newest version of JavaScript, from 
fixing smaller functions to work better, adding in entirely new functions, to ...


Sources
-------

.. [Arai] Arai. "`Intl <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl>`_" Intl, MDN. 05 Apr. 2017. Web. 13 Apr. 2017

.. [Block_scope] "`Javascript: Block scope. <http://www.programmerinterview.com/index.php/javascript/javascript-block-scope/>`_" Programmer and Software Interview Questions and Answers. ProgrammerInterview, n.d. Web. 06 Apr. 2017.

.. [Compatibility] "`ECMAScript 6 compatibility table <https://kangax.github.io/compat-table/es6/>`_" ECMAScript 6 compatibility table. kangax., 2016. Web. 04 Apr. 2017. 

.. [ECMAScript_6] Engelschall, Ralf S. "`ECMAScript 6: New Features: Overview and Comparison <http://es6-features.org/#Constants>`_" ECMAScript 6: New Features: Overview and Comparison. Ralf S. Engelschall, 2017. Web. 04 Apr. 2017. 

.. [es6_Features] Hoban, Luke. "`Lukehoban/es6features <https://github.com/lukehoban/es6features#math--number--string--array--object-apis>`_" GitHub. N.p., 24 July 2016. Web. 04 Apr. 2017

.. [PR_Newswire] PR Newswire. "Lounge Lizard Highlights 3 Ways to Improve JavaScript with ES6." PR Newswire US. PR Newswire, 03 June 2016. Web. 4 Apr. 2017

.. [Prusty] Prusty, Narayan. Learning ECMAScript 6: learn all the new ES6 features and be among the most prominent JavaScript developers who can write efficient JS programs as per the latest standards! Birmingham: Packt Publishing, 2015. Print.

.. [Simpson] Simpson, Kyle. You Don't Know JS: ES6 & Beyond. Sebastopol: O'Reilly Media, 2016. Print.

.. [Zakas_Understanding] Zakas, Nicholas C. Understanding ECMAScript 6: The Definitive Guide for Javascript Developers. San Francisco: No starch Press, 2016. Print. 



*Written by Kyann B*
