const { Client } = require('pg');

const pgclient = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: 'postgres',
    password: 'postgres',
    database: 'postgres'
});

pgclient.connect();

const sql = 'CREATE DATABASE authapi';

pgclient.query(sql, (err, res) => {
    if (err) throw err
    console.log('Database authapi created');
    pgclient.end();
});
