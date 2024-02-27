const { pool } = require('../database')

exports.GetAllProperties = async (req, res) => {
    var limit = parseInt(req.query.limit) ? req.query.limit : 10;
    var offset = parseInt(req.query.offset) ? req.query.offset : 0;
    var sort = req.query.sort_by ? req.query.sort_by.split(':') : ['desc', 'rating'];

    var query = `SELECT p.timeshareId, p.name, p.address, p.price, avg(r.Rating) as rating
                            from Properties p
                                left join Reviews r
                                on p.timeshareId = r.timeshareId
                        group by p.timeshareId
                        order by ${sort[1]} ${sort[0]}
                        LIMIT ${limit}
                        OFFSET ${offset};`;

    console.log(req.query);

    pool.query(query, (err, result) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows fetch
        res.send(result);
    });
}

exports.GetSingleProperty = async (req, res) => {

    pool.query(`Select * from Properties where Properties.timeshareId = ${req.query.id}`, (err, result) => {
        if(err) {
            console.error(err);
            return;
        }
        // rows fetch
        res.send(result);
    });
}

exports.GetLocations = async (req, res) => {
    pool.query('SELECT * FROM Properties GROUP BY address', (err, result) => {
        if(err){
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
            if(err){
                console.error(err);
                return;
            }
            res.send()
        }
    )
}