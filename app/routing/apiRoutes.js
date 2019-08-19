var friends = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function (req, res) {
    var friendArray = req.body
    var scoresArray = req.body.scores;
    var compatibilityScore = 41;
    var bestMatch = friends[0];
    
    
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      var difference = 0;
      console.log(currentFriend);
      
      for (var j = 0; j < scoresArray.length; j++) {
        var friendScore = scoresArray[j];
        difference += Math.abs(friends[i].scores[j] - scoresArray[j]);
        console.log("FriendScore" + friendScore);
        console.log(difference);
      
      }

      if (difference <= compatibilityScore){
        bestMatch = friends[i];
        compatibilityScore = difference;
        ///update the compatibility Score
      }

      // whoever has the smaller number based on our input (we are computer)
      // save the 1st friendArray value and then go to the next friend if the next frient
      // is smaller than or put new value in VAR and so on until looped through all friends
      };

    res.json(bestMatch);
    friends.push(req.body);
  });
};