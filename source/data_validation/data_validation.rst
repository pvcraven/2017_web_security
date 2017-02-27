Data Validation
===============

*Written by Anthony, Edited by Ashtyne and Esteban.*

.. image:: datav.png
	:width: 400px
	:align: center


*Outline*
^^^^^^^^^
* What is data validation? [Cade]_
	a. How did data validation come about? (History)
* "How to" on data validation [WEB]_
	a. Instructions on how to add data validation to a website.
	b. Regular Expressions (Back End)
	c. Picture examples.


Introduction
^^^^^^^^^^^^
	Data Validation is one of the most important aspect of coding any website 
	that takes inputs from an outside user. Data validation is the process in 
	which a website verity's the data being input by the user is in the correct 
	form. For example if the website asks for a first name and the user inputs a
	phone number, validation will prevent the website from taking that input. 
	Creating validation can be a lengthy process, however the risk of not 
	having any validation are high. Users could input code that could change 
	features of a website, without validation to stop this your website could 
	be at risk. There are short cuts to data validation such as front end or 
	back end only validation, but these leave the door open for potential risks. 

What is Data Validation?
^^^^^^^^^^^^^^^^^^^^^^^^
	"Data validation guarantees to your application that every data value is 
	correct and accurate." [DATA]_ Data Validation answers simple questions such
	such as "is the string alphabetic" or "is the string numerical". If you are
	asking for a first name it will be helpful if you do not accept a telephone
	number as the users first name. Another form of validation is ensuring the
	users uses the correct amount of characters. Most phone numbers are ten
	digits, so we would not want a users inputing "1119-67-2" as their phone
	number.

	Data validation on the front end is mainly for the user. It does serve a
	a small purpose to the website itself. Front end validation makes it
	possible for the user to easily enter information with no errors. As stated 
	we want to make sure we receive accurate data, so what happens when a user
	inputs their phone number as their first name? Front end validation will
	prevent the website from taking this input and in a nice and pretty way show
	the user that the data entered is not acceptable. 

	Data validation on the back end is mainly for the website server. The same
	checks for front end validation are used for back end validation and more security. So a website asks for a first name, however the user enters a code
	to change or alter the website. The code may pass front end validation, however back end validation is created to stop this.

How to Code Data Validation
^^^^^^^^^^^^^^^^^^^^^^^^^^^
	The image below is an example of front end validation. Notice the first 
	parameter is what type of characters can be used in. For example in "name" 
	we would only want to use capital or lower case letter A-Z and a-z. For 
	"phone" and "birthday_check" we would only want numbers 0-9. The next set of
	parameters is the format and number of characters allowed. If we look back 
	at "name" we will only accept names that are between 1 and 20 characters
	long. "phone" and "birthday_check" both have formating parameters. Phone for
	example can use any number between 0-9 three times. After the third number
	you need a "-". This repeats, then we end with four numbers instead of 
	three, "515-285-2929".


.. image:: frontendCodeExample.png
	:width: 600px
	:align: center



Why is Data Validation Important?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

	Front end validation is important because it involves the end user. Without 
	front end validation the end user would have no way of knowing if their 
	input was accepted or denied. Front end also prevents bad data from being
	taken in from good intent users. Back end validation is important because it 
	involves the last line of defense to prevent bad data from being taken in.
	Back end validation prevents incorrect values from being taken in from
	malicious users. If we take the example from above ("What is data validation") the malicious code could pass front end validation. This is why it is important to not only have front end validation for the user, but back end validation for the security of the website. [Weinstock-Herman]_


Conclusion
^^^^^^^^^^

Sources
^^^^^^^

.. [WEB] `"Web Development" <http://web-development-class.readthedocs.io/en/latest/index.html>`_ Simpson College Web Development Class, 18 Feb. 2017. Web. 2016.
.. [Weinstock-Herman] Weinstock-Herman, Eli. `"Client-side vs Server-side Validation in Web Applications" <http://blogs.lessthandot.com/index.php/webdev/client-side-vs-server-side-validation-in-web-applications/>`_ LessThanDot A Technical Community for IT Professionals, 18 Feb. 2017. Web. 01 Aug. 2014.
.. [DATA] `"Data Validation" <https://msdn.microsoft.com/en-us/library/aa291820(v=vs.71).aspx>`_ Data Validation, 18 Feb. 2017. Web. 2013.
.. [Cade] Cairns, Cade, and Daniel Somerfield. `"The Basics of Web Application Security." <https://martinfowler.com/articles/web-security-basics.html>`_ MartinFlower, 18 Feb. 2017. Web. 5 Jan. 2017.