require("dotenv").config();

module.exports = {
	ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
	AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN,
	TWILIO_NUMBER: process.env.TWILIO_NUMBER,
	MONGODBURI: process.env.MONGOURI || "mongodb://127.0.0.1:27017/smsapp",
};
