var express = require("express");
const SmsController = require("../controllers/SmsController");

var router = express.Router();


// This is sent via ajax on our home page
router.get("/", SmsController.getAccountBalance);

// handle a POST request to send  a text message to a single number. 
router.post("/send_single", SmsController.sendSingle);

// handle a POST request to send  a text message to a multiple numbers. 
router.post("/send_multiple/", SmsController.sendMultiple);

// handle a GET request to retrieve sms history. 
router.get("/sms_history/", SmsController.smsHistory);



/* trna use one post url to handle both single and multiple */
// router.post("/send", function(req, res){
// 	if(req.query.multiple ){
// 		return SmsController.sendMultiple;
// 	}
// 	else{
// 		return SmsController.sendSingle;
// 	};
	
// });


module.exports = router;
