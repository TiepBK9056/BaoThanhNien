// controllers/newsController.js

const { getNewsByCategory, getAllNews, getCategoriesByType, getNameTheLoai, getNewsMain, getNoiDungPhu } = require('../models/newsModel');

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
        // Lấy danh sách các danh mục tin theo thể loại
        const categories = await getCategoriesByType(categoryId);
        
        // Lấy nội dung chính
        const noiDungChinh = await getNewsMain(categoryId);

        const noiDungPhu = await getNoiDungPhu(categoryId);

        const theLoai = await getNameTheLoai(categoryId);
        
        // Lấy tin tức theo thể loại
        const news = await getNewsByCategory(categoryId);
        
        // Truyền cả news và categories vào view
        res.render('category', { news, categories, theLoai, noiDungChinh, noiDungPhu});
    } catch (err) {
        console.error(err);
        res.status(500).send('Lỗi khi tải dữ liệu');
    }
}
module.exports = { showHomePage, showCategory };
