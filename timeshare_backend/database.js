const mysql = require('mysql2/promise');
require('dotenv').config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10,
    supportBigNumbers: true,
    port:process.env.SQL_PORT,
    ssl: {
        rejectUnauthorized: true,
        ca : process.env.CA_CERT
    }
});

module.exports = pool;