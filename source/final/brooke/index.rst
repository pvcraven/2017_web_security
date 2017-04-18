Angular JS - Brooke Brommel
===========================

What is it?
-----------

It might be assumed that Angular JS has something to do with javascript because
of the JS in its name; that is partially correct.  Angular JS is a framework 
that is distributed as a javascript file.  It is implemented with a <script> 
tag and is used to write web applications.  With Angular JS, you can use HTML 
as a main language without writing an excessive amount of code.  Anything that 
Angular JS does is within the web browser of the client so that it can be used 
with any type of server.  Typically a mismatch between dynamic applications and
static documents is fixed by using a library or a framework.  With Angular JS, 
it teaches the browser by using directives.  Directives are a type of syntax 
that could include data binding, DOM controls, form validation, event handling,
and putting HTML into reusable components. [AngularJS]_ 

What would you use it for?
--------------------------

Angular JS provides many options for developing.  Just a few examples of 
different areas that Angular JS could be used for could be anything from menus 
to single page applications.  Navigation menus are made particularyly easy with
the use of Angular JS.  By combining the framework with some HTML and CSS, 
interactive menus that respond to user input can be utilized.  Single page 
applications can also be simply created instead of applications with many 
separate pages.  Single page applications can give the user the feel of using a
desktop application rather than a multi-page website.  

Why you should use it
---------------------

Beyond the fact that Angular JS does things in a better, simpler way than 
JQuery, there are many other reasons that you should start using it if you 
don't already. First, there is a large community of people who already use 
Angular JS already, meaning there is a large support system behind it.  If you 
ever find yourself stuck or needing a quick tip, Angular JS is an open source 
framework with members of the development team as well as other developers that
are willing to answer all sourts of questions and help out.  There are 
conferences held all over the world specifically for Angular JS where patterns,
questions, and further information is discussed.  It is also a popular subject 
talked about withinin IT communities, books, and online sources giving everyone
a more broad understanding of it making it a widely understood and popular 
framework.  Because of this, there are many solutions and templates already 
made available.  It is said that Angular JS handles all of the "glue code" that
had to previously be writen and puts it into a structure of its own.  In case 
the developer does not want to follow a specific structure, there is the 
flexibility to create a varied structure if needed.   [AngularJS]_

Angular JS has a lightweight, easy to understand code pattern which makes it 
easier for developers.  It allows for more efficient and productive programming
as it uses directives on top of the standard HTML.  Using directives adds 
information into the code about the intended behavior of the application and 
allows for the creation more efficient logic.  With that being said, Angular 
JS can be used for projects of any size, even large and hybrid applications.  
Many features make using Angular JS a popular framework for creating 
applications.  Angular JS has features that are SPA oriented such as 
FormController.  FormController tracks the state of the validation of the 
forms.  With that you can do many things such as change behavior of different 
elements in the user interface to make it more user friendly. It also has its 
own built in abilities to handle errors, but also gives the developer the 
capabilities to create their own validators for the entire form or just for 
specific fields based on the needs of the application.  [AngularJS]_
 

Drawbacks
---------

Though there are many perks of using Angular JS, it has its drawbacks just as 
anything does.  Angular JS is not an easy framework to learn if JQuery was 
previously used.  But, once it is learned, it becomes more natural and has many
helpful quirks about it.  Angular JS also slows down if too many event handlers
are used.  At about two thousand event handlers, the application starts to bog 
down. But based on the size of the application being created, this may not even
be an issue. There is also no migrating backward to any previous versions.  You
can always prepare your code, but there is never any promises that everything 
will run smoothly and as planned.  [stfalcon]_  Angular JS is not the best 
framework to be used with every application because it is based off of a CRUD 
(create, read, update, delete) mindset.  [AngularJS]_  And once a program is 
written using Angular JS, there is poor error reporting.  The debugging process
is a tough task because of this, but there are ways around it.  As you can see,
there are some drawbacks to using Angular JS, but it is easy to say that the 
perks out way the negatives.  [stfalcon]_

