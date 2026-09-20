const express = require("express");
const { NotFoundError, ErrorHandLer } = require("./util/errorHandler");
//const { validate } = require("express-validation");
const {
  loginValidation,
  registerValidation,
  loginValidationSchema,
  registerValidationSchema,
} = require("./validator/auth.validator");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", async (req, res, next) => {
  try {
    await loginValidationSchema.validateAsync(req.body);
    res.send(req.body);
  } catch (error) {
    next(error);
  }
});
app.post("/register", async (req, res, next) => {
  try {
    await registerValidationSchema.validateAsync(req.body);
    res.send(req.body);
  } catch (error) {
    next(error);
  }
});

app.use(NotFoundError);
app.use(ErrorHandLer);
app.listen(3000, () => {
  console.log("server run on port 3000");
});
