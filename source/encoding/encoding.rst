Encoding
========

*Written by Cole, Edited by Cody and Ashtyne.*

Introduction
------------

Encoding is used for the process of putting a sequence of characters (letters, numbers, punctuation, etc.) into a specialized format for efficient transmission or storage. However, encoding can be a little difficult to use at times. Have you ever opened up a file on your computer or seen a text message on your phone that has question marks pop up instead of what you're assumng should be a comma or an emoticon? It is most likely because that that rogram cannot read the type of encoding that the characters are in. Most files containing text are encoded with UTF-8, but that doesn't mean every web developer in the world uses it. [Ld]_

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

Other Types of Encoding
-----------------------
Like it was said in the introduction, there are plenty of encoding scemes out there to choose from. The most common is UTF-8, but I'm sure everyone has their preferences on how to encode. Here's some other types to warp your mind around.

Base64
~~~~~~
This is another kind of binary-to-text schem of encoding that represents the binary data in ASCII string form using radix-64, which is a mathematical term for representing numbers from a 64-digit list. [B64]_

SQL Encoding
~~~~~~~~~~~~
In SQL Server, it uses Windows PowerShell as it's scripting language. It doesn't recognize some characters, such as ':', so youw would have to encode it with a % sign followed by its hexadecimal value [Sql]_. He's a code example:

.. code-block:: sql

	SET-LOCATION Table%3APizza

This basically is saying "Table:Pizza."

He's another code example of a simpler way of doing this so you don't need to remember the hex value:

.. code-block:: sql

	SET-LOCATION (ENCODE-SQLNAME "Table:Pizza")

This way, it's stright up what you want to encode instead of through hex numbers, which nobody likes to memorize anyway.

Those were the ways on how to encode simple strings containging table names. Here's an example on how to encode an actual URL in SQL:

.. code-block:: sql

	SET-LOCATION (ENCODE-SQLNAME "my.url.org/urlexample")

Easy as that.

JSON Encoding
~~~~~~~~~~~~~
This is a bit of a different form of encoding. Instead of encoding to keep the data unreadable to the human eye, JSON encoding makes the data readable for us. Without JSON encoding, the data we would get from the database would look like {name="johnathan", businessID=10}, and, even thought that actually is readable to the human eye, it wouldn't make any sense for most people. That's why we use JSON encoding to make it more readable, like "Name: Joahnathan, Business ID: 10." Here's an example in JavaScript using an HTML page:

.. code-block:: plain

	var url = "myurl";
	$.getJSON(url, null, get_data);

	function get_data(json)
	{
		for (int i = 0; i < json.length; i++)
		{
			$("#tablewithdata").append("<tr><td>"+json[i].name
				+"<td>"+json[i].businessID+"</td></tr>");
		}
	}

This should give you the values from the table in JSON form, which is very understandable for anyone to read.

Different Types of Problems That Occur
------------------------------------

Garbage Characters
~~~~~~~~~~~~~~~~~~
These are characters that look like gibberish, such as question marks or, in some cases, even Latin letters. For example, you might find a web page every now and then that look even stranger than usual, like with percentage signs encapsulating seemingly random letters and numbers. This is usually caused by decoding unknown encryption, meaning the program is not set to recognize the encoded characters and will throw in garbage characters for every letter that comes accross as unrecognizable. [Gc]_

Using Foreign Characters
~~~~~~~~~~~~~~~~~~~~~~~~
As many of us know, ACSII is basically using numbers from 0 to 127 to encode all letters of the English language. Notice how I said "English", so foreign characters have no place in ASCII. If I were to put in a foreign letter, like 'é', and the encoding scheme isn't set to recognize the letter, then it will return garbage characters in place of the letter. [Hb]_

Cross-Site Scripting
~~~~~~~~~~~~~~~~~~~~
Cross-site scripting (XSS for short) is a very common vulnerability that is more often than not found in web applications. They accounted for about 84% of al web security vulnerabilites as of 2007. What they do is they inject client-side scripts into web pages viewed by other users to try and bypass access controls like the same-origin policy, which allows scripts from one page to access data from another if both pages have the same origin. [Css]_

An example would go like this: say Jeremy likes to visit a particular web site that is hosted by Bill. Another person who frequents the site, Allison, sees that in the Search box for the site, there is an XSS vulnerability. She exploits that vulnerability by tinkering with it to steal the Authorization from any user who clicks on the link that she spreads through an email to users of the site. Jeremy likes what he sees in the link and clicks it. The links goes through the Searc box on Bill's website and looks like any other search entered, except, for a split second, the screen shows the malicious program Allison has that steals Jeremy's Authorization cookie for the site. Jeremy is dissapointed by the failure of the search and forgets about it, while Allison now has free control of Jeremy's account on Bill's web site.

Sources
-------
.. [Ld] Andrew Goldstone "`Literary Data: Some Approaches <http://www.rci.rutgers.edu/~ag978/litdata/encoding/>`_." Encoding problems: spotter's guide. Rutgers, n.d. Web. 21 Feb. 2017.>_

.. [Gc] "`UTF-8 garbage Characters <https://bytes.com/topic/html-css/answers/153766-utf-8-garbage-characters>`_." Bytes RSS. Bytes.com, n.d. Web. 21 Feb. 2017.

.. [Hb] Marshall Brain "`How Bits and Bytes Work <http://computer.howstuffworks.com/bytes2.htm>`_." HowStuffWorks. HowStuffWorks.com, 01 Apr. 2000. Web. 21 Feb. 2017.

.. [Css] "`Cross-site scripting <https://en.wikipedia.org/wiki/Cross-site_scripting>`_." Wikipedia. Wikimedia Foundation, 16 Feb. 2017. Web. 23 Feb. 2017.

.. [Uri] "`Uniform Resource Identifier <https://en.wikipedia.org/wiki/Uniform_Resource_Identifier>`_." Wikipedia. Wikimedia Foundation, 23 Feb. 2017. Web. 27 Feb. 2017.

.. [B64] "`Base64 <https://en.wikipedia.org/wiki/Base64>`_." Wikipedia. Wikimedia Foundation, 17 Feb. 2017. Web. 27 Feb. 2017.

.. [Sql] "`Encode and Decode SQL Server Identifiers <https://msdn.microsoft.com/en-us/library/hh231369.aspx>`_." Encode and Decode SQL Server Identifiers. Microsoft, n.d. Web. 27 Feb. 2017.