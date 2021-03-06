Directory Traversal / Poisoned File Upload
==========================================
*Written by Michael B. Edited by Kyle and Michael R*

Introduction 
------------

*Directory Traversal* 

The two attacks that will be covered here are Directory Transversal and Poisoned
File Upload, these attacks are achieved in both exploiting not validated input
from user, they achieve the same goal in a different way. That goal being 
breaking into a computer to steal information, causing irreparable damage to the
file system, or the computer as a whole.Directory Traversal happens when a 
malicious user decides to test if they can get out of the web root directory, 
which is where they should stay. Now, if they manage to do this, the directory
traversal attack has begun. [ACUNETIX]_

According to Acunetix , this is a pretty simple malicious attack to attempt, 
basically if you know the system the website you are trying to break is being 
stored on you too can do this malicious attack(I don’t recommend anyone 
try this at home). [ACUNETIX]_ 

How are these attacks actually executed? In the paper by Wei Xu,Sandeep Bhatkar
,and R.
Sekar , they explain in much greater detail of how to do directory traversal 
than other sources currently cited.  To sum it up short and sweet, the process
of traversing directories depending on security, you try using forward slashes 
with two dot operators on most file systems to go up directories. Finishing 
with the folder you want to traverse to in mind. If the security is higher, 
you get more creative and attempt and encode directory traversal. If that fails
they go into a little detail, but I don’t think it is necessary here.
[USENIX]_

*Poisoned File Upload*

Poisoned File Upload is done when a web application, or website doesn't validate 
file inputs to the upload field. Basically, making sure that only allowed types
of files are being uploaded, not system ruining viruses, or system controlling 
viruses. Now, this is a really bad attack that can cause several bad things to
happen.Just covering a couple gives a good picture for how bad this attack 
is for anyone on the receiving end.  Rob Shapland from ComputerWeekly explains 
two really good reasons, and one, I already glossed over. 

One, a nefarious user decides they want to just make your website or web application useless,
so they upload a file with the same name as a core process that makes your 
web server run and add it to the same directory.  The core process is then 
overwritten, making your web application useless. Two, he explains that the 
nefarious user could upload a virus to your web server that hands the keys over
to him or herself. There are many bad thing that could happen with poisoned 
upload, but I think those are two of the worst, and in the example section it
will be  explained how to prevent these attacks. [COMWEEKLY]_ 

**Directory Traversal Vulnerability Examples**
---------------------------------------------
This example of directory traversal is provided and explained by Acunetix 
as a web application request based intrusion. [ACUNETIX]_ The intruder, if the
website is using get can figure out that the show.asp gets the files and 
displays any file on screen. With that said, they can use the use the below few 
examples to get out of the main web directory. If the website hasn't had 
a chance to secure, or is not using updated web server, an intruder could use 
the first transversal to display the websites system.init output to themselves.


The second code block is specifically trying to transversal a unsecured web 
application server, also provided by Acunetix. Basically, the goal is 
to run the command prompt and allow the intruder get all  file names from that 
drive. You could replace the c+dir+c with any letter combination of drive letters
to get all the file names from the computer in a few requests. This attack would 
further let a hacker mess with your system, being able to run rename commands on 
core files, if they weren't secured against this attack. Fundamentally changing 
your system, if it has these flaws. Now, the third example, is if someone were
to rename the windows load executable file, if this security flaw existed in
windows an intruder could render a core file useless.It is a shocking change 
that you can cause a persons computer, by just exploiting improper input from 
the user to the web server. This means that directory traversal because of how 
common it is, and how the exploit can be used, it is a very dangerous hack to a computer 
file system. in the above examples, I laid out just how dangerous. 
[ACUNETIX]_ [VERACODE_2]_

Directory traversal is also, one of the most popular exploits out there, 
the reason is, as i covered in the introduction it is a simple to execute 
attack. Now, even though it may be an easier attack to execute, being that is 
really popular, it is going to be one of the first attacks anyone attempts 
to secure themselves from. Even though it is an already known security issue,
doesn’t mean it ceases to pop up again.  [VERACODE_2]_

For example Cisco reported, a directory transversal vulnerability
in a router they service, this occurred on November 9th 2015. This is a never 
ending battle between hacker an programmer to keep directories secure.The 
security page also explains, in a brief little description that the code to
access this particular router is readily available. [CISCO]_

An intruder can also, if they think you have protected against just using the ../
to transverse directories, they can encode the ../, which is  %2E%2E%2F. 
They can also do this for the commands below, so encode all those characters to 
try and get around your filter. That is the technique you use when someone has 
thought of base security against directory transversal. [USENIX]_ [W3SCHOOLS]_  
Below i will cover full fledged prevention techniques.


.. code-block:: bash 
	

	GET http://test.webarticles.com/show.asp?view=../../../../../Windows/system.ini HTTP/1.1
	Host: test.webarticles.com

.. code-block:: bash 

	GET http://server.com/scripts/..%5c../Windows/System32/cmd.exe?/c+dir+c:\ HTTP/1.1
	Host: server.com

.. code-block:: bash 

	GET http://server.com/scripts/..%5c../Windows/System32/cmd.exe?/ren+winload.exe%3dwinload.txt\ HTTP/1.1
	Host: server.com

