'use strict';

require('./db/config');

const app_config = require('./config/app_config.js');

//const express = require('express');
const router = app_config.router;
const app = app_config.app;
const UserAPI = require('./modules/Users/route');
const GruposAPI = require('./modules/Grupos/route');
const UsuariosGrupoAPI = require('./modules/UsuariosGrupo/route');
const ChamadasRecebidasAPI = require('./modules/ChamadasRecebidas/route');
const ChamadasRealizadasAPI = require('./modules/ChamadasRealizadas/route');


// Cria o módulo de roteamento
//router.all('*', (req, res, next) => {
//  res.setHeader('Webschool', 'FODA');
//  console.log('all');
//  next();
//});


app.use('/api/usuarios', UserAPI);
app.use('/api/grupos', GruposAPI);
app.use('/api/usuario-grupo', UsuariosGrupoAPI);
app.use('/api/chamadas-recebidas', ChamadasRecebidasAPI);
app.use('/api/chamadas-realizadas', ChamadasRealizadasAPI);

app.listen(3000, () => { console.log('Servidor rodando em localhost:3000'); } );
