/**
 * Created by Nathan Hawkins on 4/17/2017.
 */
// 5 letter isogram in Node.js
// When running (done by locating in command prompt and using "node BullsAndCows.js"),
// go to localhost:8080/?data=*your_data_here*

var secretWord = "slant";
var secretWordLength = 5;

// Include http module,
var http = require("http"),
// And url module, which is very helpful in parsing request parameters.
    url = require("url");

// Create the server.
http.createServer(function (request, response) {

    request.on('readable', function () {
        request.read(); // throw away the data
    });

    // Attach listener on end event.
    request.on('end', function () {
        // Parse the request for arguments and store them in userData variable.
        // This function parses the url from request and returns object representation.
        var userData = url.parse(request.url, true);
        var data = userData.query.data;

        // Write headers to the response.
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        // Here goes the logic for the BullsAndCows game
        // If the user is correct, show the solution. Otherwise, show number of
        // bulls and cows
        var isUserCorrect = checkSolution(data);

        if (isUserCorrect) {
            // CORRECT, show answer
            // Send data and end response.
            response.end('Congratulations! ' + secretWord + ' is the secret word!');
        }
        else {
            // INCORRECT, show number of bulls and cows
            var numBulls = checkBulls(data);
            var numCows = checkCows(data);

            if (numCows >= 0)
            	response.end('Number of Bulls: ' + numBulls + 
            		'\nNumber of Cows: ' + numCows);
            else if (numCows == -1)
            	response.end('Make sure your isogram is ' + secretWordLength + 
            		' characters in length');
            else if (numCows == -2)
            	response.end('Please enter a ' + secretWordLength + '-letter isogram');
        }

        // Send data and end response.
        // response.end('Here is your data: ' + userData['data']);
    });
// Listen on the 8080 port.
}).listen(8080);

// Returns whether or not the user has entered the correct solution
function checkSolution(data) {
    // userData must be 5 characters long
    // For some reason, you have to ask if there is data in here. Don't ask me
    // why it works. It just does. I've spent like 5 hours on this stupid thing
    // and this is what I've got. FOR THE LOVE OF OUR NEWLY-RISEN GOD, 
    // ------------------------DO NOT CHANGE THIS----------------------------
    if (data) {
    	// console.log('There is data');
    	if (data.length != secretWordLength) return false;
    	else if (!(data === secretWord)) return false;
    }
    return true;
}

// Returns the number of letters in the correct location
function checkBulls(data) {
    if (data.length != secretWordLength) return -1;

    var numBulls = 0;

    for (var i = 0; i < secretWordLength; i++) {
        if (data[i] == secretWord[i]) numBulls++;
    }

    return numBulls;
}

// Returns the number of letters in the word, but out of position
function checkCows(data) {
    if (data.length != secretWordLength) return -1;

    var numCows = 0;
    var lettersUsed = ['0', '0', '0', '0', '0'];

    for (var i = 0; i < secretWordLength; i++) {
        var char = data[i];
        if (secretWord.includes(char) && !(char === secretWord[i]) &&
        	!(lettersUsed.includes(char))) numCows++;

        if (lettersUsed.includes(char)) return -2;
        lettersUsed[i] = char;
    }

    return numCows;
}