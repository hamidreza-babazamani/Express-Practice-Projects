const express = require("express");
const serveIndex = require("serve-index");
const path = require("path");
const app = express();
const ftbPath = path.join(__dirname, "public", "ftb");

app.use("/ftb", serveIndex(ftbPath, { icons: true }));
app.use("/ftb", express.static(ftbPath));

app.get("/", (req, res) => {
  res.send("hello fav icon");
});

app.listen(3000, () => {
  console.log("server run on port 3000");
});
