const { param } = require("express-validator");

const IDvalidator = param("id").isMongoId().withMessage("invalid object id");
module.exports = {
  IDvalidator,
};
