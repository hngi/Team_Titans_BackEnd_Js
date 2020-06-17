var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ScheduleSchema = new Schema(
	{
		phone_nums: {
			type: Array,
		},
		message: {
			type: String,
		},
		due_date:{
			type: String,
		},
		status:{
			type: String,
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Schedule", ScheduleSchema);
