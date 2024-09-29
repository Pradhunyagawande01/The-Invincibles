// controllers/topicController.js
const Topic = require('../models/Topic');

// @desc    Create a new topic
// @route   POST /api/topics
// @access  Private
exports.createTopic = async (req, res) => {
    const { title, description } = req.body;

    try {
        const newTopic = new Topic({
            title,
            description,
            user: req.user.id, // Logged-in user
        });
        await newTopic.save();
        res.status(201).json({ success: true, data: newTopic });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Add comment to a topic
// @route   POST /api/topics/:id/comment
// @access  Private
exports.addComment = async (req, res) => {
    const { comment } = req.body;

    try {
        const topic = await Topic.findById(req.params.id);

        if (!topic) {
            return res.status(404).json({ success: false, error: 'Topic not found' });
        }

        topic.comments.push({ comment, user: req.user.id });
        await topic.save();

        res.status(200).json({ success: true, data: topic });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Get all topics
// @route   GET /api/topics
// @access  Public
exports.getTopics = async (req, res) => {
    try {
        const topics = await Topic.find().populate('user', 'name').populate('comments.user', 'name');
        res.status(200).json({ success: true, data: topics });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
