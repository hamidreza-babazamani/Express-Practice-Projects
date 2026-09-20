const { query } = require("express-validator");

const searchValidator = () => [
  query("title")
    .isEmpty()
    .isString()
    .matches(/[A-Z0-9]*/gim),
  query("sort").matches(/ACS|DESC/).withMessage,
];
