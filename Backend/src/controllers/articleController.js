// controllers/articleController.js
const Article = require('../models/Article');

// @desc    Create a new article
// @route   POST /api/articles
// @access  Private
exports.createArticle = async (req, res) => {
    const { title, content } = req.body;

    try {
        const newArticle = new Article({
            title,
            content,
            user: req.user.id,
        });
        await newArticle.save();
        res.status(201).json({ success: true, data: newArticle });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @desc    Get all articles
// @route   GET /api/articles
// @access  Public
exports.getArticles = async (req, res) => {
    try {
        const articles = await Article.find().populate('user', 'name');
        res.status(200).json({ success: true, data: articles });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
