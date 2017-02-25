SQL Injection
=============

*Written by Brooke, Edited by Collin and Michael B.*

Introduction
------------

SQL Injection is one of the oldest and most common forms of application
vulnerabilities, where malicious SQL queries are inserted through the user 
input on the client end of the application.  The user input then confuses the 
database and allows the attacker to access and alter the database. SQL 
injection is capable of doing many things to the database such as insert, 
update, and delete.  It bypasses the security of the application to perform 
administrative operations without administrative rights.  SQL injection is 
most popular in PHP and ASP and can range from minimal damage to 
severe damage depending on the attackers depth and skill in SQL.



How SQL Injection Works
-----------------------

The way that SQL Injection works is actually quite simple.  The attacker
will search for any area in the application where the user input is included 
inside of a SQL query. Once they find a vulnerability, they will try many 
different inputs to see how the application reacts.  Eventually an input is 
entered that will run in the query in a way that will affect the database the 
way the attacker is intending.  They then enter something into the user input 
that will run in the SQL query to edit the database however the attacker 
chooses.  In order for it to work, the users input has to be directly used inside
of the query on the back end of the application.  Once they have found that 
vulnerability and have completed the SQL injection, they are able to bypass 
many forms of security to alter the data and database in any way that they can. 
[acunetix]_ 
	
To put this into code form, the application would have a code block 
similar to the one below.  The server will have the username and password 
variables declared.  Those variables will then become the direct input that 
the user provided.  The application then runs a SQL query that is very 
vulnerable to SQL Injection. [acunetix]_
	
.. code-block:: sql	
	
		# Define POST variables
		uname = request.POST['username']
		passwd = request.POST['password']

		# SQL query vulnerable to SQLi
		sql = “SELECT id FROM users WHERE username=’” + uname + “’ AND password=’” + passwd + “’”

		# Execute the SQL statement
		database.execute(sql)

With that being said, all the attacker would have to enter is password’ OR 
1=1.  The statement ``SELECT id FROM users WHERE username=’username’ 
AND password=’password’ OR 1=1’`` would then be ran with the provided input. 
[acunetix]_ The attacker could then comment out the rest of the code to make a 
more in depth query depending on their intentions. [owasp]_ Because of their 
input, they would have bypassed any authentication to reach the first record in 
the database which is usually the administrator.  With the administrator 
information, they can then access the database will full privileges. [acunetix]_

		
Preventing SQL Injection
---------------

There are many possible ways to prevent against SQL injection. Developers 
should do routine checks on their application to ensure that they do not include
the user’s input directly in any query.  One of the most popular ways is to 
create a backlist of words.  The application would check to see if any of these 
words are in the user input before execution.  If they are, then the SQL 
statement will not execute.  The only problem with using a backlist is that 
many common words in the English language such as add and delete would 
have to be accepted in the user input because they are legal words.  That being 
the case, having a backlist is one of the most inefficient ways to prevent against 
SQL injection.  Without backlists, the only proven way to completely protect 
against it is by using parameters.  Parameters are a value added to the query in 
a controlled manner.  [w3schools]_ These parameters are actually place holders in the query
that are then filled in by the user’s input and will always be treated as data.  

Below is an example of using parameters to prevent SQL injection. [veracode]_

.. code-block:: sql	
		String accountBalanceQuery = 
		  "SELECT accountNumber, balance FROM accounts WHERE account_owner_id = ?";

		try {
			PreparedStatement statement = connection.prepareStatement(accountBalanceQuery);
			statement.setInt(1, request.getParameter("user_id")); 
			ResultSet rs = statement.executeQuery();
			while (rs.next()) {
				page.addTableRow(rs.getInt("accountNumber"), rs.getFloat("balance"));
			}
		} catch (SQLException e) { ... }

If an attacker attempts to supply a value that’s not a simple integer, then 
statement.setInt() will throw a SQLException error rather than permitting 
the query to complete.  [veracode]_
	
W3Schools also provides an example of using parameters to insure that SQL 
injection will not occur.[w3schools]_ 

.. code-block:: sql	

		txtNam = getRequestString("CustomerName");
		txtAdd = getRequestString("Address");
		txtCit = getRequestString("City");
		txtSQL = "INSERT INTO Customers (CustomerName,Address,City) Values(@0,@1,@2)";
		db.Execute(txtSQL,txtNam,txtAdd,txtCit);
	
	
	
Why Protect Against SQL Injection?
----------------------------------

You may ask why you need to protect against SQL injection, but the answer is 
quite simple.  If an attacker completes SQL injection they can impersonate 
users, including the administrator of the database.  With the administrators 
credentials, the attacker can do almost anything including altering the 
database and the data in it or records could be deleted all together.  
Sensitive data could then be leaked creating many more embedded problems.  
With data being released, reputation issues surface.  Many companies could 
lose business and even profits from this. [owasp]_ 


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

.. [acunetix] "`What is SQL Injection (SQLi) and How to Fix It.<http://www.acunetix.com/websitesecurity/sql-injection/>`_" Acunetix., n.d. Web. 20 Feb. 2017.

.. [owasp] "`SQL Injection.<https://www.owasp.org/index.php/SQL_Injection>`_" SQL Injection - OWASP. OWASP., n.d. Web. 20 Feb. 2017.

.. [w3schools] "`SQL Injection. <https://www.w3schools.com/sql/sql_injection.asp>`_" SQL Injection. w3schools., n.d. Web. 20 Feb. 2017.

.. [veracode] "`SQL Injection Cheat Sheet & Tutorial: Vulnerabilities & How to Prevent SQL Injection Attacks.<https://www.veracode.com/security/sql-injection>`_" Veracode. N.p., 19 Dec. 2016. Web. 25 Feb. 2017.
