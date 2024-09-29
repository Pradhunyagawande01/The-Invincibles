const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config');

const generateToken = (id) => {
    return jwt.sign({ id }, config.jwtSecret, { expiresIn: config.jwtExpire });
};

// @desc    Update user profile
// @route   PUT /api/users/updateProfile
// @access  Private
exports.updateProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);

    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.emergencyContacts = req.body.emergencyContacts || user.emergencyContacts;
        user.medicalInfo = req.body.medicalInfo || user.medicalInfo;

        if (req.body.password) {
            user.password = req.body.password;
        }

        const updatedUser = await user.save();

        // Generate new token with updated user info
        const token = generateToken(updatedUser._id);

        // Set the updated token in an HTTP-only cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Secure flag for production
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 7,
        });

        res.json({
            success: true,
            data: {
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
            },
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
});
