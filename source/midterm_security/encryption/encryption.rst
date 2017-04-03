Encryption
==========
Introduction
------------
We give away important information/data alamost every day to the web. Therefore, it is important to who ever we are giving the information to to protect by encrypting the data. Encryption is when you convert plain text into cyphertext  so that the plain text can only be understood by the authorized person. The translation of data into a secret code. To read an encrypted file, you must have access to a secret key or password that enables you to decrypt it.

History of Encryption
---------------------
* The word encryption comes from the Greek word kryptos, meaning hidden or secret. People have been ecrypting text as early since the beginning of communication. 
* Egyptians scribe used non-standard hieroglyphs to hide the meaning of an inscription.
* In 700 BC, the Spartans wrote sensitive messages on strips of leather wrapped around sticks.
* Until this point, all encryption schemes used `Symmetric key`. In 1976, B. Whitfield Diffie and Martin Hellman helped to  solve one of the fundamental problems of cryptography, how to send the key  to decypher the text without exposing the data/information. 
* Then the RSA  implemented  the public-key cryptography using `Asymmetric algorithms`, or  public-key.

.. image:: publicKey.png
    :align: center
Different Kinds of Encryption
-----------------------------
* Block Cipher: A block cipher is a method of encrypting text in which an algorithm is applied to a block of data at once as a group.
* Symmetric Key/ Secret key
	* DES(Data Encryption Standard): A symmetric-key block cipher published by the National Institute of Standards and Technology (NIST).
	* AES(Advanced Encryption Standard): A symmetric-key block cipher developed by two Belgian cryptopgrapher  Joan Daemen and Vincent Rijmen.
* Asymmetric Key
    * Diffie-Hellman: A method of securely exchanging cryptographic keys over a public channel. One of the first public-key protocols as originally conceptualized by Ralph Merkle and named after Whitfield Diffie and Martin Hellman
    * Triple DES: Uses three individual keys with 56 bits each. The total key length is 168 bits, but experts would argue that 112-bits in key strength is more like it.
    * RSA: Is considered an asymmetric algorithm due to its use of a pair of keys.
How We Use Encryption Today
---------------------------
Before there was assymetrical key, the officials were the only ones in need and using encryption. There was no need for someone else toe encrypt something because they were not sending information accross a network.  Now, everywhere you have sensitive information needs to be encrypted, not only on your phone and laptop computer but in the ATM, websites, and servers.

Java code AES encryption example:
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

This is an example of how to implement AES encryption using java
``aes_encryption_java_example.java``:

.. literalinclude:: aes_encryption_java_example.java
    :linenos:
    :language: java

Test AES encrypt/decrypt example
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Let’s see an example of using AES encryption into java program with ``aes_encryption_decryption_java_example.java``:

.. literalinclude:: aes_encrypt_decrypt_example.java
    :linenos:
    :language: java

Encryption example
---------------------
There is a reason almost everything on your phone is encrypted now-a-days, because you have important information in your phone. Now, what could happen if someone could overpass that encryption and have access to the data and information on your phone. 
Last year in 2016, chipmaker Qualcomm's mobile processor that was used in 60% of Android had a flaw. In combination with a vulnerability with Android's media sever, together these vulnerabilities could allow someone with physical access to your phone to bypass the full disk encryption.
Cited
-----

..[image] "`https://pixabay.com/en/encrypted-binary-file-computer-key-156514/`"

.. [encryption] "`What is encryption? <http://searchsecurity.techtarget.com/definition/encryption>`_." SearchSecurity. Web. 21 Feb. 2017.

.. [networking-class] Paul Craven. "`Session Layer." <http://networking-class.readthedocs.io/en/latest/chapters/session_layer/session_layer.html>_. "Session Layer — Networking Class 2016 Fall documentation. Web. 21 Feb. 2017.

.. [webo] Beal, Vangie. "Encryption." <http://www.webopedia.com/TERM/E/encryption.html>_.` What is Encryption? Webopedia Definition. Web. 21 Feb. 2017.

.. _Symetric key: https://en.wikipedia.org/wiki/Symmetric-key_algorithm
.. _Asymmetric key: https://en.wikipedia.org/wiki/Public-key_cryptography

Written by Esteban, Edited by Morgan and Sara.
