// src/controllers/sosController.js
const asyncHandler = require('express-async-handler');
const nodemailer = require('nodemailer');
const config = require('../config');
const User = require('../models/User');
const Sos = require('../models/SOSAlert.js');
const twilio = require("twilio")

// Initialize Nodemailer
const transporter = nodemailer.createTransport({
    service: config.email.service,
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
});

const twilioClient = twilio(config.twilio.accountSid, config.twilio.authToken);

// @desc    Send SOS Alert
// @route   POST /api/sos
// @access  Public or Private
exports.sendSOS = asyncHandler(async (req, res) => {
    const { location, message } = req.body;
    const userId = req.user ? req.user.id : null;

    // Prepare email content
    const defaultMessage = message || 'SOS Alert! Please assist immediately.';
    const emailContent = `
        <h1>Emergency Alert</h1>
        <p>${defaultMessage}</p>
        <p>Location: ${location}</p>
    `;

    const mailOptions = {
        from: config.email.user,
        to: 'pradhunyagawande@gmail.com', // Replace with actual police email
        subject: 'SOS Alert',
        html: emailContent
    };



    try {
        // Send email
        await transporter.sendMail(mailOptions);

        const smsMessage = `${defaultMessage} Location: ${location}`;

        // await twilioClient.messages.create({
        //     body: smsMessage,
        //     from: "+14693315515",
        //     to: "+9172529954449" // contact should be in the format '+1234567890'
        // })

        twilioClient.messages
            .create({
                body: smsMessage,
                from: '+14693315515',
                to: '+917252995449'
            })
            .then(message => console.log(message.sid)).catch((error) => console.log(error));

        // If user is logged in, save SOS alert to database
        if (userId) {
            const user = await User.findById(userId);

            if (!user) {
                res.status(404);
                throw new Error('User not found');
            }

            // Also send SMS to emergency contacts
            // const sendSMSPromises = user.emergencyContacts.map(contact =>
            //     transporter.sendMail({ 
            //         ...mailOptions,
            //         to: contact,
            //         subject: 'SOS Alert - Emergency Contact',
            //         text: `SOS Alert! ${defaultMessage} Location: ${location}`
            //     })
            // );

            // await Promise.all(sendSMSPromises);

            const smsMessage = `${defaultMessage} Location: ${location}`;
            // const sendSMSPromises = user.emergencyContacts.map(contact =>
            //     twilioClient.messages.create({
            //         body: smsMessage,
            //         from: config.twilio.phoneNumber,
            //         to: "+9172529954449" // contact should be in the format '+1234567890'
            //     })
            // );

            await twilioClient.messages.create({
                body: smsMessage,
                from: config.twilio.phoneNumber,
                to: "+9172529954449" // contact should be in the format '+1234567890'
            })

            // await Promise.all(sendSMSPromises);

            // Save SOS alert to database
            await Sos.create({
                user: userId,
                location,
                message: defaultMessage
            });
        }

        res.status(200).json({
            success: true,
            message: 'SOS alert sent successfully'
        });
    } catch (error) {
        console.error(error);
        res.status(500);
        throw new Error('Error sending SOS alert');
    }
});
