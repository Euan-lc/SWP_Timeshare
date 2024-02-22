// const pool = require('../database');

exports.GetAllProperties = async (req, res) => {
    pool.query('SELECT * from timeshares', function (error, results, fields) {
        res.json(results);
    });
    res.status(200);
}