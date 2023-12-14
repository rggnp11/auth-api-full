require('dotenv').config();
const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: 'postgres'
});

console.log('PGHOST:', process.env.PGHOST);
console.log('PGPORT:', process.env.PGPORT);
console.log('PGUSER:', process.env.PGUSER);
console.log('PGPASSWORD:', process.env.PGPASSWORD);

pgclient.connect();

const checkdb = `SELECT 1 from pg_database WHERE datname='authapi'`;

let rowCount = 0;

pgclient.query(checkdb, (err, res) => {
    if (err) throw err
    rowCount = res.rowCount;

    console.log('rowCount:', rowCount);

    if (rowCount == 0) {
        const createdb = 'CREATE DATABASE authapi';
    
        pgclient.query(createdb, (err, res) => {
            if (err) throw err
            console.log('Database authapi created');
            pgclient.end();    
        });
    } else {
        console.log('Database authapi already exists');
        pgclient.end();
    }
});
