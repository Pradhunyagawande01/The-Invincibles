const express = require('express');
const { reportIncident } = require('../controllers/incidentController');
const { protect } = require('../middleware/authMiddleware');
const { body } = require('express-validator');
const validate = require('../middleware/validateMiddleware');

const router = express.Router();

router.post(
    '/',
    validate([
        body('name').not().isEmpty().withMessage('Name is required'),
        body('description').not().isEmpty().withMessage('Description is required'),
        body('date').not().isEmpty().withMessage('Date is required'),
        body('time').not().isEmpty().withMessage('Time is required'),
    ]),
    reportIncident
);

module.exports = router;
