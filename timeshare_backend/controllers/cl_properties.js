const {pool} = require('../database')

exports.GetAllProperties = async (req, res) => {
    var limit = parseInt(req.query.limit) ? req.query.limit : 10;
    var offset = parseInt(req.query.offset) ? req.query.offset : 0;
    var sort = req.query.sort_by ? req.query.sort_by.split(':') : ['desc', 'rating'];
    let end = req.query.availability ? req.query.availability[1].split(':')[1] :  '9999-12-31' ;
    let start = req.query.availability ? req.query.availability[0].split(':')[1] : '9999-12-31';

    console.log(req.query)

    let query = `SELECT p.timeshareId, p.name, p.address, p.price, rating
                                        FROM (SELECT p.*, AVG(r.rating) AS rating
                            FROM Properties p LEFT JOIN Reviews r
                                ON p.timeshareId = r.timeshareId
                        GROUP BY p.timeshareId) p LEFT JOIN Contracts c
                                            ON p.timeshareId = c.timeshareId
                                        WHERE (NOT (c.startDay <= DATE('${end}') AND c.endDay >= DATE('${start}'))
                                            OR c.contractId IS NULL)
                                            ${req.query.price ? 'AND p.price between ' + req.query.price[1].split(':')[1] + ' AND ' + req.query.price[0].split(':')[1] : ''}
                                            ${req.query.location ? "AND p.address = '" + req.query.location + "'" : ''}
                                        GROUP BY p.timeshareId
                                        ORDER BY ${sort[1]} ${sort[0]}
                                        LIMIT ${limit}
                                        OFFSET ${offset};`;

    console.log(query)
    pool.query(query, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        // rows fetch
        res.send(result);
    });
}

exports.GetSingleProperty = async (req, res) => {

    pool.query(`Select * from Properties where Properties.timeshareId = ${req.query.id}`, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        // rows fetch
        res.send(result);
    });
}

exports.GetLocations = async (req, res) => {
    pool.query('SELECT * FROM Properties GROUP BY address', (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        var locations = result.map(x => x.address)
        res.send(locations)
    })
}

exports.AddNewProperty = async (req, res) => {
    pool.query(`INSERT INTO Properties (name, address, price, capacity, size, description, img) 
                                VALUES ("${req.query.name}", "${req.query.address}", ${req.query.price}, ${req.query.capacity}, ${req.query.size}, "${req.query.description}", "${req.query.img}")`,
        (err, result) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send()
        }
    )
}

exports.RemoveProperty = async (req, res) => {
    pool.query(`DELETE FROM Properties where timeshareId = ${req.query.id}`, (err, result) => {
        if(err) {
            console.error(err);
            return;
        }
        res.send()
    })
}