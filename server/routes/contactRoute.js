import express from "express"
import { createContact, getAllContacts } from "../controller/contactController.js"

const router = express.Router()

router.route("/createContact").post(createContact)
router.route("/getAllContacts").get(getAllContacts)

export default router;