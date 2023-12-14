const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: 'postgres'
});

pgclient.connect();

const sql = 'CREATE DATABASE authapi';

pgclient.query(sql, (err, res) => {
    if (err) throw err
    console.log('Database authapi created');
    pgclient.end();
});
