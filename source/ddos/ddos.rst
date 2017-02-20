Distributed Denial-of-Service
=============================

Introduction
------------

Distributed Denial-of-Service (DDoS) is a type of Denial-of-Service when an attacker overloads a server with requests and it stops being able to process them. However, DDoS is harder to prevent and stop, because instead of one computer attacking a target, an attacker will take over many computers to attack a target by sending multiple messages or connection requests to it. Furthermore, it is more difficult to distinguish these attacks from real requests due to certain circumstances such as a spike in a website's popularity [Rou]_. The victim computer, website, or network source may be significantly slower, crash, or shut down denying real users of the service. This is a more advanced security breach than an attack from a single host or IP address where they can be blocked easily with a firewall [Kar]_. Attackers can come from a wide range of groups or individuals or just be the result of very poor code.

In a DDoS attack, an attacker exploits a weakness of a computer system and becomes the DDoS master. The DDoS master then finds other weak systems and gains control using malware, another term for software that is intended to damage or disable computer systems, or bypassing their security. The computers that are under the control of the attacker are called zombies or bots. There can be any number of zombie computers from ten to thousands. The attacker then uses the traffic from these zombie computers to flood the target computer system. The owners of the infected computers are likely to experience poor service during these attacks as well [Rou]_. It is important for business, especially IT to know of the risks associated with DDoS and make sure their system has the right mitigation techniques in place to make it harder for these attacks to take place.

.. figure:: ddos.jpg 
	:height: 400px
	:width: 400px
	:align: center
    
This image depicts a typical DDoS attack [Dsa]_.

Different Types of Attacks 
--------------------------
Volumetric Attacks
~~~~~~~~~~~~~~~~~~
* Filling up a victim's network bandwidth
* User Datagram Protocol (UDP) flood attacks
* Reflection and Amplification [Kar]_

Protocol Attacks
~~~~~~~~~~~~~~~~
* Targeting protocol operation weaknesses
* SYN flood attack [Kar]_

Application Attacks
~~~~~~~~~~~~~~~~~~~
* Target application weaknesses
* Slowloris- attacking web servers [Kar]_

Past DDoS Attack Example
-------------------------
Large DDoS Attack on Dyn 
~~~~~~~~~~~~~~~~~~~~~~~
* Dyn is a DNS provider that is a link between URLs and corresponding IP addresses
* Twitter, SoundCloud, Spotify were some of the inaccessible websites during this attack
* Used a Mirai botnet, a network of infected Internet of Things devices (security cameras, DVR players, etc.) instead of computers
* 100,000 infected devices
* 1.2 Tbps

Attack Timeline
~~~~~~~~~~~~~~~
* October 21, 2016
* 3 different waves of attacks spaced out throughout the day

Response to the Attack
~~~~~~~~~~~~~~~~~~~~~~
* Attack came from many source IP addresses from around the world
* Dyn's Engineering and Operations teams worked hard to mitigate attack
* Traffic-shaping incoming traffic, application of internal filtering, and deployment of scrubbing services  [Hil]_

Example of Conducting a DDoS Attack
-----------------------------------
Ping of Death
~~~~~~~~~~~~
* Ping command in the command prompt (Windows)
* Attacking the target computer with pings from more than one computer
* Seeing the effect on the targeted computer 

Nemesy
~~~~~~
* Tool to conduct DDoS attacks
* Disable anti-virus to download Nemesy
* Sending number of packets, load size, and delay frequency for a certain target IP address
* Seeing the effect on the targeted computer [Ult]_

How to Know if an Attack is Happening
-------------------------------------
According to Akamai, an American content delivery network and cloud services provider, at the end of 2015, there was an 180% increase in the total number of DDoS attacks compared to 2014. Online gaming is the most susceptible to attacks, but software and technology companies still make up 25% of all DDoS attacks. [Rub]_

* Performing network data analysis to understand network traffic
* Unusually slow network performance
* Unavailability of website or inability to access site
* Increase in spam

What to do If an Attack Might Be Happening
------------------------------------------
* Rate limit router to prevent web server from being overwhelmed
* Add filters to tell your router to drop packets from obvious sources of attack
* Timeout half-open connections
* Drop spoofed or malformed packages
* Set lower SYN, ICMP (Internet Control Message Protocol), and UDP drop thresholds
* Call ISP or hosting provider to stop traffic getting on the network
* Divert traffic to a scrubber to remove malicious packets [Rub]_

How to Avoid DDoS Attacks
-------------------------
Architecture
~~~~~~~~~~~~
* Servers in different data centers, locate them on different networks, and have diverse paths
* Geographically dispersed resources
* Different internet providers
* Eliminate bottlenecks

Hardware
~~~~~~~~
* Network firewalls, web application firewalls, and load balancers 

Bandwidth
~~~~~~~~~
* Scale up if affordable 

Outsourcing
~~~~~~~~~~~
* Providers that specialize in responding to an attack
* Cloud Scrubbing services to attack traffic
* Internet Service Provider DDoS mitigation services [Kar]_

Other
~~~~~
* Following good email distribution practices or applying email filters
* Create proper authentication credentials for system administration
* Like any potential risk, having a response plan set up in preparation of an attack can help immensely. This could include contacts of companies that could help or running attack simulations.
* Have good communication with customers [Rub]_

*Written by Taylor, Edited by Esteban and Morgan.*

Sources
-------
.. [Dsa] "`Denial of a Service Attack <https://www.ebankingabersicher.ch/en/your-security-contribution/extended-protection/denial-of-service-attack>`_." Lucerne University of Applied Sciences and Arts, Web. 16 Feb. 2017.

.. [Hil] Scott Hilton. "`Dyn Analysis Summary of Friday October 21 Attack <http://dyn.com/blog/dyn-analysis-summary-of-friday-october-21-attack/>`_." Dyn, 26 Oct. 2016 Web. 20 Feb. 2017.

.. [Kar] Rachel Kartch. "`Distributed Denial of Service Attacks: Four Best Practices for Prevention and Response <https://insights.sei.cmu.edu/sei_blog/2016/11/distributed-denial-of-service-attacks-four-best-practices-for-prevention-and-response.html>`_." Software Engineering Institute. Carnegie Mellon University, 21 Nov. 2016. Web. 16 Feb. 2017.

.. [Rou] Margaret Rouse. "`Distributed Denial of Service (DDoS) Attack <http://searchsecurity.techtarget.com/definition/distributed-denial-of-service-attack>`_." TechTarget, Jan. 2017. Web. 16 Feb. 2017.

.. [Rub] Paul Rubens. "`Distributed Denial of Service (DDoS) Attack <http://www.esecurityplanet.com/network-security/5-tips-for-fighting-ddos-attacks.html>`_." eSecurity Planet. IT Business Edge, 25 Jan. 2016. Web. 16 Feb. 2017.

.. [Ult] Paul Rubens. "`Ultimate Guide to DoS(Denial of Service) Attacks <http://www.guru99.com/ultimate-guide-to-dos-attacks.html>`_." Guru99, Web. 16 Feb. 2017.