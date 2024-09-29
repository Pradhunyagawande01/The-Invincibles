// src/controllers/communityController.js
const asyncHandler = require('express-async-handler');
const CommunityPost = require('../models/CommunityPost');

// @desc    Create a community post
// @route   POST /api/community
// @access  Private
exports.createPost = asyncHandler(async (req, res) => {
    const { title, body, category, anonymous } = req.body;

    const post = await CommunityPost.create({
        user: req.user.id,
        title,
        body,
        category,
        anonymous,
    });

    res.status(201).json({
        success: true,
        data: post,
    });
});

// @desc    Get all community posts
// @route   GET /api/community
// @access  Public
exports.getPosts = asyncHandler(async (req, res) => {
    const posts = await CommunityPost.find()
        .populate('user', 'name')
        .sort({ createdAt: -1 });

    const formattedPosts = posts.map((post) => ({
        _id: post._id,
        title: post.title,
        body: post.body,
        category: post.category,
        anonymous: post.anonymous,
        createdAt: post.createdAt,
        user: post.anonymous ? null : post.user.name,
    }));

    res.status(200).json({
        success: true,
        count: formattedPosts.length,
        data: formattedPosts,
    });
});

// @desc    Get single community post
// @route   GET /api/community/:id
// @access  Public
exports.getPost = asyncHandler(async (req, res) => {
    const post = await CommunityPost.findById(req.params.id).populate(
        'user',
        'name'
    );

    if (!post) {
        res.status(404);
        throw new Error('Post not found');
    }

    const formattedPost = {
        _id: post._id,
        title: post.title,
        body: post.body,
        category: post.category,
        anonymous: post.anonymous,
        createdAt: post.createdAt,
        user: post.anonymous ? null : post.user.name,
    };

    res.status(200).json({
        success: true,
        data: formattedPost,
    });
});
