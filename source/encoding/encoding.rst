Encoding
========

*Written by Cole, Edited by Cody and Ashtyne.*

Introduction
------------

Encoding is used for the process of putting a sequence of characters (letters, numbers, punctuation, etc.) into a specialized format for efficient transmission or storage. However, encoding can be a little difficult to use at times. Have you ever opened up a file on your computer or seen a text message on your phone that has question marks pop up instead of what you're assumng should be a comma or an emoticon? It is most likely because that that rogram cannot read the type of encoding that the characters are in. Most files containing text are encoded with UTF-8, but that doesn't men every web developer in the world uses it. [Ld]_

.. figure:: IMG_0134.JPG
	:align: center

This image depicts some of the many encoding styles out there. You can see how things could easily become derailed if there's a misstep in the choosing of encoding styles.

How Encoding Works
------------------
Encoding is fairly simple to do. In Javascript, there is a function called encodeURI, which takes a string and encodes it into a URL. URI is short for Uniform Resource Identifier, which is a string of characters used to identify a resource. A URL is a very common type of URI, which are well known as web addresses. [Uri]_

.. code-block:: plain

	function encodeURL(str)
	{
		var url = "my url.asp?type=enríco&mates=salami";
		var result = encodeURI(url);
	}

The result of this function should be something along the line of my%20url.asp?type=enr%C3%A5co&mates=salami, or something like that.

Different Types of Problems That Occur
------------------------------------

Garbage Characters
~~~~~~~~~~~~~~~~~~
	*Characters that look like gibberish, such as question marks or even Latin letters
	*Caused when decoding unknown encryption or when pretty much anything that doesn't match up to the encoding you're using [Gc]_

Using Foreign Characters
~~~~~~~~~~~~~~~~~~~~~~~~
	*ASCII has binary values between 0 and 127 for all characters in English language [Hb]_
	*Any attempt at putting foreign letters in the encoding would result in some kind of error

Cross-Site Scripting
~~~~~~~~~~~~~~~~~~~~
	*Very common computer security vulnerability that is usually found in web applications (84% of all web security vulnerabilities as of 2007)
	*Injects client-side scripts into web pages viewed by other users [Css]_

Sources
-------
.. [Ld] Andrew Goldstone "`Literary Data: Some Approaches` <http://www.rci.rutgers.edu/~ag978/litdata/encoding/>_." Encoding problems: spotter's guide. Rutgers, n.d. Web. 21 Feb. 2017.>_

.. [Gc] "`UTF-8 garbage Characters` <https://bytes.com/topic/html-css/answers/153766-utf-8-garbage-characters>_." Bytes RSS. Bytes.com, n.d. Web. 21 Feb. 2017.

.. [Hb] Marshall Brain "`How Bits and Bytes Work` <http://computer.howstuffworks.com/bytes2.htm>_." HowStuffWorks. HowStuffWorks.com, 01 Apr. 2000. Web. 21 Feb. 2017.

.. [Css] "`Cross-site scripting` <https://en.wikipedia.org/wiki/Cross-site_scripting>_." Wikipedia. Wikimedia Foundation, 16 Feb. 2017. Web. 23 Feb. 2017.

.. [Uri] "`Uniform Resource Identifier` <https://en.wikipedia.org/wiki/Uniform_Resource_Identifier>_." Wikipedia. Wikimedia Foundation, 23 Feb. 2017. Web. 27 Feb. 2017.