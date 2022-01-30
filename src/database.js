const mysql = require ("mysql2");
const {promisify} = require("util");
const {databae, database} = require ("./keys");

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err.code === "PROTOCOL_CONNECTION_LOST"){
        console.error("DATABASE CONNECTION WAS CLOSED");
    } 

    if (err.code === "ER_CON_COUNT_ERROR"){
        console.error("DATABASE HAS TO WAY CONNECTIONS")}

    if (err.code === "ECONNREFUSED"){
        console.error("DTABASE CONNECTION WAS REFUSED");
    }
    
     if (connection) connection.release();
    console.log("BD id connected");
    return;

});

    pool.query = promisify(pool.query);

    module.exports = pool;