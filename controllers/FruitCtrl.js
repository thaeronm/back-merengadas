'use strict'
//Models
const Fruit = require('../models/Fruit');

//Controller
const FruitCtrl = {};

FruitCtrl.Create = async (req, res) => {
    //Extraemos el contenido de la peticion
    let { fruit } = req.body;
    try {
        //Creamos
        let newFruit = new Fruit(fruit);
        //Guardamos
        await newFruit.save();
        //Respuesta
        return res.status(201).json({fruit: newFruit});
    } catch (error) {
        //Error
        return res.status(500).json(error);
    }
};

FruitCtrl.Read = async (req, res) => {
    //Extraemos el contenido de la peticion
    let id = req.params.id;
    //Buscamos
    let fruit = await Fruit.findById(id);
    //Respuesta
    if (fruit) {
        return res.status(200).json({fruit});
    } else {
        return res.status(404).send('Recurso no encontrado');
    }
};


FruitCtrl.Update = async (req, res) => {
    //Extraemos el contenido de la peticion
    let id = req.params.id;
    let { fruit } = req.body
    try {
        //Buscamos el objeto y lo actualizamos
        let UpFruit = await Fruit.findByIdAndUpdate(id, fruit);
         //Validacion para el objeto
         if (!UpFruit) return res.status(404).send('Recurso no encontrado');
         //Retorno de la informacion
        return res.status(200).send('Recurso actualizado');
    } catch (error) {
        //Error
        return res.status(500).json(error);
    }
};


FruitCtrl.Delete = async (req, res) => {
    //Extraemos el contenido de la peticion
    let id = req.params.id;
    try {
         //Buscamos el objeto y lo eliminamos
        let DelFruit = await Fruit.findByIdAndDelete(id);
        //Validacion para el objeto
        if (!DelFruit) return res.status(404).send('Recurso no encontrado');
        //Retorno de la informacion
        return res.status(200).send('Recurso eliminado');
    } catch (error) {
        return res.status(500).json(error);
    }
};


FruitCtrl.All = async (req, res) => {
    //Buscamos lo extras con desde el ultimo creado
    let fruits = await Fruit.find().sort('-created_at');
    if (fruits.length > 0) {
        //Retornamos los extras
        return res.status(200).json(fruits);
    } else {
        //Retornamos un mensaje
        return res.status(404).send('No hay Frutas registradas.');
    }
};

module.exports = FruitCtrl;