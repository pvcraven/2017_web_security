Known Vulnerabilities
=====================

*Written by Nathan, Edited by Taylor and Collin.*

Introduction
------------
There are many examples of known vulnerabilities regarding web security. These 
vulnerabilities can be found in a CVE (Common Vulnerabilities and Exposures) 
database. However, when the vulnerability is placed in the database, the 
developer isn't the only person who can make a query. Hackers can find the 
information just as easily, making the vulnerability a race between the 
developer and the hacker. Here are a list of some known vulernabilities in web
security, how to abuse said vulnerability, and what steps should be implemented
to patch the vulnerability.


Joomla!
-------

Joomla! is a content management system that deals with website creation and 
distribution. A variety of sites have been created with Joomla!, including 
Lipton Ice Tea, Lazarex Cancer Foundation, Michael Phelps' Store, and many more
[JOO]_. Known vulnerabilities with the Joomla! application include:

**SQL Injection**
Joomla MSG (My Personal Messages) is a way in which users are able to 
communicate with one another through a website. An exploit was found that 
allowed for an attacker to log in as another user by appending the default 
message website path with SQL queries, resulting in an attacker being able to 
view other user's messages. Below is an example of how the SQL injection could 
be implemented into a URL to access another person's messages [EDB]_.::

	# View someone else's messages
	http://localhost/[PATH]/index.php?option=com_mymsg&view=msg&filter_box=[Insert_SQL_Here]
	# Reply as someone else
	http://localhost/[PATH]/index.php?option=com_mymsg&layout=edit&reply_id=[Insert_SQL_Here]

**Insecure File Upload**
The default Joomla Event Manager (JEM) allows for an authenticated user to 
upload HTML and HTM files as an attachment. If an attacker was to upload the 
files containing malicious Javascript coding, a victim would be able to 
download said files. This would put them at risk to whatever hack the attacker 
created. In order to prevent this type of vulnerability, the JEM should 
restrict file uploads to valid files of a certain type.

Works Cited
-----------
.. [EDB] "Offensive Security’s Exploit Database Archive." <https://www.exploit-db.com/>`_ Exploits Database by Offensive Security. N.p., n.d. Web. 24 Feb. 2017. 
.. [JOO] "Joomla.org." <https://www.joomla.org/>'_ Joomla! N.p., n.d. Web. 24 Feb. 2017.
