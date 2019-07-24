var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    
      res.json(response);
  })

  
  app.post("/api/friends", function(req, res) {

    var friendsArray = req.body;
    
    console.log(friendsArray);
  
    friends.push(friendsArray);
    
    res.json(friendsArray);
  });
};