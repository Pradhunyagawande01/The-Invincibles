// src/routes/sosRoutes.js
const express = require('express');
const { sendSOS } = require('../controllers/sosController');
const { protect } = require('../middleware/authMiddleware');
const { body } = require('express-validator');
const validate = require('../middleware/validateMiddleware');

const router = express.Router();

router.post(
    '/',
    validate([
        body('location').not().isEmpty().withMessage('Location is required'),
        body('message').optional().isString()
    ]),
    sendSOS
); 

module.exports = router;