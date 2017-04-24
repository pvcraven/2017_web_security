AngularJS - Cole Holland
===============

What is Angular JS, Exactly?
----------------------------
Basically, Angular JS is a very powerful, open-source front-end web
application framework used exclusively by JavaScript for Single Page
Application (SPA) projects. [Tp]_ It is maily maintained by Google,
as well as a community of individuals and corporations to address 
the quantity of challenges presented by SPA's. [Wp]_

The purpose for this framework is to try and simplify both the 
development and the testing of SPA's by using itself for client-side
model-view-controller (MVS) and model-view-viewmodel (MVVM) 
architectures, which are software architectural patterns that help
implement user interfaces on computers. However, Angluar JS largely
fails to do this due to each new version failing to protect the
core API and destroy important pieces of code that depends on
previous versions. [Wp]_

History
-------
In 2009, Miško Hevery and Adam Abrons from Brat Tech LLC developed
Angular JS as software to go behind an online JSON storage service
to make applications much easier to create for the enterprise. It 
was sold online at the web domain "GetAngular.com", with the price
allocated by the megabyte. Unfortunately, not very many people wanted
to spend their money on this software, so Hevery, Abrams, and Brat
Tech decided to release the framework as an open-source library
and Abrons decided to quit Angular altogether.

Eventually, Hevery went on to work for Google, specifically on a
team that was currently invovled in the making of a project called
Google Feedback. During the development of the project, the team
wrote more than 17,000 lines of code in about 6 months. Any
programmer, including Hevery, can see that if something needs that
many lines of code, then there must be a way to shorten it, even
by a bit. In this belief, he made a bet with his manager, Brad Green,
that he can shorten the code considerably in two weeks time.
Three weeks later, Hevery, along with his GetAngular framework, cut
the code from 17,000 lines to a whopping 1,500 lines. Hevery lost
the bet, but Green was nevertheless impressed and had Hevery start
the official development of Angular JS.

With the efforts of Green, Hevery, and the rest of the team assigned
by Green, GetAngular was re-amped as Angular JS. This investment into
the new technology paid off when Google took control of a company
called DoubleClick. [Aa]_ Hevery's team was assigned the job of
re-writting the applications of the company with the Angular JS
framework, and the apps code was shortened significantly and ran
better that it ever has before. Because of this big success, Google
invested more and more in the growth of Angular JS and the Angular
team has grown rapidly.

How is it used?
---------------
First, Angluar JS reads the HTML page that it is scripted on
using the <script> tag. The tag should look like this:

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

The "...1.4.8..." part can vary based on different versions,
of course. Angluar interprets the attributes in the page as 
directives, which are used to extend HTML that  start with ng-.
Some examples of these directives are:

*ng-app, which starts an Angular JS application.
*ng-init, which initializes the application data.
*ng-model, which binds the values of Angular JS application 
data to HTML input controls.
*ng-repeat, which repeats HTML elements for each item
in a collection. [Tp]_

Here are some code examples of these directives:

.. code-block:: HTML

		<!DOCTYPE html>
		<html>
		<body>
		<div ng-app="">
			<p>Enter your name here: <input type="text" ng-model="name"></p>
			<p ng-bind="name"></p>
		</div>
		</body>
		</html>

In this example, we use the ng-app directive in the div tag
to show we are making an application inside div. We ask the
user to input his/her name, which we will label as "name" using
the ng-model directive. The ng-bind directive will bind the
"name" to the model, making whatever is typed in the input box
to dynamically be shown on-screen upon typing. Here is what
this would look like:

.. image :: FirstExample.PNG

This shows that the letters "Richar" are dynamically appearing
on screen when typed. You can type as much as you want, too:

.. image :: SecondExample.PNG

If someone would like to initialize a name or something else before
running the application, then they can use the ng-init directive.
This is how to set it up:

.. code-block:: HTML

		<!DOCTYPE html>
		<html>
		<body>
		<div ng-app="" ng-init="name='Johnny Appleseed'">
			<p>My name is <span ng-bind="name"></p>
		</div>
		</body>
		</html>

And here's how it would look:

.. image :: ThirdExample.PNG

