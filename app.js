'use strict'
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
require('dotenv').config();

//cargar archivos rutas
var project_routes = require('./routes/project');

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rutas
app.use('/api', project_routes);
app.get('/' ,(req, res) => {res.send('Bienvenido a la api de merengadas')});

// Archivos estaticos
app.use(express.static(path.join(__dirname,'uploads')));

// exportar
module.exports = app;
