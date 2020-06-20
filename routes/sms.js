const express = require("express");
const {
	getAccountBalance,
	getAllSms,
	sendSms,
	smsHistory,
	sendMultiple,
} = require("../controllers/SmsController");
const smsRouter = express.Router();
const {smsSchedule} = require("../controllers/ScheduleController");


smsRouter.get("/balance", getAccountBalance);
smsRouter.get("/all", getAllSms);
smsRouter.post("/send", sendSms);

smsRouter.get("/sms_history", smsHistory);
smsRouter.post("/send_multiple", sendMultiple);

// schedule sms
smsRouter.post("/schedule", smsSchedule);




module.exports = smsRouter;
