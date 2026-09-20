const { Joi } = require("express-validation");
const { body } = require("express-validator");

const loginValidation = {
  body: Joi.object({
    email: Joi.string().email().message("email not valid").required(),
    password: Joi.string()
      .min(6)
      .max(20)
      .required()
      .regex(/[a-zA-Z0-9]{6,20}/),
  }),
};
const registerValidation = {
  body: Joi.object({
    email: Joi.string().email().required(),
    username: Joi.string()
      .alphanum()
      .min(4)
      .max(30)
      .required()
      .regex(/[a-zA-Z0-9]{6,20}/),
    password: Joi.string()
      .min(6)
      .max(20)
      .required()
      .regex(/[a-zA-Z0-9]{6,20}/),
    confirmPassword: Joi.ref("password"),
    age: Joi.number().integer().min(15).max(70).required(),
  }),
};
module.exports = {
  loginValidation,
  registerValidation,
};
