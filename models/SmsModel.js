var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SmsSchema = new Schema(
	{
		mobile_num: {
			type: Number,
		},
		message: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Sms", SmsSchema);
