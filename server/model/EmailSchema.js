const mongoose = require("mongoose");

//create schema

const userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

//create model

const Emailvalid = new mongoose.model("Email", userSchema);

module.exports = Emailvalid;
