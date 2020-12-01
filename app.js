const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Where we will keep users
var users = { altafshaikh: [], altaf: [] };

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/:username", (req, res) => {
  res.send("Hello World, from express");
});

app.post("/user", (req, res) => {
  const user = req.body;

  // Output the user to the console for debugging
  console.log(user);
  const username = user["userName"];
  users[username] = [user];
  res.send("User is added to the database");
});

app.get("/:username/users", (req, res) => {
  let username = req.params.username;
  res.json(users[username]);
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
