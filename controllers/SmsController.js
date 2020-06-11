const config = require("../configs/index");
const Sms = require("../models/SmsModel");
const apiResponse = require("../helpers/apiResponse");
const request = require("request-promise");
const statusCode = require("http-status");

//TWILIO CONFIGURATION

const accountSid = config.ACCOUNT_SID;
const authToken = config.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);


var util = require('util');

/**
 * Retrieve Account Balance.
 *
 * @returns {Object}
 */
exports.getAccountBalance = [
	async function (req, res) {
		try {
			var options = {
				uri: `https://api.twilio.com/2010-04-01/Accounts/${config.ACCOUNT_SID}/Balance.json`,
				auth: {
					user: config.ACCOUNT_SID,
					pass: config.AUTH_TOKEN,
				},
				json: true,
			};

			const body = await request(options);
			if (body) {
				return res.status(statusCode.OK).json({
					message: `Your current account balance is ${body.balance} in ${body.currency}`,
				});
			} else {
				return res.status(statusCode.BAD_REQUEST).json({
					message: "An error occured while processing your request",
				});
			}
		} catch (err) {
			console.log(`error in sending message >>> ${err.message}`);
			//throw error in json response with status 500.
			return apiResponse.ErrorResponse(res, err.message);
		}
	},
];

/**
 * Retrieve all sent messages.
 *
 * @returns {Object}
 */
exports.getAllSms = [
	async function (req, res) {
		try {
			const sentMessages = await Sms.find().select("-__v");
			if (sentMessages.length == 0) {
				return res.status(statusCode.OK).json({
					message: "No message has been sent with this service",
				});
			} else {
				return res.status(statusCode.OK).json({
					message: `${sentMessages.length} ${
						sentMessages.length > 1 ? "Messages" : "Message"
					} found`,
					sentMessages,
				});
			}
		} catch (err) {
			console.log(`error in sending message >>> ${err.message}`);
			//throw error in json response with status 500.
			return apiResponse.ErrorResponse(res, err.message);
		}
	},
];

/**
 * Send SMS.
 *
 * @param {string}   phone
 *
 * @returns {Object}
 */
exports.sendSms = [
	async function (req, res) {
		const { message, mobile_num } = req.body;
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
				return res.status(statusCode.OK).json({
					message: "message sent successfully",
					sentSms: sentSms.sid,
				});
			}
		} catch (err) {
			console.log(`error in sending message >>> ${err.message}`);
			//throw error in json response with status 500.
			return apiResponse.ErrorResponse(res, err.message);
		}
	},
];


/**
 * SMS History.
 *
 *Retrieves sms history from twillio, the advantage is that it contains delivery status and other important insight
 *
 * @param none
 *
 * @returns {Object}
 */

exports.smsHistory = [ 
  function (req, res) {
    let data = [];
     client.messages.list({limit: 20}).then(messages => messages.forEach(m => {
        for (var j=0; j<messages.length; j++) {
          data[j] = {id: m.sid, status: m.status, to: m.to, date: m.dateSent, message :m.body }
        }
        return apiResponse.successResponse(res, data);
        res.sendStatus(200);
      }));
   
  },
];

/**
 * Send SMS TO MULTIPLE PHONE NUMBERS.
 * 
 * @param {comma separated list of numbers}   mobile_nums
 *
 * @returns {Object}
 */
exports.sendMultiple = [
	async function (req, res) {
		var { message, mobile_nums } = req.body;
		var phone_numbers = mobile_nums.split(',');
		console.log(util.inspect(phone_numbers));
		phone_numbers.forEach(
			phone => {
				if (!message || message == " ") {
					return res.status(statusCode.PRECONDITION_FAILED).json({
						message: "message field is empty",
					});
				}
				if (!mobile_nums || mobile_nums == " ") {
					return res.status(statusCode.PRECONDITION_FAILED).json({
						message: "mobile number field is empty",
					});
				}
				try {
					//Setup Twilo and send message
					var smsOptions = {
						body: message,
						from: config.TWILIO_NUMBER,
						to: phone,
					};
					const sentSms =  client.messages.create(smsOptions);
					if (sentSms) {
						const sms = new Sms({
							message,
							phone,
						});
						const savedSms =  sms.save();
						console.log("message sent and saved", savedSms);
						return res.status(statusCode.OK).json({
							message: "message sent successfully",
							sentSms: sentSms.sid,
						});
					}
				}catch (err) {
					console.log(`error in sending message >>> ${err.message}`);
					//throw error in json response with status 500.
					return Promise.reject(err);
					// return apiResponse.ErrorResponse(res, err.message);
				}
		});
	},
];
