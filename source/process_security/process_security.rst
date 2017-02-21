Process Security
================

*Written by Michael R, Edited by Michael B and Anthony.*

Introduction
------------
Process security is the method of securing processes on a computer to limit what they can access. For example, if a piece of software such as Apache were compromised, a hacker could potentially wreak havoc on any computer where it was installed. With process security, multiple system functions such as directory access, network ports, disk access, and CPU access can be limited to prevent processes from going rogue or to prevent hackers from using them to exploit a system.

Process Accounts
----------------
One way to secure processes is through the use of process accounts. If you have ever used a Linux computer, you have likely seen some kind of warning about running a program as root. This can be especially annoying if you are the only user on a personal computer and you find yourself frequently switching between your regular user account and the root acccount.

.. image:: Wireshark_warning.png
	:align: center

So, how do you know when to make process accounts and how do you make them?

This depends on the operating system and software you're installing. Making a process account is as simple as creating another login to your computer but setting the permissions for that account can get a little more complicated.

Let's use the example of installing Apache on a Linux machine. When installing Apache the software automatically creates a user called "www-data" and a group called "www-data" which includes that user. Apache stores all of its data in the /var/www directory. After installing the software, you need to change the read, write, and execute permissions of this directory to the "www-data" user. This will prevent other user accounts from accessing this directory and people accessing the server through this account from modifying files in other locations on the server. [UGP]_

.. danger::

    Did you skim over the last section? The summary is that running a program as root potenitally gives anyone who uses that program full and unlimited access to your computer.

Vulnerability Demonstration
---------------------------
Are you still having trouble seeing how this could be an issue for you? Let me lay it out.

1. You install Apache web server to run as "root" on a Linux server.
2. A hacker accesses your server and uses a method like directory traversal to move up and out of the /var/www folder into the /etc folder.
3. The hacker takes whatever information they want and installs malware or corrupts the server operating system because they have access to execute any system command. [WSS]_

Security Steps
--------------
Here are some things to do to limit process security vulnerabilities:

*Install only the minimum necessary programs on your server and run one process per server if possible.
*Save your web content and the operating system on different disks or file partitions. On Windows, it's typical to have a C: and D: drive. On Linux, the OS is typically installed in /etc and the data is typically saved in /var.
*Give process accounts minimum necessary permissions. Don't guess. Figure out the absolute minimum permissions needed for a process account.
*Install security updates regularly.
*Turn on server logs and watch them for strange entries. [WSS]_

Additional Example:
--------------------
On Linux computers you must be running as root or a superuser to listen on ports 0-1024. This was originally a security feature although at least one author argues it is completely outdated and useless. Regardless, this feature requires web servers to be run with superuser priviledges if they are operating traditionally on port 80 which could also be a vulnerability if a web server is being run from a superuser account. [RPL]_

Sources
-------
.. [UGP] User and Group permissions, with chmod, and Apache. 2013. 21 2 2017. <http://fideloper.com/user-group-permissions-chmod-apache>.
.. [RPL] Ståldal, Mikael. Why can only root listen to ports below 1024? 31 10 2007. 21 2 2017. <https://www.staldal.nu/tech/2007/10/31/why-can-only-root-listen-to-ports-below-1024/>.
.. [WSS] Acunetix. Web Server Security and Database Server Security. 2017. 21 2 2017. <http://www.acunetix.com/websitesecurity/webserver-security/>.