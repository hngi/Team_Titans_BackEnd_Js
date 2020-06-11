const SmsModel = require("../models/SmsModel");
const apiResponse = require("../helpers/apiResponse");
const auth = require("../middlewares/jwt");
var mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);



//TWILIO CONFIGURATION 

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


/**
 * Retrieve Account Balance.
 *
 * @returns {Object}
 */
exports.getAccountBalance = [
  function (req, res) {
    try { 
      res.end('hello');
    } catch (err) {
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, err);
    }
  },
];
/**
 * Send SMS.
 * TO SINGLE NUMBER
 *
 * @param {string}   phone
 *
 * @returns {Object}
 */
exports.sendSingle = [
  function (req, res) {
    try {
      //Setup Twilo and send message
        client.messages.create({
        body: req.body.message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: req.body.phone
      })
       .then(message => {
          console.log(message.sid);
          data = {id: message.sid, to: message.to, status: message.status, date: message.dateSent, date: message.dateUpdated};
          return apiResponse.successResponse(res, data);
          res.sendStatus(200);
        }); 
    } catch (err) {
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, err);
    }
  },
];

/**
 * Send SMS.
 * TO Multiple numbers
 *
 * @param {array}   phone numbers
 *
 * @returns {Object}
 */
exports.sendMultiple = [
  function (req, res) {
    numbers = req.body.phone;
    numbers.forEach(num, console.log(num));
    // try {
    //   //Setup Twilo and send message
    //   client.messages.create({
    //     body: 'This is a test text',
    //     from: process.env.TWILIO_PHONE_NUMBER,
    //      to: req.body.phone
    //   })
    //    .then(message => console.log(message.sid));
    //    res.sendStatus(200);
    // } catch (err) {
    //   //throw error in json response with status 500.
    //   return apiResponse.ErrorResponse(res, err);
    // }
  },
];


/**
 * GET SMS HISTORY.
 *
 * @param {string}   phone
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
