// get the client
const mysql = require('mysql2/promise');

// create the connection to database
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'test1'
});

connection.getConnection()
.then(() => {
    console.log("connection successfully created");
}).catch((err) => {
    console.log(err);
})

module.exports = connection;