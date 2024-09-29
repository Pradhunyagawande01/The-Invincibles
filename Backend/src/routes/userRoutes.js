// src/routes/userRoutes.js
const express = require('express');
const { updateProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const { body } = require('express-validator');
const validate = require('../middleware/validateMiddleware');

const router = express.Router();

router.put(
    '/updateProfile',
    protect,
    validate([
        body('email').optional().isEmail().withMessage('Please include a valid email'),
        body('password')
            .optional()
            .isLength({ min: 6 })
            .withMessage('Please enter a password with 6 or more characters'),
        // Add more validations as needed
    ]),
    updateProfile
);

module.exports = router;
