'use strict'

const conn = require('./model')

class TeamModel {

    getAll(cb) {
        let query = 'SELECT id, name, twitter, country, side FROM team'
        conn.query(query, cb)
    }

    getOne(id, cb) {
        let query = {
                text: 'SELECT id, name, twitter, country, side FROM team WHERE id = $1',
                values: [id]
            }
        conn.query(query, cb)
    }

    save(data, cb) {
        let query = {
            text: 'INSERT INTO team (name, twitter, country, side) VALUES($1, $2, $3, $4)',
            values: [data.name, data.twitter, data.country, data.side]
        }

        conn.query(query, cb)
    }

    update(data, cb) {
        let query = {
            text: 'UPDATE team SET name = $2, twitter = $3, country = $4, side = $5 WHERE id = $1',
            values: [data.id, data.name, data.twitter, data.country, data.side]
        }

        conn.query(query, cb)
    }

    delete(id, cb) {
        let query = {
            text: 'DELETE FROM team WHERE id = $1',
            values: [id]
        }

        conn.query(query, cb)
    }
}

module.exports = TeamModel
