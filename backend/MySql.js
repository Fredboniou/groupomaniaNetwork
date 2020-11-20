const mysql = require('mysql');
require('dotenv').config();

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: "3306"
});

con.connect(function(err) {
    if(err) throw err;
    con.query("SELECT * FROM users", function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    })
    console.log('Connecté !');
});

module.exports = con;

