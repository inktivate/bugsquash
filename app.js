const path = require("path");
const express = require('express');
const app = express();

let scores = [{
  name: "God",
  score: 100
}];

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/scores", (req, res) => {
  res.send("<a href='/'>Back to home</a><br><br>" + JSON.stringify(scores));
});

app.post("/scores", (req, res) => {
  scores.push(req.body);
  scores.sort((a,b) => (b.score - a.score));
  // scores = scores.slice(0,3);
  res.status(201);
  res.end();
});

app.listen(3000);