'use strict';

require('./db/config');

const express = require('express');
const path = require('path');
const favicon = require('static-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const UserAPI = require('./modules/Users/route');
const GruposAPI = require('./modules/Grupos/route');
const UsuariosGrupoAPI = require('./modules/UsuariosGrupo/route');
const ChamadasRecebidasAPI = require('./modules/ChamadasRecebidas/route');
const ChamadasRealizadasAPI = require('./modules/ChamadasRealizadas/route');

const app = express()

var allowCors = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //res.header('Access-Control-Allow-Credentials', 'true');
    next();
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon());
app.use(logger('dev'));
app.use(allowCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/usuarios', UserAPI);
app.use('/api/grupos', GruposAPI);
app.use('/api/usuario-grupo', UsuariosGrupoAPI);
app.use('/api/chamadas-recebidas', ChamadasRecebidasAPI);
app.use('/api/chamadas-realizadas', ChamadasRealizadasAPI);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

module.exports = app;
