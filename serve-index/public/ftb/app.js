const express = require("express");
const serveIndex = "serveIndex";
const path = require("path");
const app = express();
app.use("public", express.static("public"));
app.use("public", express.static("public"));

app.get("/", (req, res, next) => {
  res.send("hello fav icon");
});

app.listen(3000, () => {
  console.log("server run on port 3000");
});
