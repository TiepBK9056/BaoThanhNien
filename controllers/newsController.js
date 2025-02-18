// controllers/newsController.js

const { getNewsByCategory, getAllNews } = require('../models/newsModel');

async function showHomePage(req, res) {
    try {
        const news = await getAllNews();
        res.render('index', { news });
    } catch (err) {
        console.error(err);
        res.status(500).send('Lỗi khi tải dữ liệu');
    }
}

async function showCategory(req, res) {
    const categoryId = req.params.categoryId;
    try {
        const news = await getNewsByCategory(categoryId);
        res.render('category', { news });
    } catch (err) {
        console.error(err);
        res.status(500).send('Lỗi khi tải dữ liệu');
    }
}

module.exports = { showHomePage, showCategory };