History
-------

Angular JS is still a fairly new concept as its first version (1.0) was 
released in 2012.  In 2009, Misko Hevery and Adam Abrons went about creating 
Angular JS as a personal project aside from their work at Google.  Originally, 
they had GetAngular in mind which would be a tool to help web designers produce
applications that interact between the front and back end.  

Angular JS came to life when Hevery was working on a project for Google where 
he and other developers wrote seventeen thousand lines of code in the duration 
of 6 months.  Getting frustrated with the lengthy code and the process of 
testing and modifying, he made a bet with his manager.  He bet that he could 
rewrite all this code in two weeks using his framework, GetAngular.   He then 
lost the bet as it took him three weeks instead of two weeks, but he did cut 
down the lines of code by two thousand lines.  From there, his manager was 
impressed and took interest in GetAngular.  Angular JS was then brought to life
as he and his manager took it on themselves. 

Eventually Abrons quit working on the project and Hevery and his manager 
(Brad Green) took it from there.  Angular JS’s first big hit was when Google 
took on a company called DoubleClick.  They used Angular JS to rewrite part of 
DoubleClick.  DoubleClick’s success then gave light to Angular JS and it is now
used internally and externally by Google.  [AndrewAustin]_

Simple sample and explanation
-----------------------------


Example: 

.. code-block:: HTML

		<!DOCTYPE html>
		<html>
		<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
		<body>

		<div ng-app="">
		  <p>Name: <input type="text" ng-model="name"></p>
		  <p ng-bind="name"></p>
		</div>

		</body>
		</html>
		
In this example, the <div ng-app""> tag lets Angular JS that it is part of an 
Angular JS application.  The ng-model directive then links the input field to 
the application variable name.  Finally, the ng-bind directive links the 
innerHTML of the paragraph element to the application variable name.  
[w3schools]_

.. image :: firstOutput.PNG

Here is the simple output from the code.  As you can see, it looks just like any html would.

.. image :: secondOutput.PNG

As you type in the box, the user input is automatically reflected on the page. 
This happens because of the directive which links the input field to the 
variable name and then is linked to the application.

.. image :: finalOutput.PNG


Conclusion 
----------

All in all, Angular JS is a very beneficial framework to learn.  Learning to 
use it may be a challenge, but once the learning curve is over it becomes easy 
to implement.  Angular JS has an easy to implement code pattern that will used 
right on top of the existing HTML.  It gives developers a wide range of 
possibilities on almost any application while still allowing freedom from the 
standardized template of the framework.  Incase anything goes wrong when going 
off the beaten path of the standardized template, the large community of 
Angular JS supporters are always willing to help.  There may be drawbacks, but 
any framework will come with drawbacks.  As a developer, a decision would have 
to be made if the pros make up for the cons.  After a little research and 
practice using Angular JS, it becomes very clear that the pros heavily out way 
the cons when used right.

Sources
-------

.. [AndrewAustin] Austin, Andrew. "`An Overview of AngularJS for Managers. <http://andrewaustin.com/an-overview-of-angularjs-for-managers/>`_" Andrew Austin. Andrew Austin, 19 Sept. 2016. Web. 11 Apr. 2017.

.. [AngularJS] "`AngularJS. <https://docs.angularjs.org/guide/introduction>`_" AngularJS. AngularJS., n.d. Web. 06 Apr. 2017.

.. [stfalcon] "`10 reasons to use Angular.js framework to develop the next web application. <https://stfalcon.com/en/blog/post/why-use-angularjs-for-webapps>`_" Студия stfalcon.com. Stfalcon, n.d. Web. 06 Apr. 2017.

.. [w3schools] "`AngularJS Tutorial. <https://www.w3schools.com/angular/default.asp>`_" AngularJS Tutorial. W3schools, n.d. Web. 06 Apr. 2017.


