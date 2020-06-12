const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const indexRouter = require("./routes/index");
const smsRouter = require("./routes/sms");
const apiResponse = require("./helpers/apiResponse");
const mongoDbConnection =require("./configs/dbconfig");
const cors = require("cors");
const auth = require("./middleware/auth");
const jwt = require('jsonwebtoken');

//load the database
mongoDbConnection();

const app = express();

//don't show the log when it is test
if (process.env.NODE_ENV !== "test") {
	app.use(logger("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//To allow cross-origin requests
app.use(cors());

//Route Prefixes
app.use("/api/v1", indexRouter);
app.use("/api/v1/sms", auth, smsRouter);

// throw 404 if URL not found

app.all("*", function (req, res) {
	return apiResponse.notFoundResponse(res, "Page not found");
});  

app.use((err, req, res) => {
	if (err.name == "UnauthorizedError") {
		return apiResponse.unauthorizedResponse(res, err.message);
	}
});

module.exports = app;
