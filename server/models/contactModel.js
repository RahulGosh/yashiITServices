import mongoose from "mongoose";
import validator from "validator";

const contactSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    validate: {
      validator: function (v) {
        return validator.isEmail(v); // Use validator's email validation
      },
      message: "Please enter a valid email",
    },
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function (v) {
        // Regex to validate phone numbers (international format)
        return /^\+?[1-9]\d{1,14}$/.test(v);
      },
      message: "Please enter a valid phone number",
    },
    required: [true, "Phone number is required"],
  },
  message: {
    type: String,
    required: [true, "Please enter your message"], // Corrected the error message
  },
});

export const Contact = mongoose.model("Contact", contactSchema);
