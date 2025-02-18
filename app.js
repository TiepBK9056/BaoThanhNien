// app.js
const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes/index');

// Thiết lập view engine là EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Cấu hình thư mục public (CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Sử dụng router
app.use('/', router);

// Lắng nghe tại port 3000
app.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
