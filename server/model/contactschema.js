const mongoose = require("mongoose");
const validator = require("Validator");

//create schema

const Contactschema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: function () {
        validator.validate(this.email);
      },
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//modelcreat
const Contact = new mongoose.model("contactdata", Contactschema);

module.exports = Contact;
