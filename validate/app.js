const express = require("express");
const { NotFoundError, ErrorHandLer } = require("./util/errorHandler");
const { registerSchema } = require("./validator/auth.validator");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", async (req, res, next) => {
  try {
    res.send(req.body);
  } catch (error) {
    next(error);
  }
});
app.post("/register", async (req, res, next) => {
  try {
    const result = registerSchema.validate(req.body);
    res.send(error ?? req.body);
  } catch (error) {
    next(error);
  }
});

app.use(NotFoundError);
app.use(ErrorHandLer);
app.listen(3000, () => {
  console.log("server run on port 3000");
});
