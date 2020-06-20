const config = require("../configs/index");
const Sms = require("../models/SmsModel");
const apiResponse = require("../helpers/apiResponse");
const request = require("request-promise");
const statusCode = require("http-status");
const accountSid = config.ACCOUNT_SID;
const authToken = config.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);
var schedule = require('node-schedule');

const {sendMultiple, getAccountBalance} = require("../controllers/SmsController");


async function send (message, mobile_num, res) {
	if (!message || message == " ") {
			return res.status(statusCode.PRECONDITION_FAILED).json({
				message: "message field is empty",
			});
		}
		if (!mobile_num || mobile_num == " ") {
			return res.status(statusCode.PRECONDITION_FAILED).json({
				message: "mobile number field is empty",
			});
		}
		try {
			//Setup Twilo and send message
			var smsOptions = {
				body: message,
				from: config.TWILIO_NUMBER,
				to: mobile_num,
			};
			const sentSms = await client.messages.create(smsOptions);
			if (sentSms) {
				const sms = new Sms({
					message,
					mobile_num,
				});
				const savedSms = await sms.save();
				console.log("message sent and saved", savedSms);
			}
		}catch (err) {
			console.log(`error in sending message >>> ${err.message}`);
		}
};





/**
 * SMS Schedule.
 *
 *Retrieves sms history from twillio, the advantage is that it contains delivery status and other important insight
 *
 * @param none
 *
 * @returns {Object}
 */

exports.smsSchedule = [ 
   function (req, res) {
  	try{
	    let { message, mobile_nums, due_date, due_time} = req.body;

		// converts the comma delimited data passed into a valid date - 17/06/2020
		var dd = due_date.split('/');
		var day = dd[0];
		var month = dd[1];
		var year = dd[2];

		// converts the comma delimited data passed into a valid time - 20:05
		var dt = due_time.split(':');
		var hour = dt[0];
		var min = dt[1];

	    // splits comma delimited phone numbers into array
	    phone_nums = mobile_nums.split(',');

	    let len  = phone_nums.length-1;
	    for(let i = 0; i<=len; i++){
	    	 // minute, hour, day, month, dow(optional) 
		  	var job = schedule.scheduleJob(`${min} ${hour} ${day} ${month} *`, function(){
		  			return send(message, phone_nums[i]);	
				});
	    }
	    console.log('job scheduled successfully');
	    let msg = `message has been scheduled successfully and will run on ${due_date} at ${due_time}`;
		return apiResponse.successResponse(res, msg);
	    res.sendStatus(200);
   	}catch(err){
   		return apiResponse.ErrorResponse(res, err.message);
   	}
  }
];

