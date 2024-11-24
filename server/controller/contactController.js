import { catchAsyncError } from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/errorHandler.js";
import { Contact } from "../models/contactModel.js";

export const createContact = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  if ((!firstName, !lastName, !email, !phoneNumber, !message)) {
    return next(new ErrorHandler("Please add all fields", 400));
  }

  await Contact.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
  });

  res.status(201).json({
    success: true,
    message: "Contact detail has been saved.",
  });
});

export const getAllContacts = catchAsyncError(async (req, res, next) => {
  const contacts = await Contact.find();

  res.status(200).json({
    success: true,
    contacts,
  });
});
