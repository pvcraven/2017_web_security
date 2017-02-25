Data Encoding - Morgan Ryan
=============

*Written by Morgan, Edited by Anthony and Kyann.*

THIS IS NOT CORRECT INFORMATION! I WILL CORRECT TOMORROW 2/23/17!!

Introduction
------------

When working with security issues within your program there are many ways to make sure your program is secure, encoding is one of them. Encoding involves "applying a specific code, such as letters, symbols and numbers, to your data for conversion into a equivalent cipher [e]_." In other words, encoding will make your code unreadable to other people when they try to view it but will be readable when you view it. If hackers don't understand your code then they won't be able to change anything to enable them to hack your website. The goal is to help you understand encoding, how it can impact your website, and how to use encoding. Once you understand those three things then hopefully your websites will be protect aganist hackers.

Impact of Encoding
------------------

ASCII Encoding
--------------

We are going to start out with the basics when dealing with encoding which is ASCII encoding. ASCII encoding deals with "the browser or client side of things, it will encode the input according to the character-set used in the web=page and the default character-set in HTML5 which is UTF-8 [s]_." Below is an example table of what each symbol represents and what it gets replaced with to use in the URL before it reaches the server.

Insert table

URL Encoding
------------

Working with websites can be a challenge when it comes to securing your website from hackers. One way to secure your website is by URL encoding. URL encoding deals with "converting characters into a format that can be transmitted over the Internet [u]_." First things first, you have to have to understand that all URLs are sent over the internet by using the ASCII character-set that I talked about before this section.  But since "URLS contain characters outside the ASII set, then the URL has to be converted into a valid format using ASCII [u]." With this in mind, you have to replace any characters that are "unsafe" with % and any spaces with a +. To encode in Javascript you must use the function encodeURI(). Below is how Javascript encodes text.

Text:  Hello World
Encoded Text:  Hello%20World

UTF-8 (Unicode) Encoding
------------------------

Another method to secure your website is using UTF-8. When using this "the goal is to replace the existing character sets with its standard UTF format [t]_." This method is used more frequently and has a high success rate with securing your website. The two most commonly used forms of encoding are UTF-8 and UTF-16.

UTF-8: "a character in UTF-8 can be from 1 to 4 bytes long. UTF-8 can represent any character in the Unicode standard. UTF-8 is backwards compatible with ASCII. UTF-8 is the preferred encoding for e-mail and web pages [t]_."

UTF-16: "16-bit Unicode Transformation Format is a variable-length character encoding for Unicode, capable of encoding the entire Unicode repertoire. UTF-16 is used in major operating systems and environments, like Microsoft Windows, Java and .NET [t]_."

If you are using anything other than UTF-8 it needs to be specified in th <meta> tag for example, <meta charset="ISO-8859-1">. The reason for this is due to the fact that HTML5 is defaulted to UTF-8. You have heard me reference Unicode which to clarify is the character set that UTF-8 is using to encode. "The encoding part of this is how those character sets are represented by decimal numbers and then translated to binary numbers and store in the computer [t]_." Below is an example table of the translated decimal numbers.

Insert table

Base64 Encoding
---------------

Lastly, "Base64 is a group of similar binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation [b]_." In Javascript there is one function that is used when encoding Base64 strings: btoa(). Using this function "creates a Base64 encoded ASCII string from a string of binary data [b]_." Below is an example code of how to use the function btoa().

function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

b64EncodeUnicode('✓ à la mode'); // "4pyTIMOgIGxhIG1vZGU="
b64EncodeUnicode('\n'); // "Cg=="

Conclusion
----------



Outline
-------

Impact of Encoding
-----------------------
	*	How will Data Encoding increase security?
	*	What are some techniques you can use?
	
ASCII Encoding
---------------

URL Encoding
-------------

UTF-8 Encoding
---------------

Base64 Encoding
----------------
	
Conclusion
----------

.. image :: encoding.png
	
References
-----------
.. [e]	"`Encoding <https://www.techopedia.com/definition/948/encoding Techopedia>`_", Technopedia. Web. 19 Feb. 2017.

.. [det] "`Data Encoding Techniques <https://web.cs.wpi.edu/~rek/Undergrad_Nets/B06/Data_Encoding.pdf Worchester Polytechnic Institute>`_", Worchester Polytechnic Institute. Web(PDF). 19 Feb. 2017.

.. [how] "`How to Protect Your Website from Being Hacked.” <https://ahrefs.com/blog/protect-website-from-hackers/>`_", ahrefsblog. Web. 19 Feb. 2017.

.. [Image] "File: Manchester encoding both conventions.svg <https://commons.wikimedia.org/wiki/File:Differential_Manchester_encoding_alternatives.png>`_", Wikimedia. Wikimedia, 27 Sept. 2006. Web. 19 Feb. 2017.

.. [sphinx]	Georg Brandl. "`reStructuredText Primer <http://www.sphinx-doc.org/en/stable/rest.html>`_" Sphinx Team, Web. 15 Feb. 2017.
