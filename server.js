var express = require("express"),
  app = express(),
  bodyParser = require("body-parser");
// set up a static file directory to use for default routing
// also see the note below about Windows
app.use(express.static(__dirname));
app.use(bodyParser());
// Create our Express-powered HTTP server
var winCount = 0, loseCount = 0;
app.listen(3000, function () {
  "use strict";
  console.log("Example app listening on port 3000!");
});
// set up our routes
app.post("/flip", function (req, res) {
  "use strict";
  console.log("Flipping the coin");

  //read json convert heads to 1 tails to
  // if(req.body)

  var coin;
  var randomnumber = Math.floor(Math.random()*2);
  if(randomnumber === 0){
    coin = "tails";
  } else {
    coin = "heads";
  }

  if( coin === req.body.call){
    winCount += 1;
    console.log("You Won");
    res.send(JSON.stringify({ "result": "win"}));
  }
  else{
    loseCount += 1;
    res.send(JSON.stringify({ "result": "lose"}));
    console.log("You Lost");
  }

});
app.get("/stats", function (req, res) {
  "use strict";
  res.send(JSON.stringify({ "wins": winCount, "losses": loseCount}));
});
