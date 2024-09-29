// src/models/CommunityPost.js
const mongoose = require('mongoose');

const CommunityPostSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: [true, 'Please add a title'],
        },
        body: {
            type: String,
            required: [true, 'Please add content'],
        },
        category: {
            type: String,
            enum: ['Safety Tips', 'Legal Rights', 'Self-Defense', 'Mental Health', 'Other'],
            default: 'Other',
        },
        anonymous: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('CommunityPost', CommunityPostSchema);
