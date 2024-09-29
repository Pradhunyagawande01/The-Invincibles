// src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');
const config = require('../config');

exports.protect = asyncHandler(async (req, res, next) => {
    let token;
    console.log(req.cookies);
    

    // Get token from cookie
    if (req.cookies.token) {
        token = req.cookies.token;

        try {
            // Verify token
            const decoded = jwt.verify(token, config.jwtSecret);

            // Get user from the token
            req.user = await User.findById(decoded.id).select('-password');

            next();
        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});

// Grant access to specific roles
exports.authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            res.status(403);
            throw new Error(`User role '${req.user.role}' is not authorized`);
        }
        next();
    };
};
