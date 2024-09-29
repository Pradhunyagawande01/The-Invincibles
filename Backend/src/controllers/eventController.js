// controllers/eventController.js
const Event = require('../models/Event');

// @desc    Create a new event or workshop
// @route   POST /api/events
// @access  Private
exports.createEvent = async (req, res) => {
    const { title, description, date, location } = req.body;

    try {
        const event = new Event({
            title,
            description,
            date,
            location,
            createdBy: req.user.id,
            image: req.file ? req.file.path : null, // For image upload
        });
        await event.save();
        res.status(201).json({ success: true, data: event });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Get all events
// @route   GET /api/events
// @access  Public
exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find().populate('createdBy', 'name');
        res.status(200).json({ success: true, data: events });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
