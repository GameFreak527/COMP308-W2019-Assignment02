let mongoose = require("mongoose");

// create a model class
let contactSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    occupation: String,
    relationship: String
  },
  {
    collection: "contact"
  }
);

module.exports = mongoose.model("contact", contactSchema);
