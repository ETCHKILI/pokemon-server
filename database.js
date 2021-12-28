const {Pool} = require('pg')
const {rows} = require("pg/lib/defaults");

const dbConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'Pokemon',
    password: '11912726',
    port: 5432,
    max: 20, // 连接池最大连接数
    idleTimeoutMillis: 3000, // 连接最大空闲时间 3s
};

const pool = new Pool(dbConfig)

function databaseErr(err) {
    if (err) {
        console.log(err.stack)
        return true
    }
    return false
}


/// Return an obj which contains four
async function GetPlayerByUsername(username) {
    const sql = 'SELECT * FROM player WHERE player.username = $1';
    let res = await pool.query(sql, [username]);
    if (res === null || res.rows.length === 0) {
        return {};
    } else {
        let row = res.rows[0];
        return res.rows[0];
        // return {pid: row.pid, name: row.name, username: row.username, password: row.password};
    }
}

module.exports = {
    pool,
    GetPlayerByUsername
}