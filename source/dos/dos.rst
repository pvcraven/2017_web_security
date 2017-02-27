Denial-of-Service
=================

Denial-of-Service attack is a security event that occurs when an attacker takes 
action that prevents legitimate users from accessing the target computer, 
device, website, or other network resource. Denial-of-Service can cause damage
to many businesses and does so every day around the world. This attack is not only
harmful to the businesses, but it can be a major inconvenience to the every day 
user trying to access websites. Even with our modern day technology and 
security, we are still just as likely to get hit with theses attacks as businesses 
were years ago when the Internet was still growing. 

How it Happens
--------------

Denial-of-service is typically accomplished by flooding the targeted machine or 
resource, such as Facebook's servers. With requests in attempt to overload the 
system and prevent users from accessing the website. An easy way to think about 
how this works is when you are driving on the interstate to work and it seems 
that traffic is normal everyone is going 65MPH and it is slightly relaxing. You 
are about to get to your destination which is exit B2 Facebook ST, and suddenly, there is 
a huge line of care at that exit so big that you can see the cars all the way to 
the Facebook building connecting to the interstate. You stay frustrated and 
annoyed because you need to get to work but there is nothing you as the user can 
really do about it.  

* This is a real-world example of how Denial-of-service happens because this has 
happened to me many times when trying to get downtown during rush hour.

Example and Explanation 
-----------------------
.. image:: Code.png
[img]_
This is a straightforward and starts with the user declaring two variables. A and
B. Both A and B have sizes of 50 and 16. The program will ask the user for the
name and it uses the "gets" function in order to receive the input. The data that
the user inputs is copied from A to the buffer variable and then the function 
is complete. In this situation, the issue is with the "gets" function. This function
by itself does not have any form of bound checking. So "gets" will not actually
check if what the user entered is actually 50 characters or less. This means that 
if the user uses more then 50 characters the program will crash. 

To put it in a real world example: if this code was used as a sign up for a
newsletter and someone entered 51 characters in the name box, the program would 
crash and could cause the website you are signing up for to be down. This same
user could keep doing this over and over again until the owners of the website
fix the code so that this does not happen. 



Why is it dangerous?
--------------------

1. Users hate having to wait for websites to open up.
2. The website can lose customers as a result, which will hurt the company in 
   return. 
3. The workers at the company being attacked will not be able to work since 
   their services are down. 
4. When your workers are not able to work you either have to send them home or
   keep them on the clock not making the company any money. 
5. The cost that companies will easily incurr is more than $50k in recovery bill from 
   a DOS attack. [Cost]_

Why does it happen?
-------------------

I actually have a theory on this. When it comes to attacks on a major network 
such as anything to do with credit cards like Shazam or social media like 
Facebook.

* Shazam will be attacked because it will make it harder for people to use their
  ATMs which in return will make Shazam lose money. This opens a window of 
  opportunity for the attackers to request money from Shazam to stop the attack. 

* Facebook will be attacked because of similar reason, but I personally think 
  the attack is coming mostly from another company. Not necessarily the company 
  attacking but one employee that thinks he is doing the right thing. 
  A few years ago when I was 
  playing a game called Guild Wars 2 they released new content and right after 
  the release they were hit with a DOS attack making it impossible for players 
  to log in and play the game. There is no reason to attack a company for a 
  video game unless you are trying to get players to play a different game. 
  [Why]_

Different Types of Attacks
--------------------------

Distributed DOS

* DDoS is a type of DOS attack where multiple compromised systems, which are 
  often infected with a Trojan, are used to target a single system causing a 
  Denial of Service (DoS) attack. Victims of a DDoS attack consist of both the 
  end targeted system and all systems maliciously used and controlled by the 
  hacker in the distributed attack.
  [DoS]_

Advanced Persistent DOS

* These attacks are caused by more skilled hackers. The attacks involve multiple
  layers of attacks, starting with application layer floods, followed by repeated
  SQLI and XSS attacks. [DoS]_

How to protect myself
----------------------

Typical users do not need to worry about being the target of a denial of service
 attack. There are a few exceptions to this though listed below.

1. Online streamers
2. Professional gamers
3. Social Media Influencer
4. YouTube Stars

It is uncommon for one specific user to be the target of an attack. [geek]_
 The tricky thing here is that there is no real way to prevent a DoS attack. It
 is almost impossible to tell the difference between a normal request and a 
 malicious request, because they come to the endpoint the same way. There are
 a few things you can do to help prevent and make it not as effective. 

1. Have PLENTY of bandwidth. Although this can rack up a big bill, it is easier 
   to keep your services up and running if you have free bandwidth.

2. DoS attack identification. This helps with trying to decide if the request 
   is real or malicious. This is not the perfect system but it can help. 

3. Prepare for DoS response. Using technology to slow down people connections 
   or limiting each request to half a megabyte for example can prevent the attack 
   from taking over and shutting down the service. 

All in all, there is not perfect way to prevent the attack. To me, it works like
 cold and flu medicine; it's great stuff and helps, but you can still catch a cold 
 
 [safe]_





Sources
-------
.. [Cost] Barker, Ian. "DDoS Attacks Are More Dangerous than You Think." BetaNews. BetaNews, 18 Sept. 2015. Web. 23 Feb. 2017. <https://betanews.com/2015/09/18/ddos-attacks-are-more-dangerous-than-you-think/>.

.. [Why] Zeltser, Lenny. "9 Reasons for Denial-Of-Service (DoS) Attacks: Why Do They Happen?" Lenny Zeltser Content. Zeltser Security Corp, 26 Aug. 2016. Web. 27 Feb. 2017. <https://zeltser.com/reasons-for-denial-of-service-attacks/>.

.. [Dos] "Denial-of-service Attack." Wikipedia. Wikimedia Foundation, 26 Feb. 2017. Web. 27 Feb. 2017. <https://en.wikipedia.org/wiki/Denial-of-service_attack>.


.. [geek] Stewart, Dennis. "What Are Denial of Service and DDoS Attacks?" HowTo Geek RSS. How-To Geek, 28 Nov. 2016. Web. 27 Feb. 2017. <http://www.howtogeek.com/281707/what-are-denial-of-service-and-ddos-attacks/>.


.. [safe] Chapple, Mike. "How to Prevent DoS Attacks in the Enterprise." SearchSecurity. Tech Target, n.d. Web. 27 Feb. 2017. <http://searchsecurity.techtarget.com/answer/How-to-prevent-a-denial-of-service-DoS-attack>

.. [img] Sanders, Chris. "Buffer Overflows, Data Execution Prevention, and You." TechGenix. TechGenix, 28 Oct. 2009. Web. 27 Feb. 2017. <http://techgenix.com/buffer-overflows-data-execution-prevention-you/>.

*Written by Rasim, Edited by Kyann and Kyle.*
