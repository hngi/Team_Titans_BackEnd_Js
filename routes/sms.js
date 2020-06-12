const express = require("express");
const {
	getAccountBalance,
	getAllSms,
	sendSms,
	smsHistory,
	sendMultiple,
} = require("../controllers/SmsController");

const smsRouter = express.Router();

smsRouter.get("/balance", getAccountBalance);
smsRouter.get("/all", getAllSms);
smsRouter.post("/send", sendSms);

// handle a GET request to retrieve sms history from twillio. 
smsRouter.get("/sms_history/", smsHistory);

smsRouter.post("/send_multiple", sendMultiple);

module.exports = smsRouter;
