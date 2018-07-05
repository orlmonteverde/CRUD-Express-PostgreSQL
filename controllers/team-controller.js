'use strict'

const TeamModel = require('../models/team-model'),
    tm = new TeamModel()

class TeamController {

    getAll(request, response, next) {
        tm.getAll((err, data) => {
            if (!err) {
                response.render('index', {
                    title: 'Indentation War',
                    data: data.rows
                })
            }
        })
    }

    getOne(request, response, next) {
        let id = request.params.id
        console.log(id)

        tm.getOne(id, (err, data) => {
            if (!err) {
                response.render('edit', {
                    title: 'Editar Contacto',
                    data: data.rows
                })
            }
        })
    }

    save(request, response, next) {
        let user = {
            name: request.body.name,
            twitter: request.body.twitter,
            country: request.body.country,
            side: request.body.side
        }

        console.log(user)

        tm.save(user, (err) => {
            if (!err) {
                response.redirect('/')
            } else {
                return next(new Error('Registro no guardado'))
            }
        })
    }

    delete(request, response, next) {
        let id = request.params.id
        console.log(id)

        tm.delete(id, (err, data) => {
            if (!err) {
                response.redirect('/')
            } else {
                return next(new Error('Registro no encontrado'))
            }
        })
    }

    update(request, response, next) {
        let user = {
            id: request.body.id,
            name: request.body.name,
            twitter: request.body.twitter,
            country: request.body.country,
            side: request.body.side
        }

        console.log(user)

        tm.update(user, (err) => {
            if (!err) {
                response.redirect('/')
            } else {
                return next(new Error('Registro no guardado'))
            }
        })
    }

    addForm(request, response, next) {
        response.render('add', {title: 'Agregar Contacto'})
    }

    error404(request, response, next) {
        let err = new Error()
        err.status = 404
        err.statusText = 'NOT FOUND'

        response.render('error', {error: err})
    }
}

module.exports = TeamController