The ng-init directive goes where the div is declared, with what
the variable name is called and what data to initialize in the
variable, then the span tag contains the ng-bind directive to
bind the data from the variable to the page.

Other Cool Features of Angular
------------------------------
Scopes are used as the binding parts between the HTML and the
JavaScript, or rather the view and the controller. Think of
scope as a liibrary, like JQuery, except it can only be used
through the view and the controller. Think of it like this:
if an application were made up of a View (the HTML), a Model
(data available for the current view), and a Controller
(the JavaScript function that makes/changes/removes/controls the data),
then the scope is the Model due to to it showing what is available
to view and applying the JavaScript to it.

Controllers are regular JavaScript objects that control the
data of Angular JS applications. With controllers, you can
create functions that use scopes to do what you want in the
function. Many controllers contain large functions, so it would
be more beneficial to import controllers from external files instead
of putting all that code on the page.

Animations are from the transformation of HTML elements that give
you the illusion of it being in motion. The tag used for animation,
ngAnimate, does not specifically animate the HTML, but adds and
remove classes on the fly, so to speak. If an event occurs, the
tag will recognize it and can hige, show, or do anything else
available throught the animation on Angular.

Angular JS comes with its own API, which stand for Application
Programming Interface. This frameworks specific API is a collection
of JavaScript functions that perform common functions such as
comparing and iterating objects and converting data.

Filters can be used to format data. These filters include
currency (formats numbers to currency format), date
(formats dates to specidied format), json
(formats objects to JSON string), and more. You can call
these filters on the fly in expressions to, for example,
make a variable containing the word apple to uppercase,
making it appear on the page as APPLE. [W3]_

Browsers That Support Angular?
------------------------------
The Angular team has claimed that they support what they
call "Class A Browsers", which are basically browsers that
are commonly used. They include Chrome, Firefox, Safari,
iOS, Android, and IE8+ (Internet Explorer). However, since
the release of Angular JS 1.3, the team has announced that
they will no longer be giving support of Angular JS for IE8.

Out of this collection of browsers, people tend to use Chrome the
most for Angular because of the extension made by the Angular
team called Batarang, which improves debugging for the applications
made through Angular. Specifically, Batarang aims to easily detect
bottlenecks and even offers a GUI for debugging the applications.

What are the Cons of Angular?
-----------------------------
Unfortunately, Angular JS has terrible error reporting. What is
mean by that is when you get an error in the JavaScript console,
you'll more likely than not be pointed to the complete wrong line
and you'll be none the wiser as to where the error is. A way to
fix this annoying bug is to have your code manually return where
the errors would occur instead of having the browser run a stack trace.

Because of the flexibility of Angular is that it is not opinionated.
What is meant by that is if you were to look at abunch of different
Angular JS applications, you'd would most likely find each of them
doing things completely different from the others. A lot of people
like this kind of flexibility, but there are those that would prefer
everything to work all the same way and for the coders to change them
when they want them to.

Conslusion
----------
All in all, Angular JS is a solid framework for enterprise
development that can be used as both front-end and back-end.
It does have some minor problems, and learning how to use all
of the components to it can be hard, but it's still one of the more
solid frameworks out there if you're looking to get into web
development, especially if you're looking into how to shorten some code. 

Sources
-------

.. [Tp] Tutorialspoint.com. "`AngularJS Tutorial. <http://www.tutorialspoint.com/angularjs/>`_" Www.tutorialspoint.com. Tutorialspoint, n.d. Web. 06 Apr. 2017.

.. [Wp] "`AngularJS. <https://en.wikipedia.org/wiki/AngularJS>`_" Wikipedia. Wikimedia Foundation, 04 Apr. 2017. Web. 06 Apr. 2017.

.. [W3] "`AngularJS Tutorial. <https://www.w3schools.com/angular/default.asp>`_" AngularJS Tutorial. W3Schools, n.d. Web. 06 Apr. 2017.

.. [Aa] Austin, Andrew. "`An Overview of AngularJS for Managers. <http://andrewaustin.com/an-overview-of-angularjs-for-managers/>`_" Andrew Austin. Andrew Austin, 19 Sept. 2016. Web. 23 Apr. 2017.