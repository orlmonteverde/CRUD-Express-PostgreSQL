'use strict'

const { Client } = require('pg'),
    conf = require('./db-conf'),
    dbOptions = {
        user: conf.db.user,
        host: conf.db.host,
        database: conf.db.database,
        password: conf.db.password,
        port: conf.db.port
    },
    conn = new Client(dbOptions)

conn.connect((err) => {
    return (err)
        ? console.log(`Error al Conectarse a PostgreSQL: ${err.stack}`)
        : console.log(`Conexión establecida con PostgreSQL N°: ${conn.port}`);
})

module.exports = conn