[ACUNETIX]_ 
[SIMPLYADVANCED]_
[W3SCHOOLS]_
[USENIX]_

------------
*Prevention*
------------
 If you do step 1, it won't allow a nefarious user to break out of the webroot directory. 

#. The first one discussed off the bat from Veracode, explains that the developers in school need to learn to assess the validity of data entered into the Internet browser, to prevent directory transversal.

#. As a developer you need to design programs that throws out someone trying to use escape characters in a URL, only take valid data. 

#. All developers should stay current with new security exploits, and update against them as soon as possible.  [ACUNETIX]_ [VERACODE]_



**Poisoned File Upload Vulnerability Examples**
----------------------------------------------
.. image:: bad_upload.jpg
	:height: 450px
	:width: 450px
	:align: center
	:alt: bad upload

There are several types of Poisoned File Uploads, I covered the type where it 
combines directory traversal in the the upload in my introduction. For example,
you attempt an upload on a not validated upload field, and terrible things 
happen to your computer because you just uploaded a  virus copy of some 
windows core files to your system called Win32/Poison from the Microsoft 
virus database. With this achieved the hacker has access to a lot about your 
system. [MICROSOFT]_ 

The next one I covered was the hacker uploading a file to destroy, or take over
the web server computer. All of these are clearly dangerous to your web server 
computer, your privacy, and your ability to control what happens to your website.
These are all big bad things that a poisoned file 
upload can do to you and your computer. The one I want to cover here not covered
yet, and that is uploading a gigantic file to prevent the web server 
from doing anything.  [COMWEEKLY]_ 

The issues that is at hand, is again not validating data the user sends the web 
server. So it make sense why professor Craven put these two security 
vulnerabilities together. They can both be used to modify files, and you can 
use directory transversal in a poisonous file upload. Now this would be 
especially bad if this was a website for a business,  it could set your business back a year, 
or two,or more. It could be permanent if the hacker was really mean. [COMWEEKLY]_ 





------------
*Prevention*
------------
It is similar prevention to directory traversal, I just think the Shapland article 
is more detailed on prevention of poisonous file upload, in comparison to 
all the others on directory traversal.in regards to the similarities. 

#. Shapland talks, about creating a program, that has a list of acceptable files, and it throws an error at every other invalid file type.
#. Again similar to above, a program should be created to make sure a hacker doesn't try to encode file types. He says one, or the other, I think both is correct.
#. Filename shouldn't have directory transversal embedded in it, to prevent this further have maximum character amount for a filename. 
#. Every file that is accepted for upload needs to be scanned to make sure it is virus free. 
#.  A important thing about file security that professor Craven went over in class, don't use the name given to the file by the user, use a name you come up with.

Shapland talks about either front end user, or back end checks, I believe in both for more security. I went over all six, but combined three and four from Shapland's list. [COMWEEKLY]_  


**Works Cited**
---------------  

.. [VERACODE] DuPaul, Neil."`Directory Traversal <https://www.veracode.com/security/directory-traversal>`_." *Veracode*.Web.Date Accessed 20 Feb 2017.

.. [SIMPLYADVANCED]  Goodwin, Danial."`Cheat Sheet for Windows Command Prompt <http://simplyadvanced.net/blog/cheat-sheet-for-windows-command-prompt/>`_." *Simplyadvanced*, 3 Aug 2011.Web.Date Accessed 27 Feb 2017.
.. [VERACODE_2] No Author List "`CWE/SANS TOP 25 <https://www.veracode.com/directory/cwe-sans-top-25>`_." *Veracode*.Web.Date Accessed 20 Feb 2017.

.. [ACUNETIX] No Author Listed "`Directory Traversal Attacks <http://www.acunetix.com/websitesecurity/directory-traversal/>`_." *Acuntetix*.Web.Date Accessed 20 Feb 2017.
.. [MICROSOFT] No Author Listed  "`Win32/Poison <https://www.microsoft.com/security/portal/threat/encyclopedia/entry.aspx?Name=Win32%2fPoison>`_." *Microsoft*.Web.Date Accessed 20 Feb 2017.

.. [CISCO] No Author Listed "`Huawei HG532 Routers Restricted Directory Improper Limitation Pathname Vulnerability <https://tools.cisco.com/security/center/viewAlert.x?alertId=41997>`_." *Cisco*.Web.Date Accessed 20 Feb 2017. Article first published 9 Nov 2015.

.. [W3SCHOOLS] No Author Listed"`"ASCII Encoding Reference." <https://www.w3schools.com/tags/ref_urlencode.asp>`_."w3schools. Web. 27 Feb. 2017.  

.. [COMWEEKLY] Shapland, Robert."`"File Upload Security Best Practices: Block a Malicious File Upload." <http://www.computerweekly.com/answer/File-upload-security-best-practices-Block-a-malicious-file-upload>`_."ComputerWeekly. Computerweekly.com, May 2012. Web. 20 Feb. 2017.  

.. [USENIX] Xu, Wei, Sandeep Bhatkar, and R. Sekar."`Taint Enhanced Policy Enforcement A Practical Approach to Defeat a Wide Range of Attacks <https://www.usenix.org/legacy/event/sec06/tech/full_papers/xu/xu_html/>`_." *Usenix Security*.Web.Date Accessed 20 Feb 2017.