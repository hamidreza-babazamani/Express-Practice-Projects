const Schema = require("validator");
const registerSchema = new Schema({
  username: {
    type: String,
    required: true,
    length: { min: 5, max: 20 },
  },
  email: {
    type: String,
    required: true,
    match: /[a-z0-9\_\.]{5,50}@[a-z]{2-10.[a-z]{2,10}/gi,
  },
  role: {
    type: String,
    enum: ["user", "admin", "teacher"],
  },
});
module.exports = {
  registerSchema,
};
