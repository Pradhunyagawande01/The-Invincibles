const asyncHandler = require('express-async-handler');
const Incident = require('../models/Incident');

// @desc    Report a new incident
// @route   POST /api/incidents
// @access  Private
exports.reportIncident = asyncHandler(async (req, res) => {
    const { name, description, date, time } = req.body;

    // Validate input
    if (!name || !description || !date || !time) {
        res.status(400);
        throw new Error('Please provide all required fields');
    }

    try {
        // 1. Save the incident to the MongoDB database
        const newIncident = new Incident({
            name,
            description,
            date,
            time,
        });

        const savedIncident = await newIncident.save();

        // // 2. Send the incident data to the blockchain
        // const blockchainHash = await sendToBlockchain(savedIncident);

        // // 3. Update the incident with the blockchain transaction hash
        // savedIncident.blockchainHash = blockchainHash;
        // await savedIncident.save();

        // Respond with the stored incident details
        res.status(201).json({
            success: true,
            data: savedIncident,
        });
    } catch (error) {
        res.status(500);
        throw new Error('Server Error: Unable to report incident');
    }
});
