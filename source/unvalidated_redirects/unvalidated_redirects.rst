Unvalidated Redirects
=====================

Introduction
------------

Web applications often redirect and forward users to other pages and websites. Without proper validation of the data being used to determine the destination pages, attackers can redirect users to phishing or malware sites that may appear trustworthy. Unvalidated redirect and forward attacks can also be used to craft a URL to pass the application's access control check and forward the attacker to functions that they would normally not have access to. It is important that when working with redirects the programmer properly declare the URL so that it cannot be manipulated by an attacker. [owasp]_


How Do Redirects Work?
----------------------
Redirects are used to send users to another page. The following explains the process behind how redirects work, as well as, an example of a valid, safe, redirect. As mentioned before, the URL in a safe redirect must be explicitly declared so it is not manipulated by attackers. [owasp]_


Impact of the Vulnerability
---------------------------
* Technical Impact of the Vulnerability
* Business Impact of the Vulnerability
* Other Impacts of the Vulnerability


.. image:: unvalidated_redirects_and_forwards.jpg
	:align: center

[tp]_



Example of an Unvalidated Redirect
----------------------------------
The following is a step by step example of how attackers can use unvalidated redirects to manipulate the application and cause potential damage to the business and possibly its customers (users). 

Included are inserts of code that have potentially dangerous URL redirects. 

Here I will step through the code, how it is dangerous for attackers, and where the mistakes can be corrected in order to avoid an attack via unvalidated redirects. 


Avoiding the Vulnerability
--------------------------
Listed below are a few simple ways to avoid unvalidated redirects. [mtsu]_
	1. Don't use redirects at all.
	2. Don't involve parameters in calculating the destination.
	3. If the destination parameters can't be avoided, be sure the supplied value is valid and authorized for the user. 






*Written by Cody, Edited by Sara and Paul.*

*Sources*

[owasp] Susanna Bezold, Johanna Curiel, Jim Manico. 'Link "Unvalidated Redirects and Forwards Cheat Sheet." <https://www.owasp.org/index.php/Unvalidated_Redirects_and_Forwards_Cheat_Sheet>'
		OWASP, 20 Sept. 2016. Web. 20 Feb. 2017.

[kemp] Maurice McMullin. "OWASP Top Ten Series: Unvalidated Redirects and Forwards." Kemp Technologies,
 		18 Apr. 2016. Web. 20 Feb. 2017.

[tp] "Security Testing - Unvalidated Redirects and Forwards" TutorialsPoint. Web. 20 Feb. 2017.

[mtsu] "Unvalidated Redirects and Forwards." Montana State University. Web. 20 Feb. 2017.