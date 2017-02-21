Distributed Denial-of-Service
=============================

Introduction
------------

Distributed Denial-of-Service (DDoS) is a type of Denial-of-Service when an 
attacker overloads a server with requests and it stops being able to process 
them. However, DDoS is harder to prevent and stop, because instead of one 
computer attacking a target, an attacker will take over many computers to 
attack a target by sending multiple messages or connection requests to it. 
Furthermore, it is more difficult to distinguish these attacks from real 
requests due to certain circumstances such as a spike in a website's popularity
[Rou]_. The victim computer, website, or network source may be significantly 
slower, crash, or shut down denying real users of the service. This is a more
advanced security breach than an attack from a single host or IP address
where they can be blocked easily with a firewall [Kar]_. Attackers can 
come from a wide range of groups or individuals or just be the result of
very poor code. Large companies are most often the victims of DDoS attacks.

.. figure:: ddos.jpg 
	:height: 400px
	:width: 400px
	:align: center
    
This image depicts a typical DDoS attack [Dsa]_.

In a DDoS attack, an attacker exploits a weakness of a computer system and 
becomes the DDoS master. The DDoS master then finds other weak systems and
gains control using malware, another term for software that is intended to 
damage or disable computer systems, or bypassing their security. The 
computers that are under the control of the attacker are called zombies or
bots. There can be any number of zombie computers from ten to thousands 
and these make up a botnet. The owners of the infected computers are 
likely to experience poor service during these attacks as well [Rou]_. 

It is important for business, especially IT to know of the risks 
associated with DDoS and make sure their system has the right mitigation
techniques in place to make it harder for these attacks 
to take place.


Past DDoS Attack Example
-------------------------
Past Large Botnets
~~~~~~~~~~~~~~~~~~
The ability for hackers to gain control of large botnets gives them the 
possibility to do cybercriminal activity, spend billions of spam emails, 
and complete large DDoS attacks.

* Grum - From 2008 to 2012, it became responsible for up to 26% of the world's
  spam traffic. In 2010, it was capable of emitting 39.9 billion messages a 
  day, making it the largest botnet at the time.
* ZeroAccess - Estimated to have controlled 1.9 million computers around the 
  world, focusing on click fraud and bitcoin mining. It was reported to be 
  consuming enough energy to power 111,000 homes per day from all of its 
  infected computers
* Windigo - was discovered in 2014 after running undetected for three years.
  It infected 10,000 Linux servers and sent 35 million spam emails a day, 
  infecting 500,000 computers. It had different forms of malware depending 
  on the operating system of the device receiving it.
* Conficker - at its peak in 2009, it was estimated to have infected 15 
  million computers, but the total number of machines under the botnet control
  totaled between 3 and 4 million
* Srizbi - Only active for about a year, but was responsible for 60% of spam
  worldwise and sent 60 billion emails every day from 2007 to 2008. When it 
  was taken offline, spam volume worldwide dropped by 75% [Tho]_.

Large DDoS Attack on Dyn 
~~~~~~~~~~~~~~~~~~~~~~~~
On October 21, 2016, the DNS provider, Dyn, was a victim of a DDoS attack.
This impacted users from using popular websites that are Dyn customers 
including Twitter, Reddit, Twitter, Spotify, and Netflix. The attacker 
used a Mirai botnet, a network of Infected Internet of Things devices such
as security cameras and DVR players, which have poor security and a 
large quantity. It is estimated that there were 100,000 infected devices
with a magnitude of 1.2 Tbps.

	"Attacking a DNS or a content delivery provider such as Dyn or Akamai in 
	this manner gives hackers the ability to interrupt many more companies 
	than they could by directly attacking corporate servers, because several 
	companies shared Dyn's network."
	Spectrum, a magazine that explores the development, applications, and 
	implications of new technologies

This attack came in three phases throughout the course of the day. Since it was
difficult to distinguish legitimate traffic from attack traffic, it was very
difficult to mitigate. Furthermore, legitimate retry activity caused 10 to 20
times more traffic volume from many IP addresses around the world.

Dyn's Engineering and Operations teams worked hard to mitigate the attack and
some of their techniques included traffic-shaping incoming traffic,
applications of internal filtering, and deployment of scrubbing services [Hil]_


Example of Conducting a DDoS Attack
-----------------------------------
How to Build a Botnet
~~~~~~~~~~~~~~~~~~~~~
Another reason a DDoS attack is very threatening is due to the fact that 
setting up a botnet is fairly easy. Simon Mullis from FireEye simulated this 
process with a clean Window virtual machine and a LAMP server on Amazon
Web Service's EC2 platform. 
These are the steps Mullis took:
1. Downloading and installing the botnet builder tool for malware known as 
   Ice IX
2. Specifying parameters. For example, how often the malware would 
   communicate with the command server, what actions it would take, and how it
   would hide from anti-virus scans. It can take screenshots of pages visited 
   by the victim's machine, block sites such as anti-virus sites, and redirect 
   legitimate URLS to malevolent sites to collect information.
3. Encrypting and packing the infected file to install malware on victim machine
4. At this point, the bot master can spread more malware to other computers 
   [Pro]_

.. figure:: iceix.PNG 
	:height: 400px
	:width: 400px
	:align: center
    
