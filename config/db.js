// config/db.js
const sql = require('mssql');

const config = {
    user: 'sa',
    password: '123456aA@$',
    server: 'localhost',
    port: 1433,
    database: 'BaoThanhNien',
    options: {
        encrypt: true,  // Nếu dùng SQL Server với Azure
        trustServerCertificate: true
    }
};

async function connectDB() {
    try {
        const pool = await sql.connect(config);
        console.log('Kết nối thành công tới SQL Server');
        return pool;
    } catch (err) {
        console.error('Không thể kết nối tới SQL Server', err);
        throw err;
    }
}

module.exports = { connectDB };
