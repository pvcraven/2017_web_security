Distributed Denial-of-Service
=============================

*Written by Taylor, Edited by Esteban and Morgan.*

Introduction
------------

Distributed Denial-of-Service is the same concept as Denial-of-Service, but it is harder to prevent and stop, because instead of one computer attacking a target, many compromised computers attack a target by sending multiple messages or connection requests to it. The victim computer, website, or network source may be significantly slower, crash, or shut down denying real users of the service. This is a more advanced security breach than a an attack from a single host or IP address where they can be blocked easily with a firewall.

.. figure:: ddos.jpg 
	:height: 200px
	:width: 200px
[Dsa]_

Different Types of Attacks
--------------------------
Volumetric Attacks
~~~~~~~~~~~~~~~~~~
-Filling up a victim's network bandwidth
-User Datagram Protocol (UDP) flood attacks
-Reflection and Amplification

Protocol Attacks
~~~~~~~~~~~~~~~~
-Targeting protocol operation weaknesses
-SYN flood attack

Application Attacks
~~~~~~~~~~~~~~~~~~~
-Target application weaknesses
-Slowloris- attacking web servers


How to Know if an Attack is Happening
-------------------------------------
-Performing Network Data Analysis to understand network traffic


What to do If an Attack Might be Happening
------------------------------------------

How to Avoid DDoS Attacks
-------------------------
Architecture
~~~~~~~~~~~~
-Servers in different data centers, located on different networks, have diverse paths
-Geographically dispersed resources
-Different internet providers
-Eliminate bottlenecks

Hardware
~~~~~~~~
-Network firewalls, web application firewalls, and load balancers

Bandwidth
~~~~~~~~~
-Scale up if affordable

Outsourcing
~~~~~~~~~~~
-Prodviders that specialize in responding to an attack
-Cloud Scrubbing services to attack traffic
-Internet Service Provider DDoS mitigation services

Sources
-------

.. [Dsa] "`Denial of a Service Attack <https://www.ebankingabersicher.ch/en/your-security-contribution/extended-protection/denial-of-service-attack>`_." Lucerne University of Applied Sciences and Arts, Web. 16 Feb. 2017.

.. [Kar] Rachel Kartch. "`Distributed Denial of Service Attacks: Four Best Practices for Prevention and Reponse <https://insights.sei.cmu.edu/sei_blog/2016/11/distributed-denial-of-service-attacks-four-best-practices-for-prevention-and-response.html>`_." Software Engineering Institute. Carnegie Mellon University, 21 Nov. 2016. Web. 16 Feb. 2017.

.. [McD] Mindi McDowell. "`Understanding Denial-of-Service Attacks <https://www.us-cert.gov/ncas/tips/ST04-015>`_." United States Computer Emergency Readiness Team. Department of Homeland Security, 04 Nov. 2009. Web. 16 Feb. 2017.

.. [Rou] Margaret Rouse. "`Distributed Denial of Service (DDoS) Attack <http://searchsecurity.techtarget.com/definition/distributed-denial-of-service-attack>`_." TechTarget, Jan. 2017. Web. 16 Feb. 2017.