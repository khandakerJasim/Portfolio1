const mongoose = require("mongoose");
const validator = require("Validator");

//creare sschema

const Userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: function () {
        return validator.validate(this.email);
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
    status: {
      type: String,
      enum: ["active", "Inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

//create model

const Users = new mongoose.model("contact1", Userschema);

module.exports = Users;
