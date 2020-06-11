const express = require("express");
const {
	getAccountBalance,
	getAllSms,
	sendSms,
} = require("../controllers/SmsController");

const smsRouter = express.Router();

smsRouter.get("/balance", getAccountBalance);
smsRouter.get("/all", getAllSms);
smsRouter.post("/send", sendSms);

module.exports = smsRouter;
