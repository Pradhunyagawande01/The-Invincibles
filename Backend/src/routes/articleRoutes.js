// // src/routes/articleRoutes.js
// const express = require('express');
// const {
//     createArticle,
//     getArticles,
//     getArticle,
// } = require('../controllers/articleController');
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
//     createArticle
// );

// router.get('/', getArticles);

// router.get(
//     '/:id',
//     validate([
//         param('id').isMongoId().withMessage('Invalid article ID'),
//     ]),
//     getArticle
// );

// module.exports = router;
cd 