'use strict'

const TeamController = require('../controllers/team-controller'),
    router = require('express').Router(),
    tc = new TeamController()

router
    .get('/', tc.getAll)
    .get('/agregar', tc.addForm)
    .post('/', tc.save)
    .get('/editar/:id', tc.getOne)
    .put('/actualizar/:id', tc.update)
    .delete('/eliminar/:id', tc.delete)
    .use( tc.error404 )

module.exports = router
