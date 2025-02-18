// models/newsModel.js
const { connectDB } = require('../config/db');
const sql = require('mssql');
async function getNewsByCategory(categoryId) {
    const pool = await connectDB();
    const result = await pool.request()
                            .input('categoryId', sql.Int, categoryId)
                            .query('SELECT * FROM Tintuc WHERE IDLoai = @categoryId');
    return result.recordset;
}

async function getCategoriesByType(categoryId) {
    const pool = await connectDB();
    const result = await pool.request()
        .input('categoryId', sql.Int, categoryId)
        .query('SELECT * FROM DanhMucTin WHERE IDLoai = @categoryId');
    return result.recordset;
}

async function getNewsMain(categoryId) {
    const pool = await connectDB();
    const result = await pool.request()
        .input('categoryId', sql.Int, categoryId)
        .query('SELECT * FROM TinChinh WHERE IDLoai = @categoryId');
    return result.recordset;
}


async function getNameTheLoai(categoryId) {
    const pool = await connectDB();
    const result = await pool.request()
        .input('categoryId', sql.Int, categoryId)
        .query('SELECT Tentheloai FROM Theloaitin WHERE IDLoai = @categoryId');
    return result.recordset;
}

async function getNoiDungPhu(categoryId) {
    const pool = await connectDB();
    const result = await pool.request()
        .input('categoryId', sql.Int, categoryId)
        .query('SELECT * FROM TinPhu WHERE IDLoai = @categoryId');
    return result.recordset;
}

async function getAllNews() {
    const pool = await connectDB();
    const result = await pool.request()
                            .query('SELECT * FROM Tintuc');
    return result.recordset;
}


module.exports = { getNewsByCategory, getAllNews, getCategoriesByType, getNameTheLoai, getNewsMain, getNoiDungPhu };
