'use strict'
var mongoose = require('mongoose');
var app = require('./app');
require('dotenv').config();
app.set('port', process.env.PORT || 3000);

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost/dlivery', { useNewUrlParser: true })
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(()=>{
        console.log("Conexion establecida");
        // Creacion del servidor
        app.listen(app.get('port'), () => {
            console.log("Servidor corriendo en la url: localhost:"+process.env.PORT);
        });
    })
    .catch(err => console.log(err));