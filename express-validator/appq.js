const express = require("express");
const { NotFoundError, ErrorHandLer } = require("./util/errorHandler");
const { validationResult } = require("express-validator");
const {
  loginValidator,
  registerValidator,
} = require("./validator/auth.validator");
const { checkValidation } = require("./middlewares/validator");
const { IDvalidator } = require("./validator/blog.validator");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/login", loginValidator(), checkValidation, (req, res) => {
  res.send(req.body);
});
app.post("/register", registerValidator(), checkValidation, (req, res) => {
  res.send(req.body);
});
app.post("/blogs/:id", IDvalidator, checkValidation, (req, res) => {
  res.send(req.params);
});
app.use(NotFoundError);
app.use(ErrorHandLer);
app.listen(3000, () => {
  console.log("server run on port 3000");
});
