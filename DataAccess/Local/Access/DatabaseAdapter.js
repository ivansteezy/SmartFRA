const mysql = require('mysql2/promise');

async function Execute(sql) {
    const connection = await mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'smartfra0'
    });

    const [results, ] = await connection.execute(sql);
    return results;
}

function EmptyOrRows(data) {
    if(!data) {
        return [];
    }

    return data;
}

module.exports = {
    Execute,
    EmptyOrRows
}