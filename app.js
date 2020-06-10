// var twilio = require('twilio');


const express = require('express')
const app = express()

app.get('/sendSMS', function(req, res) {
    var accountSid = process.env.TWILIO_ACCOUNT_Sid; // Your Account SID from www.twilio.com/console
    var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
    
    var twilio = require('twilio');
    var client = new twilio(accountSid, authToken);
    
    client.messages.create({
        body: 'This is test app using twilio',
        to: '+2348089681015',  // Text this number
        from: '+12057724917' // From a valid Twilio number
    })
    .then((message) => res.send(`message with this id: ${JSON.stringify(message)} was sent`));
})

app.listen(3000);
