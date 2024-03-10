const { pool } = require('../database')

exports.GetReviewsProperty = async (req, res) => {
    var limit = parseInt(req.query.limit) ? req.query.limit : 10;
    var offset = parseInt(req.query.offset) ? req.query.offset : 0;


    pool.query(`SELECT rating, comment FROM Reviews WHERE timeshareId = ${req.query.id} LIMIT ${limit} OFFSET ${offset};`, (err, result) => {

        if(err){
            console.error(err);
            return;
        }
        res.send(result)
    })
}

exports.AddNewReview = async (req, res) => {

    pool.query(`INSERT INTO Reviews (timeshareId, rating, comment) values (${req.query.id}, "${req.query.rating}", "${req.query.comment}")`, (err, result) => {

        if(err){
            console.error(err);
            return;
        }
        res.send()
    })
}