// // src/routes/storyRoutes.js
// const express = require('express');
// const {
//     createStory,
//     getStories,
//     getStory,
// } = require('../controllers/storyController');
// const { protect } = require('../middleware/authMiddleware');
// const { body, param } = require('express-validator');
// const validate = require('../middleware/validateMiddleware');

// const router = express.Router();

// router.post(
//     '/',
//     protect,
//     validate([
//         body('title').not().isEmpty().withMessage('Title is required'),
//         body('content').not().isEmpty().withMessage('Content is required'),
//     ]),
//     createStory
// );

// router.get('/', getStories);

// router.get(
//     '/:id',
//     validate([
//         param('id').isMongoId().withMessage('Invalid story ID'),
//     ]),
//     getStory
// );

// module.exports = router;
