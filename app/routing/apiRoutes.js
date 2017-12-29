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
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body-parser middleware
        var bestMatch = [];
        for (x = 0; x < friends.length; x++) {
            var total = 0;
            for (i = 0; i < scores.length; i++) {
                total = total + Math.abs(parseInt(newFriends.scores[i]) - parseInt(friends[x].scores[i]));
            }
            bestMatch.push(total);
        }
        var bestScore = Math.min(bestMatch);

        pickMe = bestMatch.indexOf(bestScore);

        res.json(friends[pickMe]);
        console.log(res.json(friends[pickMe]));
    });
};