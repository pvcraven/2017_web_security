New ES6 Features - Michael Reuter
=================================

Introduction
------------
ES6 is a new set of features for JavaScript that make the language more robust 
and easier to use. The abbreviation ES stands for ECMAScript. ECMA is an
international organization which makes programming standards. ECMAScript can be 
implemented in several scripting languages, but it was created for JavaScript 
and that remains its most popular implementation. [ES]_

History
^^^^^^^
The history of ES is rather unique and the naming convention can be confusing.
The first version of the scripting language was approved in 1996 after being
created by Netscape who submitted what they called JavaScript to ECMA for
standardization. [ES]_

ES was improved upon soon after its initial release with versions 2 and 3, the
later being released in 1999. This is where things get a little weird. Unlike 
most other programming languages and technologies, now additional ES standards
were released for ten years with version 5 following in 2009. Version 4 was
abandoned. [ES]_

Version 5, named ES5, is currently very popular and supported by all major
browsers. [ES5]_ Version 6 which is also called ES6 and ES2015 is gaining
popularity and the topic of this report. With version 6 which was standardized
in 2015, the naming system changed to ES followed by the year it was published.
This is in an effort to launch new versions every year and not wait for an
entire feature set to be completed. ES2016 is actually the newest standard but
it takes a few years for changes to be widely adopted. [ES]_

Uses
----
JavaScript and the new features available in ES6 have a wide variety of uses.
JavaScript is popular as a client-side scripting tool, enabling websites to
hold interactive content that can provide a captivating and useful web design
while allowing features to run faster. JavaScript is also becoming popular as
a back-end tool with its inclusion in languages such as Node.js. This server
technology isn't useful for all applications, but it works very well for network 
applications because it can support thousands of concurrent connections. [Node]_
There are many more possible applications for the technology which will likely
be realized in the future.

New features
------------
Constants
^^^^^^^^^
Also known as immutable variables, the concept of constant variables is simply
variables that cannot be reassigned. [ES6]_

Example:
    
.. code-block:: javascript

  const userNum = 55;

  userNum = 100;

  console.log(userNum);

This example will not lot the number 55 and will instead throw an "Assignment
to constant" exception error.

This is beneficial for several reasons. First, programs are easier to understand
if variables (or some of the variables) can't be changed. Second, performance is
generally faster because references to constants can be cached. [IO]_

Default Parameters
^^^^^^^^^^^^^^^^^^
A second new feature of ES6 is default parameters. In previous versions of the
language it took multiple lines of code but the defaults can now be included
in the function declaration.

For example, if an Indianola business had a customer form on their website, they
might want to use code like this:

.. code-block:: javascript

  function defaults(fName, lName, state = "IA", county = "Warren", city = "Indianola", areaCode = 515) {
    console.log(fName);
    console.log(lName);
    console.log(state);
    console.log(county);
    console.log(city);
    console.log(areaCode);
  }

The console outputs:

.. code-block:: python

  undefined
  undefined
  IA
  Warren
  Indianola
  515

New feature 3
^^^^^^^^^^^^^

New feature 4
^^^^^^^^^^^^^

New feature 5
^^^^^^^^^^^^^


Compatibility
-------------
What happens to the webpage when the browser isn't compatible?
How do you program to support the most users? Corporation vs. general public.
Fifth edition vs. Sixth edition vs. 2016 edition

Conclusion
----------
ES6 had a number of  very useful new features. New web applications should be 
written using the language and existing applications should be updated if 
possible to use the new features. While the audience of the website you're 
programming must be considered, all of the major browsers have adopted the main 
features of this language and they will continue adopting additional parts.

Sources
-------
.. [ES] "ES5, ES6, ES2016, ES.Next: What's going on with JavaScript versioning?" Ben McCormick, Web. 12 Sep. 2015.
.. [ES5] "ECMAScript compatibility table." kangax, Web. n.d.
.. [Node] "Why Would I Use Node.js? A Case-by-Case Tutorial" Tomislav Capan, Web. n.d.
.. [ES6] "ECMAScript 6-New Features: Overview & Comparison." Ralf Engelschall, Web. 2016
.. [IO] "6 Benefits of Programming with Immutable Objects in Java." Asankhaya Sharma, Web. 28 May 2014