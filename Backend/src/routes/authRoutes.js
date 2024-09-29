// src/routes/authRoutes.js
const express = require('express');
const { register, login, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { body } = require('express-validator');
const validate = require('../middleware/validateMiddleware');

const router = express.Router();

router.post(
    '/register',
    validate([
        body('name').not().isEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Please include a valid email'),
        body('password')
            .isLength({ min: 6 })
            .withMessage('Please enter a password with 6 or more characters'),
    ]),
    register
);

router.post(
    '/login',
    validate([
        body('email').isEmail().withMessage('Please include a valid email'),
        body('password').exists().withMessage('Password is required'),
    ]),
    login
);

router.get('/me', protect, getMe);

module.exports = router;
