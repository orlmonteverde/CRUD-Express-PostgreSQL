'use strict';

const express = require('express'),
    pug = require('pug'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    methodOverride = require('method-override'),
    routes = require('./routes/team-router'),
    favicon = require('serve-favicon')(`${__dirname}/public/favicon.png`),
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 5000),

    methodOverrideConfig = (req, res) => {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            // look in urlencoded POST bodies and delete it
            let method = req.body._method;
            delete req.body._method;
            return method;
        }
    }

let app = express()

app
    .set('views', viewDir)
    .set('view engine', 'pug')
    .set('port', port)

    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    .use(publicDir)
    .use(favicon)
    .use(morgan('dev'))
    .use(methodOverride(methodOverrideConfig))
    .use(routes)

module.exports = app
