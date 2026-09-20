const express = require("express");
const app = express();
app.get("/", (req, res) => {
  let number = "";
  let obj = { key: "" };

  console.log(number);
  console.log(obj.key);

  res.send("index address");
});
app.use((req, res, next) => {
  return res.status(404).json({
    statusCode: res.statusCode,
    erros: {
      type: "not found",
      message: "not found" + req.url + "route",
    },
  });
});
app.use((err, req, res, next) => {
  return res.json({
    statusCode: err.status || 500,
    err: {
      message: err.message || "internalServerError",
    },
  });
});
app.listen(3000, () => {
  console.log("server run on port 3000");
});
