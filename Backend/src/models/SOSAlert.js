// src/models/SOSAlert.js
const mongoose = require('mongoose');

const SOSAlertSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        message: {
            type: String,
            default: 'I need help!',
        },
        location: {
            latitude: Number,
            longitude: Number,
        },
        status: {
            type: String,
            enum: ['sent', 'received', 'resolved'],
            default: 'sent',
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('SOSAlert', SOSAlertSchema);
