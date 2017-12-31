// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var path = require("path");

var friends = require("../data/friends");

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
    app.post("/api/friends", function (req, res) {
        // console.log(friends[0].scores);
        // console.log((friends[0].scores).toString());
        // req.body is available since we're using the body-parser middleware
        // console.log(req.body.scores);
        // console.log((req.body.scores).toString());
        workingScores = [];
        var workingScores = req.body.scores.split(",");
        // console.log(workingScores);
        // console.log(friends[0].scores.length);

        var bestMatch = [];
        for (x = 0; x < friends.length; x++) {

            // var tempString = (friends[x].scores).toString();
            // console.log(tempString);
            var total = 0;
            for (i = 0; i < 10; i++) {
                console.log(total);
                // console.log(x + " index " + i + " is " + parseInt(friends[x].scores[i]));
                // console.log(parseInt(workingScores[i]));
                // console.log(i + " is " + parseInt(req.body.scores[i]));
                // console.log(Math.abs(parseInt(req.body.scores[i])));
                // console.log(Math.abs(parseInt(friends[x].scores[i])));
                total = total + Math.abs(parseInt(workingScores[i]) - parseInt(friends[x].scores[i]));
            }
            console.log("------------------------------------------------------------");
            console.log(total);
            bestMatch.push(total);

        };
        console.log(bestMatch);

        var bestScore = Math.min(...bestMatch);
        console.log(bestScore);
        var pickMe = bestMatch.indexOf(bestScore);
        console.log(pickMe);
        var bestFriend = friends[pickMe];

        res.json(bestFriend);
        console.log(bestFriend);
        friends.push(req.body);
    });
};