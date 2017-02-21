

Directory Traversal / Poisoned File Upload
==========================================

Introduction 
------------



**Real World Directory Traversal Vulnerability Example**
--------------------------------------------------------


**Real World Poisened File Vulnerability Example**
==================================================
The first objective here is to explain any terminology, and refer back to introduction for the descriptions of the two vulnerabilities. Next, goal here is to find a detailed account of poisoned file upload in a company setting that caused some issues for them infrastructure wise. The other main goal of this section, will be to drive home the devastation that this vulnerability can cause to a company's file system at the minimum, or their core operations at the most serve.  After I go into detail about the event, next I will layout prevention techniques for poisoned file upload to end this section. 

* It should be a large technology firm, that create change when it finds problems.
* If I can't find a big tech example, find a couple small examples with probably less impact on industry.
* Use the Win32/Poison malware as an example of a file that a hacker could upload and take control of some core functions of every computer infected. Explained in picture, and bullets points below.  [MICROSOFT]_




Directory Traversal / Poisoned File Upload Examples
===================================================
.. image:: bad_upload.jpg
	:height: 450px
	:width: 450px
	:align: center
	:alt: bad upload 






			





**Works Cited**
---------------  



.. [VERACODE] DuPaul, Neil."`Directory Traversal <https://www.veracode.com/security/directory-traversal>`_." *Veracode*.Web.Date Accessed 20 Feb 2017.


.. [ACUNETIX] No Author Listed "`Directory Traversal Attacks <http://www.acunetix.com/websitesecurity/directory-traversal/>`_." *Acuntetix*.Web.Date Accessed 20 Feb 2017.
.. [MICROSOFT] No Author Listed  "`Win32/Poison <https://www.microsoft.com/security/portal/threat/encyclopedia/entry.aspx?Name=Win32%2fPoison>`_." *Microsoft*.Web.Date Accessed 20 Feb 2017.

.. [CISCO] No Author Listed "`Huawei HG532 Routers Restricted Directory Improper Limitation Pathname Vulnerability <https://tools.cisco.com/security/center/viewAlert.x?alertId=41997>`_." *Cisco*.Web.Date Accessed 20 Feb 2017. Article first published 9 Nov 2015.

.. [COMWEEKLY] Shapland, Robert."`"File Upload Security Best Practices: Block a Malicious File Upload." <http://www.computerweekly.com/answer/File-upload-security-best-practices-Block-a-malicious-file-upload>`_."ComputerWeekly. Computerweekly.com, May 2012. Web. 20 Feb. 2017.  

.. [USENIX] Xu, Wei, Sandeep Bhatkar, and R. Sekar."`Taint Enhanced Policy Enforcement A Practical Approach to Defeat a Wide Range of Attacks <https://www.usenix.org/legacy/event/sec06/tech/full_papers/xu/xu_html/>`_." *Usenix Security*.Web.Date Accessed 20 Feb 2017.





*Written by Michael B. Edited by Kyle and Michael R*

  Independence: Cengage Learning, 2014. Print.