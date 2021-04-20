const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'Soprano83',
    host: 'localhost',
    port: 5432,
    database: 'pt4you'
});

module.exports = db;