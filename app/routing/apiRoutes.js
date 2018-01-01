// npm path 
var path = require("path");

// friends file needed to find friend match in below computation
var friends = require("../data/friends");

// make function(app) accessible from other places in the program
module.exports = function (app) {

    // when user clicks on apifriends link they will get all the friends data from friends file
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // takes in request with survey input and responds with best friend match
    app.post("/api/friends", function (req, res) {

        // we start by changing our scores from our newFriends object to an array to compare it with the score arrays in friends 
        workingScores = [];
        var workingScores = req.body.scores.split(",");

        // we will loop through each friend (x) and then each friends scores (i) comparing to the current users scores
        // the total difference between scores will be stored in our bestMatch array
        var bestMatch = [];
        for (x = 0; x < friends.length; x++) {

            // test to see if friends[x].scores is an array, if not than convert to array
            if (!Array.isArray(friends[x].scores)) {
                friends[x].scores = friends[x].scores.split(",");
            }
            console.log(friends[x].scores)
            var total = 0;
            for (i = 0; i < 10; i++) {
                console.log(total);
                total = total + Math.abs(parseInt(workingScores[i]) - parseInt(friends[x].scores[i]));
            }
            console.log("------------------------------------------------------------");
            console.log(total);
            bestMatch.push(total);
        };
        console.log(bestMatch);

        // now that we have all our comparisons for each friend stored in the bestMatch array we will determine which friend is the most compatable by which total score difference is the smallest
        var bestScore = Math.min(...bestMatch);
        console.log(bestScore);

        // the index of the smallest number is also the index of the friend who is the best match
        var pickMe = bestMatch.indexOf(bestScore);
        console.log(pickMe);

        // we assign the best match to our bestFriend variable to be returned as the response 
        var bestFriend = friends[pickMe];
        res.json(bestFriend);
        console.log(bestFriend);

        // we add the current user data to our friends array 
        friends.push(req.body);
    });
    bestFriend = "";
};