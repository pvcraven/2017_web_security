Authorization
=============

*Written by Sara, Edited by Tyler and Cody.*


Introduction
-------------
Authorization is very closely coupled with authentication, but they are two very different things. While authentication proves the user's identity, authorization determines what permissions and rights the user has. Authorization and authentication can be tied together with session management. Session management makes it possible to relate requests made by a user so that a user does not have to authenticate during each request they make.[bwa]_

.. figure:: session.png 
	:align: center
[bwa]_

  Every time a user makes a request they must undergo a valid and effective authorization procedure. A good authorization procedure consists of identifying the user making the request, verifying that the request has not changed since its initiation, applying the appropriate authorization procedures of the user, and re-examining previously authorized request of the user.[wcs]_ 

Vulnerabilities
----------------
The most common vulnerability for authorization is when a hacker cracks the password of a user and logs into the system.[wsb]_ Because the hacker had the correct authentication they will also be granted the authorizations of the user.

Best Practices
---------------
*One of the most critical mistakes that can be made is hiding capabilities rather than explicitly enforcing authorization on the server.[bwa]_ 
*The authorization process should always deny actions by default unless they are explicitly allowed.[bwa]_
*Always authorize actions on specific resources.

Implementations
----------------
Role-Based Access Control
~~~~~~~~~~~~~~~~~~~~~~~~~~~
The most common type of authorization is role-based access control(RBAC). RBAC assigns roles to users and the roles are given permissions. [bwa]_

Attribute-Based Access Control
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
A more advanced application should look at using attribute-based access control(ABAC). ABAC is like an extension of RBAC. It still can base decisions just on a role assigned to a user, but it can also use any property of the user's profile such as their IP address.[bwa]_

Other Implementations
~~~~~~~~~~~~~~~~~~~~~~~
There are many other ways to implement authorization, but in most cases either RBAC or ABAC will be the best fit.


Sources
---------

.. [wsb] Bhasin, Shweta, and (Corporation) NIIT. Web Security Basics. Cincinnati, Ohio: Course PTR, 2003. Print. 20 Feb. 2017.
.. [bwa] Cairns, Cade, and Daniel Somerfield"`The Basics of Web Application Security <https://martinfowler.com/articles/web-security-basics.html>`_." Martinfowler.com. N.p., 05 Jan. 2017. Web. 20 Feb. 2017.
.. [wcs] Nahari, Hadi, and Ronald L. Krutz. Web Commerce Security: Design And Development. Indianapolis: Wiley, 2011. Print. 20 Feb. 2017.