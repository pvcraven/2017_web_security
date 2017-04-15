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

	Jon Russo

	.. image:: arrows.png

* Modules

	* Code Samples comparison to ES5 
	
* let vs var
	
	* Code Samples comparison to ES5

* Template Strings

	* Code Samples comparison to ES5

* Binary and Octal Literals

	* Code Samples comparison to ES5 

* Promises
	
	* Code Samples comparison to ES5

* Tail Calls
	
	* Code Samples comparison to ES5 

* Conclusion(Personal thoughts/reflection)

Work Cited
----------

* https://github.com/lukehoban/es6features
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
* http://es6-features.org/#PromiseUsage
* http://stackoverflow.com/questions/22539815/arent-promises-just-callbacks
* http://imgur.com/a/2lZWZ
* https://daveceddia.com/react-es5-createclass-vs-es6-classes/
* https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/

.. [Allardice] Allardice, James. `"Venntro Development." <http://dev.venntro.com/2013/09/es6-part-1/>`_ An introduction to ES6 Part 1: Using ES6 Today. N.p., 13 Sept. 2013. Web. 12 Apr. 2017.

.. [Williams] Williams, Owen. `"6 reasons Web developers need to learn JavaScript ES6 now." <https://thenextweb.com/dd/2016/03/09/6-reasons-need-learn-javascript-es6-now-not-later/#.tnw_R6XrEy5g>`_The Next Web. N.p., 09 Mar. 2016. Web. 12 Apr. 2017.

.. [Popoola] Popoola, AbdulFattaah. `"Posts about JavaScript history on CodeKraft>." <https://abdulapopoola.com/tag/javascript-history/>`_ CodeKraft. N.p., 28 Mar. 2016. Web. 13 Apr. 2017.

.. [Classes] `"Classes." <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes>`_ Mozilla Developer Network. N.p., n.d. Web. 13 Apr. 2017.

.. [Orendorff] Orendorff, Jason. `"ES6 In Depth: Arrow functions." <https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/>`_ Mozilla Hacks – the Web developer blog. N.p., 4 June 2015. Web. 15 Apr. 2017.


