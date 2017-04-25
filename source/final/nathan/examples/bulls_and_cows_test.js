// 5 letter isogram in Node.js
var secretWord = "slant";

// Include modules
var http = require("http"),
	url  = require("url");

// Create server 
http.createServer(function (request, response) {
    request.on('readable', function () {
        request.read();
    });

    // End event
    request.on('end', function () {
    	// Store arguments in userData variable
        var userData = url.parse(request.url, true);
        var data = userData.query.data;

        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        // Game logic
        // If the user is correct, show the solution. Otherwise, show number of
        // bulls and cows
        var isUserCorrect = checkSolution(data);

        if (isUserCorrect) {
            // CORRECT, show answer
            response.end('Congratulations! ' + secretWord + ' is the secret word!');
        }
        else {
            // INCORRECT, show number of bulls and cows
            var numBulls = checkBulls(data);
            var numCows = checkCows(data);

            // numCows will be negative only if the user entered an incorrect
            // word
            if (numCows >= 0)
            	response.end('Number of Bulls: ' + numBulls + 
            		'\nNumber of Cows: ' + numCows);
            else if (numCows == -1)
            	response.end('Make sure your isogram is ' + secretWord.length + 
            		' characters in length');
            else if (numCows == -2)
            	response.end('Please enter a ' + secretWord.length + '-letter isogram');
        }
    });
}).listen(8080);

// Returns whether or not the user has entered the correct solution
function checkSolution(data) {
    // userData must be 5 characters long
    if (data) {
    	if (data.length != secretWord.length) return false;
    	else if (!(data === secretWord)) return false;
    }

    return true;
}

// Returns the number of letters in the correct location
function checkBulls(data) {
	// Incorrect word length
    if (data.length != secretWord.length) return -1;

    // Correct word length. Count the number of correctly-placed letters
    var numBulls = 0;

    for (var i = 0; i < secretWord.length; i++) {
        if (data[i] == secretWord[i]) numBulls++;
    }

    return numBulls;
}

// Returns the number of incorrectly placed letters in the word
function checkCows(data) {
	// Incorrect word length
    if (data.length != secretWord.length) return -1;

    // Correct word length. Count the number of incorrectly-placed letters
    var numCows = 0;
    var lettersUsed = ['0', '0', '0', '0', '0'];

    for (var i = 0; i < secretWord.length; i++) {
        var char = data[i];
        // Check to see if the letter has been used before
        if (secretWord.includes(char) && !(char === secretWord[i]) &&
        	!(lettersUsed.includes(char))) numCows++;

        // Letter has been used already - not an isogram
        if (lettersUsed.includes(char)) return -2;
        lettersUsed[i] = char;
    }

    return numCows;
}