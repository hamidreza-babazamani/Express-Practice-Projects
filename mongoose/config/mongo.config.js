const { default: mongoose } = require("mongoose");

const DB_URL = "mongodb://localhost:27017/mongoose_tutorial";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("server connect to mongodb");
  })
  .catch((err) => {
    console.log(err.message);
  });