This image depicts an early version of Ice IX Botnet [Mie]_.

How to Know if an Attack is Happening
-------------------------------------
According to Akamai, an American content delivery network and cloud services 
provider, at the end of 2015, there was an 180% increase in the total number
of DDoS attacks compared to 2014. Online gaming is the most susceptible to 
attacks, but software and technology companies still make up 25% of all DDoS
attacks. [Rub]_

Below are some indications of a DDoS attack is taking place:
* Performing network data analysis to understand network traffic. Unusual
  traffic could be the result of an attack
* Unusually slow network performance
* Unavailability of website or inability to access site
* Increase in spam

What to do If an Attack Might Be Happening
------------------------------------------
If an attack is taking place, there are some steps a victim can take to mitigate
the effect of the attack.

Some of these steps include:
* Rate limit router to prevent web server from being overwhelmed
* Add filters to tell your router to drop packets from obvious sources of attack
* Timeout half-open connections
* Drop spoofed or malformed packages
* Set lower SYN, ICMP (Internet Control Message Protocol), and UDP drop 
  thresholds
* Call ISP or hosting provider to stop traffic getting on the network
* Divert traffic to a scrubber to remove malicious packets [Rub]_

How to Avoid DDoS Attacks
-------------------------
While there is no way to absolutely rid a company from the threat of a DDoS 
attack, there are measures the company can take to decrease the chance of a 
large, expensive and damaging attack from taking place. 

Having a strong technical architecture can be important to decrease the risk
of an attack. This includes having servers in different data centers, locating
data centers on different networks, ensuring data centers have diverse paths,
and eliminating bottlenecks in data centers and networks they are connected to.

In addition, having the right security hardware can help mitigate DDoS attacks.
Network firewalls, web application firewalls, and load balancers can defend
against protocol attacks and application attacks. If it is affordable, it can
be beneficial to scale up network bandwidth to absorb large traffic volume. 
This is more realistic for large organizations and service providers.

There are also several services that specialize in responding to different 
kinds of attacks. They can provide cloud scrubbing services for attack 
traffic. Internet Service Providers can also offer DDoS mitigation that can 
help respond to attacks [Kar]_.

It is important to follow good email distribution practices and apply email
filters to protect against becoming victim in a botnet. It is also crucial to
create proper authentication credentials for system administration. Maintaining
proper communication with customers and utilizing good PR techniques are 
important to remember during or after an attack. Having a plan set up in 
preparation of an attack can help to better respond in the future [Rub]_.

*Written by Taylor, Edited by Esteban and Morgan.*

Sources
-------
.. [Dsa] "`Denial of a Service Attack <https://www.ebankingabersicher.ch/en/your-security-contribution/extended-protection/denial-of-service-attack>`_." Lucerne University of Applied Sciences and Arts, Web. 16 Feb. 2017.

.. [Hil] Scott Hilton. "`Dyn Analysis Summary of Friday October 21 Attack <http://dyn.com/blog/dyn-analysis-summary-of-friday-october-21-attack/>`_." Dyn, 26 Oct. 2016 Web. 20 Feb. 2017.

.. [Kar] Rachel Kartch. "`Distributed Denial of Service Attacks: Four Best Practices for Prevention and Response <https://insights.sei.cmu.edu/sei_blog/2016/11/distributed-denial-of-service-attacks-four-best-practices-for-prevention-and-response.html>`_." Software Engineering Institute. Carnegie Mellon University, 21 Nov. 2016. Web. 16 Feb. 2017.

.. [Mie] Jorge Mieres. "`Ice IX, the First Crimeware Based on the Leaked ZeuS Sources <https://securelist.com/blog/research/29577/ice-ix-the-first-crimeware-based-on-the-leaked-zeus-sources-8/>`_." SecureList. AO Kasperksy Lab, 24 Aug. 2011. Web. 21 Feb. 2017.

.. [Pro] Brian Proffitt. "`How to Build a Botnet in 15 Minutes <http://readwrite.com/2013/07/31/how-to-build-a-botnet-in-15-minutes/>`_." ReadWrite, 31 Jul. 2013. Web. 21 Feb. 2017.

.. [Rou] Margaret Rouse. "`Distributed Denial of Service (DDoS) Attack <http://searchsecurity.techtarget.com/definition/distributed-denial-of-service-attack>`_." TechTarget, Jan. 2017. Web. 16 Feb. 2017.

.. [Rub] Paul Rubens. "`Distributed Denial of Service (DDoS) Attack <http://www.esecurityplanet.com/network-security/5-tips-for-fighting-ddos-attacks.html>`_." eSecurity Planet. IT Business Edge, 25 Jan. 2016. Web. 16 Feb. 2017.

.. [Tho] Karl Thomas. "`Nine Bad Botnets and the Damage They Did <http://www.welivesecurity.com/2015/02/25/nine-bad-botnets-damage/>`_." WeLiveSecurity. ESET, 25 Feb. 2015. Web. 21 Feb. 2017.

.. [Ult] "`Ultimate Guide to DoS(Denial of Service) Attacks <http://www.guru99.com/ultimate-guide-to-dos-attacks.html>`_." Guru99, Web. 16 Feb. 2017.