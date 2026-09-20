const express = require("express");
const morgan = require("morgan");
const app = express();

app.listen(3000, () => {
  console.log("server run on port 3000");
});
