// // src/routes/eventRoutes.js
// const express = require('express');
// const {
//     createEvent,
//     getEvents,
//     getEvent,
// } = require('../controllers/eventController');
// const { protect } = require('../middleware/authMiddleware');
// const { body, param } = require('express-validator');
// const validate = require('../middleware/validateMiddleware');
// const upload = require('../middleware/uploadMiddleware'); // Middleware for image uploads

// const router = express.Router();

// router.post(
//     '/',
//     protect,
//     upload.single('image'), // Image upload handling
//     validate([
//         body('title').not().isEmpty().withMessage('Title is required'),
//         body('description').not().isEmpty().withMessage('Description is required'),
//         body('date').not().isEmpty().withMessage('Date is required'),
//         body('location').not().isEmpty().withMessage('Location is required'),
//     ]),
//     createEvent
// );

// router.get('/', getEvents);

// router.get(
//     '/:id',
//     validate([
//         param('id').isMongoId().withMessage('Invalid event ID'),
//     ]),
//     getEvent
// );

// module.exports = router;
