const {pool} = require('../database');

exports.addCustomer = async (req, res) => {
    pool.query(`INSERT INTO Customers (customerId) VALUES ("${req.query.id}")`, (err, result) =>{
        if(err){
            console.error(err);
            return
        }
        res.send('inserted')
    })
}