'use strict'
//Models
const Drink = require('../models/Drink');

//Controller
const DrinkCtrl = {};

DrinkCtrl.Create = async (req, res) => {
    //Extraemos el contenido de la peticion
    let drink = req.body;
    try {
        //Creamos
        let newDrink = new Drink(drink);
        //Guardamos
        await newDrink.save();
        //Respuesta
        return res.status(201).json({drink: newDrink});
    } catch (error) {
        //Error
        return res.status(500).json(error);
    }
};

DrinkCtrl.Read = async (req, res) => {
    //Extraemos el contenido de la peticion
    let id = req.params.id;
    //Buscamos
    let drink = await Drink.findById(id)
        .populate('protein').populate('liquid').populate('fruits');
    //Respuesta
    if (drink) {
        return res.status(200).json({drink});
    } else {
        return res.status(404).send('Recurso no encontrado');
    }
};


DrinkCtrl.Update = async (req, res) => {
    //Extraemos el contenido de la peticion
    let id = req.params.id;
    let { drink } = req.body
    try {
        //Buscamos el objeto y lo actualizamos
        let UpDrink = await Drink.findByIdAndUpdate(id, drink);
         //Validacion para el objeto
         if (!UpDrink) return res.status(404).send('Recurso no encontrado');
         //Retorno de la informacion
        return res.status(200).send('Recurso actualizado');
    } catch (error) {
        //Error
        return res.status(500).json(error);
    }
};


DrinkCtrl.Delete = async (req, res) => {
    //Extraemos el contenido de la peticion
    let id = req.params.id;
    try {
         //Buscamos el objeto y lo eliminamos
        let DelDrink = await Drink.findByIdAndDelete(id);
        //Validacion para el objeto
        if (!DelDrink) return res.status(404).send('Recurso no encontrado');
        //Retorno de la informacion
        return res.status(200).send('Recurso eliminado');
    } catch (error) {
        return res.status(500).json(error);
    }
};

DrinkCtrl.All = async (req, res) => {
    //Buscamos lo extras con desde el ultimo creado
    const drinks = await Drink.find().sort('-created_at')
        .populate('protein').populate('liquid').populate('fruits');
    if (drinks.length > 0) {
        //Retornamos los extras
        return res.status(200).json(drinks);
    } else {
        //Retornamos un mensaje
        return res.status(404).send('No hay Bebidas registradas.');
    }
};

module.exports = DrinkCtrl;