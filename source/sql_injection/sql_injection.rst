SQL Injection
=============

*Written by Brooke, Edited by Collin and Michael B.*

Introduction
------------
SQL Injection is one of the oldest types of vulnerabilities, where malicious 
SQL queries are inserted through the user input on the client end of the 
application.  SQL injection is capable of doing many things to the database 
such as insert, update, and delete.  It can also bypassthe security of the 
application to perform administrative operations without administrative rights.  
SQL Injection is most popular in PHP and ASP.  SQL Injection can range from 
minimal damage to severe damage depending on on the attackers depth and skill 
in SQL. 


How SQL Injection Works
-----------------------

The way that SQL Injection works is actually quite simple.  The attacker
looks for any area in the application where the user input is included 
inside of a SQL Query. In order for it to work, the users input has to be 
directly used inside of the query on the back end of the application.  Once 
they have found that vulnerability, they will then enter an input that will 
run against the server.  When this is done, the attacker is then able to 
bypass many forms of security to access sensitive data.  [acunetix]_
	
To put this into code form, the application would have a code block 
similiar to the one below.  The server will have the username and password 
variables declared will will then become the input that the user provided.  
The application then runs a SQL query that is very vulnerable to SQL 
Injection.  [acunetix]_
	
.. code-block:: sql	
	
		# Define POST variables
		uname = request.POST['username']
		passwd = request.POST['password']

		# SQL query vulnerable to SQLi
		sql = “SELECT id FROM users WHERE username=’” + uname + “’ AND password=’” + passwd + “’”

		# Execute the SQL statement
		database.execute(sql)

With that being said, all the attacker would have to enter is password’ OR 
1=1.  The statement ``SELECT id FROM users WHERE username=’username’ AND 
password=’password’ OR 1=1’`` would then be ran. [acunetix]_The attacker could then 
comment out the rest of the code to make a more in depth query depending on 
their intentions. [owasp]_ Because of their input, they would have bypassed 
any authentication to reach the first record in the database which is usually 
the administrator.  With the administrator information, they can then access 
the database will full privelages. [acunetix]_


* Find input in application that is included inside of an SQL 
Query [acunetix]_

	* The user's input has to be directly included in an SQL 
	Statement [acunetix]_
	
	* User could insert coded that would run against server to 
	give sensitive data [acunetix]_
	
	* Example [acunetix]_ 
	
* User could comment out the rest of the code and make a 
more in depth query.
 
* The result they bypasses teh authentication

* The first account in a database is usally the administrator
		
		
Preventing SQL Injection
---------------
* Blacklist of words or characters [w3schools]_

	* checks for these words or characters in the SQL 
	statement before executing [w3schools]_
	
	* not alwasy the best idea because many characters 
	and words are legal to be used in a SQL statement 
	and should be allowed in the input [w3schools]_
	
* Only proven way to to protect against SQL injection is 
the use of parameters [w3schools]_

	* a parameter is a value added to a query in a 
	controlled manner
	
* Example [w3schools]_ 

.. code-block:: sql	

		txtNam = getRequestString("CustomerName");
		txtAdd = getRequestString("Address");
		txtCit = getRequestString("City");
		txtSQL = "INSERT INTO Customers (CustomerName,Address,City) Values(@0,@1,@2)";
		db.Execute(txtSQL,txtNam,txtAdd,txtCit);
	
	
	
Why Protect Against SQL Injection?
----------------------------------

* Impersonate users [owasp]_

* Sensitive data could be given out

* alter data and databases
	
* causes repudiation issues [owasp]_
	
* Records could be deleted all together


Example Of SQL Injection
------------------------
* Example [w3schools]_


Server Code: 
	
.. code-block:: sql	
	
		txtUserId = getRequestString("UserId");
		txtSQL = "SELECT * FROM Users WHERE UserId = " + txtUserId;
					
User Inupt:		``105 OR 1=1``
	
Server Result:
	
.. code-block:: sql	

		SELECT * FROM Users WHERE UserId = 105 or 1=1;

The SQL above is valid. It will return all rows from the table Users, since ``WHERE 1=1`` is always true.

Does the example above seem dangerous? What if the Users table contains names and passwords?

The SQL statement above is much the same as this:
	
``SELECT UserId, Name, Password FROM Users WHERE UserId = 105 or 1=1;``
		

.. image :: sqlinjection.png 		
		
		
Sources
-------

.. [owasp] "`SQL Injection.<https://www.owasp.org/index.php/SQL_Injection>`_" SQL Injection - OWASP. OWASP., n.d. Web. 20 Feb. 2017.

.. [w3schools] "`SQL Injection. <https://www.w3schools.com/sql/sql_injection.asp>`_" SQL Injection. w3schools., n.d. Web. 20 Feb. 2017.

.. [acunetix] "`What is SQL Injection (SQLi) and How to Fix It.<http://www.acunetix.com/websitesecurity/sql-injection/>`_" Acunetix., n.d. Web. 20 Feb. 2017.


