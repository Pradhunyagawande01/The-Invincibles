// src/services/twilioService.js
const twilio = require('twilio');
const config = require('../config');

const client = twilio(config.twilio.accountSid, config.twilio.authToken);

exports.sendSMS = async (to, body) => {
    try {
        await client.messages.create({
            body,
            from: config.twilio.phoneNumber,
            to,
        });
        console.log(`SMS sent to ${to}`);
    } catch (error) {
        console.error(`Failed to send SMS to ${to}: ${error.message}`);
        throw error;
    }
};
