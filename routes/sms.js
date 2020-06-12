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


// used to test middleware before implementing
smsRouter.post("/test", function(req, res){
	console.log("middleware passed");
	res.end('middleware passed');
});
	

module.exports = smsRouter;
