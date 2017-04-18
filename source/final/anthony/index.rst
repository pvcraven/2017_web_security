ECMAScript 6
============

What is it? 
-----------

	ES6, also referred to as "Harmony", is the sixth major update to ECMAScript
	language. ECMAScript, or as most people call it JavaScript, is compatible
	with most browsers, however certain ES6 features are only available in the 
	most update browser. Chrome and Firefox are the most popular among users of
	ES6. [Allardice]_

How is it used?
---------------

	Individual's who wish to use ES6 now may need to use a third party service 
	in order for all to be able to view and use websites created. Even though 
	many browsers like Chrome support 90% of ES6 features, most users who wish
	to get a head start on using ES6 will need to use a service like `Babel <https://babeljs.io/>`_ 
	which allows a user to write JavaScript in ES6 then converts the code to 
	ES5. [Williams]_

	.. image:: babel_example.png

History
-------

	How did JavaScript was created in late 1996 / early 1997 by Brendan Eich.
	The first release of JavaScript on the ECMAScript was June of 1997, ES1. 
	Exactly one year later, June 1998, ES2 was released. ES2 only brought minor 
	changes. December 1999 was the first big improvement. ES3 was introduced
	which included the adoption across all browsers. ES3 also included try / 
	catch, errors, and improved how the string was handled. Almost 10 years
	passed before the next version was released. July 2008, ES3.1 or ES4 was 
	introduced with a lot of opposition. The initial idea was to completely 
	overhaul JavaScript, with proposed ideas including classes, modules, and
	static typing. However, many thought this would "break the Internet". The 
	two sides agreed to release a smaller upgrade deemed ES3.1 which eventually
	became ES5. 2009 ES5 was official released and was the first major upgrade 
	since 1999. ES5 included native JSON support, undefined, infinity values,
	and more. After the debacle that was ES4, the two opposition came together
	and decided to create the ideas in ES4 in ES6. ES6 features were completed
	in 2015. ES7 is already on the table for late 2017 / early 2018. [Popoola]_
	
The New Features
----------------

* Classes

	Classes are special functions that contains two components, expressions and 
	declarations. A declaration is used to name the class. An expression is a
	a different way to define a class. Class expressions can be unnamed. Next is
	the constructor method, which is used for creating an object with a class.
	Creating a child of a class or sub class of another class is done using 
	"extends". [Classes]_

	.. image:: classes.png 	

* Arrows

	Arrows have been apart of JavaScript since the ES1. The way arrows are used
	have changed over time. Today arrows look like this "=>". These same keys
	can represent a comment when they are used at the beginning of a line. It 
	also represents the "goes to" operator. ES6 turns these keys into a simple
	function syntax with a single argument (Identifier => Expression),
	Eliminating the need for "function" or "return" and some parentheses. In 
	order to write a function with multiple arguments, using the arrow syntax,
	parentheses will be needed. [Orendorff]_


	.. image:: arrows.png

* Modules

	Modules allow a user to export variables or functions and import them on a
	different file. When creating a module, the functions and variables inside
	are not visible to to any outside files without explicitly exporting them. 
	This allows a user to export only certain parts of a function. A user also
	has to define a keyword to export under. [Modules]_

	.. image:: modules.png
	

* Binary and Octal Literals

	Binary and Octal numbers can now be represented with literals. This was not
	possible in ES5. Binary was only allowed if you used a parseInt. The only
	way to show octal numbers in ES5 was through the use of (0) as a prefix. If 
	a number is outside of 0-7 is used the prefixed 0 will be ignored and 
	return decimals. In ES6 instead of returning decimal it will return a syntax
	error. Binary and Octal are required to be prefixed with 0o for octal and.
	0b for binary. [OctalandBinary]_

	.. image:: binary_octal.png

* Promises
	
	Promises have been around awhile, but wasn't adopted by JavaScript until
	ES6. Promises allow users to handle asynchronous processes in a synchronous
	way. Promises are a value that will be handled at some point in the future.
	Similar to callbacks in that respect, except with promises the user is
	guaranteed the same value as before. Promises have three states. Pending, 
	which is waiting for the promise to be fulfilled. Fulfilled, when the
	the value is passed to the handler. Rejected, the promise is called by the
	second handler instead of the first. Some negatives of using promises are
	once you set one you cannot cancel it and you cannot determine the state of
	a promise (pending, fulfilled, or rejected). [Atchley]_

	.. image:: promises.png


* Conclusion(Personal thoughts/reflection)

	Overall I believe ES6 is a very user-friendly update. The key new features
	highlighted above allow for more concise and organized code. Classes have
	been in works for a long time and finally implemented in ES6. Arrows allow
	users to create a function in one line of code. Previously this took
	multiple lines of code, which allows the user to save time and create more
	organized code. Modules allow a user to write a function or var in one file,
	export it, import it in a different file, and use the function or variable
	in different files without having to rewrite the same code. Previously in
	ES5 a user was unable to use binary numbers and had to use parseInt to use
	octal numbers. ES6 changed this allowing users the ability to use both
	binary and octal numbers. It also changed how users see errors when coding
	binary and octal, instead of just showing decimal form it now shows error.
	ES6 had many updates and overall made JavaScript easier and better. ES7 had
	original plans of being released within the next few years. Leaving many 
	users hungry to see what cool features ES7 will have. 

Work Cited
----------

* https://github.com/lukehoban/es6features
* http://imgur.com/a/2lZWZ

.. [Allardice] Allardice, James. `"Venntro Development." <http://dev.venntro.com/2013/09/es6-part-1/>`_ An introduction to ES6 Part 1: Using ES6 Today. N.p., 13 Sept. 2013. Web. 12 Apr. 2017.

.. [Williams] Williams, Owen. `"6 reasons Web developers need to learn JavaScript ES6 now." <https://thenextweb.com/dd/2016/03/09/6-reasons-need-learn-javascript-es6-now-not-later/#.tnw_R6XrEy5g>`_The Next Web. N.p., 09 Mar. 2016. Web. 12 Apr. 2017.

.. [Popoola] Popoola, AbdulFattaah. `"Posts about JavaScript history on CodeKraft>." <https://abdulapopoola.com/tag/javascript-history/>`_ CodeKraft. N.p., 28 Mar. 2016. Web. 13 Apr. 2017.

.. [Classemake hrmls] `"Classes." <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes>`_ Mozilla Developer Network. N.p., n.d. Web. 13 Apr. 2017.

.. [Orendorff] Orendorff, Jason. `"ES6 In Depth: Arrow functions." <https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/>`_ Mozilla Hacks – the Web developer blog. N.p., 4 June 2015. Web. 15 Apr. 2017.

.. [OctalandBinary] `"A Quick Look at Octal and Binary Literals in ES6." <http://www.javascripttutorial.net/es6/octal-and-binary-literals/>`_ JavaScript Tutorial. N.p., n.d. Web. 15 Apr. 2017.

.. [Modules] `"Understanding ES6 Modules." <https://www.sitepoint.com/understanding-es6-modules/>`_ SitePoint. SitePoint, 07 Jan. 2016. Web. 15 Apr. 2017.

.. [Atchley] Atchley, Dave. `"ES6 Promises (the Basics)." <http://www.datchley.name/es6-promises/>`_ Musings of a caffeinated coder. Dave Atchley, 19 Nov. 2015. Web. 15 Apr. 2017.