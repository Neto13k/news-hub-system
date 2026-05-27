const express = require('express');
const router = express.Router();
const { getNews } = require('../controllers/newsController');
const auth = require('../middleware/authMiddleware');

router.get('/', getNews);

module.exports = router;
