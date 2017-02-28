=======
Hashing
=======
Encoding
--------
There is often a need to send sensitive information from one comuter to 
another over a network. The problem with sending information over a network
is that someone could be watching the information being sent. Because of this,
information cannot be sent in what is called 'plain text' or without being 
encoded. 

The basic priciple of encoding involves taking some bit of information and 
changing certain pieces of it. For example I might take the message 'Hello',
and change it to '43110'. In this case, the encoded message is determined by
the number that each letter is closest to in shape. In other cases encryption
can be based on cyphers, where the key to decripting it is something sepreatly 
held, like a certain page in a book that both people might have. This is the 
basic idea of encryption, that something sent over by one person can be 
decyphered by the reciver. This is not always the best for security, and an 
alternitive method was developed where once something was encoded, it didn't
have to be decoded. This is the main difference between encryption and hashing.

Hashing
-------
One of the more successful developments in the world of computer security was 
the implementation of hashing to encode sensitive material. The main idea of 
hashing is that a person can convert a value of any size and convert it into 
a, seemingly, arbitrary value of a uniform size in an irriversable process. 
The advantage of this is most obvious in passwords. To 
validate the accuracy of a password, a system must compare the password 
submitted to the correct answer. However, if for example, a person wanted to 
sign on to a website like YouTube in this way, they would have to send their 
password over the internet for YouTube to verify. 

This form of password validation leaves a person incredibly susceptible to 
many forms of security attacks, such as a 'Man in the Middle' attack, 
where a person merely needs to listen to the line of communication to learn 
the victim's password. A solution to this problem is for a password to be 
encrypted with a hashing function. This hash is used to form a response to 
a random number, which is a challenge that the server sends to the user. The 
answer sent back to the server is compared to the expected answer that the 
server formed with its copy of the users hash which the server keeps. If the 
answers are the same, then the server knows that the user is using the correct 
password associated with the username.
 .. image:: challenge_response.png 
To put the password problem more simply: 
----------------------------------------

    A plain text password is not secure --> The password is turned into an unpredictable code
   
    The server must know the unpredictable code but not the necessarily the password --> The server holds the code
   
    The code must be validated by the server --> Proof of the proper code must be submitted to validate a user
   
    The code cannot be sent to a server to validate --> The server sends a random question to the user
   
    The question is always random and different --> The proper response to the question cannot be reused
   
    The response is formulated using both the question and the code --> The people who hold both know what the answer should be
   
    The answer is sent to the server from the user --> The server recognizes the correct answer and grants access  

Passing the Hash
----------------
Systems like these, which rely on credentials to be exchanged, can be exploited
in a few ways without ever decoding the hashes. The most common hash attack is 
called 'Passing the Hash', or PtH. This attack relies on an amount of access to 
a system to work, usually in the form of a system administrator. Using access 
to a system and some software, a hacker can get all of the hashes on a local 
computer, as well as the usernames associated with the hashes. With this, and 
additional software, a hacker can impersonate an administrator who is higher 
in the system and cause problems or get access to important things on the system.

These attacks are some of the most common. In 2016, Yahoo and up to a few 
hundred million accounts were the victims of an attack which compromised 
passwords and personal information [BBC]_. According to an article by the 
BBC covering the incident, this attack was likely done with a PtH.

Defending Against Hash Attacks
------------------------------
The presence of these bypasses to hash security might always be present.
For example Microsoft, who had software which was especially vulnerable to 
these attacks, changed their system, for Windows 10 to better defend against 
them [Mic]_. However the methods that Microsoft developed were beaten within 
a year by cleaver programming [Rem]_.)

Sources
-------
.. [BBC] Mark Ward. "`Yahoo: How do state hackers break in? <http://www.bbc.com/news/technology-38331894>`_" BBC News. BBC, 15 Dec. 2016. Web. 21 Feb. 2017.

*Written by Paul, Edited by Cole and Tyler.*
