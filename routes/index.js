// routes/index.js
const express = require('express');
const router = express.Router();
const { showHomePage, showCategory } = require('../controllers/newsController');

// Định tuyến cho trang chủ
router.get('/', showHomePage);

// Định tuyến cho các danh mục
router.get('/category/:categoryId', showCategory);

module.exports = router;
