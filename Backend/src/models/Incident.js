const mongoose = require('mongoose');

const incidentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    time: {
        type: String,
        required: true,
    },
    blockchainHash: {
        type: String, // Store the blockchain transaction hash here
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Incident', incidentSchema);
