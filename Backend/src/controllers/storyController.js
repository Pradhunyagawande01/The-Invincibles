// controllers/storyController.js
const Story = require('../models/Story');

// @desc    Create a new story
// @route   POST /api/stories
// @access  Private
exports.createStory = async (req, res) => {
    const { title, content } = req.body;

    try {
        const newStory = new Story({
            title,
            content,
            user: req.user.id,
        });
        await newStory.save();
        res.status(201).json({ success: true, data: newStory });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Get all stories
// @route   GET /api/stories
// @access  Public
exports.getStories = async (req, res) => {
    try {
        const stories = await Story.find().populate('user', 'name');
        res.status(200).json({ success: true, data: stories });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
