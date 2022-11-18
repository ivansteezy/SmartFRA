// to do, create connections and CRUD operations
const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'fra1234',
    database : 'my_db'
});

module.exports.connection = connection;