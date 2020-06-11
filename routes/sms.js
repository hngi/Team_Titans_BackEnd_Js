const express = require("express");
const {
	getAccountBalance,
	getAllSms,
	sendSms,
	smsHistory,
} = require("../controllers/SmsController");

const smsRouter = express.Router();

smsRouter.get("/balance", getAccountBalance);
smsRouter.get("/all", getAllSms);
smsRouter.post("/send", sendSms);

// handle a GET request to retrieve sms history from twillio. 
smsRouter.get("/sms_history/", smsHistory);

smsRouter.get("/test", function(req, res){
	console.log('hsdahj');
});

module.exports = smsRouter;
