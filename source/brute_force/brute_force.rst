Brute-Force Attacks
===================

  A brute force attack (aka brute force cracking) is when someone runs a program that tries to login to an account by running a loop that tries a 
  long series of passwords.  Someone could make a program that simply goes through a list of the most popular passwords used online 
  until it reaches the end of the list, or it could run through every possible password someone could use, starting with something like "000000" and
  ending with "zzzzzzzzzzzzzzzz" for something that requires passwords to be at least six characters long and at most sixteen characters long,
  using only letters and numbers.  This second way is the more traditional meaning of "brute force attack", as it simply tries everything rather than
  employing any amount of sophistication.

=======================================
The Threat: Your Accounts Are In Danger
=======================================

	* With the help of brute force attacks and a lack of protections against them, anyone can access your accounts online.
	* Even for a computer with minimal power, it takes only about twenty minutes to crack most 
	  passwords. (http://searchsecurity.techtarget.com/definition/brute-force-cracking)
	* The threat of brute forcing means that both the user and the creator of the website need to take action to protect against these attacks.
	* These attacks mean that someone can gain illegitimate administrative privileges to websites and use that power to upload harmful code where
	  it will be spread to the users. (https://blog.sucuri.net/2013/04/brute-force-attacks-and-their-consequences.html)

=================================================================
The Protection: How You, the Account Holder, Can Protect Yourself
=================================================================

	* Don't just use normal words as your password; many brute force algorithms just input words from the dictionary as the password.
	* Use a longer password; a true brute force attack will run through every single possible combination. It will take a lot longer to
	  match the combination you used if your password is sixteen characters long instead of six due to there being exponentially more combinations.

=======================================================
The Hope: What You Hope Is In Place to Help Protect You
=======================================================

	* If the creator of the website is thinking about brute force attacks when they made the login system, there are a few measures they
	  would have in place to protect their users' accounts.
	* For example, they might have a limit in place for the number of times someone can try to login to a particular account before it locks them
	  out for a period of time.  (https://www.techopedia.com/definition/18091/brute-force-attack)
	* A five-try limit on an account before it locks out whoever is trying to login for five minutes is going to slow down
	  a brute force attack immensely while holding off even the most forgetful user for a minimal amount of time.
	* It is also common to require users to have complex passwords as Techopedia points out. Involving a variety of 
	  character types (capital letters, lowercase letters, numbers, and a special character like a $) is a fairly common requirement.::

	  	/**
		 * Created by yerfd on 2/18/2017.
		 */

		function pinBreaker() {
		    var pin = "0000";
		    var userName = "TylerGodfrey";
		    var correctGuess = false;
		    var programFailure = false;

		    while (correctGuess == false && programFailure == false) {
		        $('#userNameField').val(userName);
		        $('#pinField').val(pin);
		        $('#submitButton').trigger("click");  // http://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
		        console.log(pin);
		        if (pin === "4754" && userName === "TylerGodfrey") { // simulates a successful username-password combination being entered
		            correctGuess = true;
		            console.log("You have successfully gained access to the account.");
		        }
		        else {
		            if (pin.charAt(3) == '9') {
		                if (pin.charAt(2) == '9') {
		                    if (pin.charAt(1) == '9') {
		                        if (pin.charAt(0) == '9') {
		                            console.log("All combinations failed");
		                            programFailure = true;
		                        }
		                        else {
		                            // sets first character to one greater than it currently is and then changes the following three characters to 0.
		                            pin = String.fromCharCode(pin.charCodeAt(0) + 1) + "000"; //http://stackoverflow.com/questions/12504042/what-is-a-method-that-can-be-used-to-increment-letters
		                        }
		                    }
		                    else {
		                        // sets first character to current value, increases the second character's value, and sets the following two characters to 0.
		                        pin = pin.charAt(0) + String.fromCharCode(pin.charCodeAt(1) + 1) + "00";
		                    }
		                }
		                else {
		                    // sets first two characters to their current values, increases the third character's value, and sets the last character to 0.
		                    pin = pin.charAt(0) + pin.charAt(1) + String.fromCharCode(pin.charCodeAt(2) + 1) + "0";
		                }
		            }
		            else { // sets the first three characters to their current values, then increases the last character's value.
		                pin = pin.charAt(0) + pin.charAt(1) + pin.charAt(2) + String.fromCharCode(pin.charCodeAt(3) + 1);
		            }
		        }
		    }
		}

		var start = $('#startButton');
		start.on("click", pinBreaker);



======================================================
The Method: A Rudimentary Way to Brute Force Passwords
======================================================

 	* The simplest (but longest) way to brute force a password is by testing every possible combination allowed by the service you're trying to
 	  gain access to.
 	* To do this, you would want to start with a simple string of the minimum required length, test that string, then change one character in
 	  that string until you've tested every possible combination of that length.  After that, add another character to the string and then try
 	  every combination of that length.  
 	* The upside to this is that it can crack any password, given enough attempts.  The downside is that it will take far more attempts than the
 	  more sophisticated methods that try real word combinations and passwords that someone would expect given knowledge of the person.  Either
 	  method is likely to set off any security that is triggered by an inordinate number of login attempts, however.  Good security measures 
 	  will block traditional brute force techniques.
 	* Below is a rough example of how a brute forcing program would work for 4 digit PIN codes.

*Written by Tyler G, Edited by Lana and Nathan.*

