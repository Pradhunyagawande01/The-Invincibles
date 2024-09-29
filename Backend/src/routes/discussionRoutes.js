// // src/routes/discussionRoutes.js
// const express = require('express');
// const {
//     createTopic,
//     getTopics,
//     getTopic,
//     addComment,
// } = require('../controllers/topicController');
// const { protect } = require('../middleware/authMiddleware');
// const { body, param } = require('express-validator');
// const validate = require('../middleware/validateMiddleware');

// const router = express.Router();

// router.post(
//     '/',
//     protect,
//     validate([
//         body('title').not().isEmpty().withMessage('Title is required'),
//         body('description').not().isEmpty().withMessage('Description is required'),
//     ]),
//     createTopic
// );

// router.get('/', getTopics);

// router.get(
//     '/:id',
//     validate([
//         param('id').isMongoId().withMessage('Invalid topic ID'),
//     ]),
//     getTopic
// );

// router.post(
//     '/:id/comment',
//     protect,
//     validate([
//         param('id').isMongoId().withMessage('Invalid topic ID'),
//         body('comment').not().isEmpty().withMessage('Comment is required'),
//     ]),
//     addComment
// );

// module.exports = router;
