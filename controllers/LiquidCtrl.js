'use strict'
//Models
const Liquid = require('../models/Liquid');

//Controller
const LiquidCtrl = {};

LiquidCtrl.Create = async (req, res) => {
    //Extraemos el contenido de la peticion
    let { liquid } = req.body;
    try {
        //Creamos
        let newLiquid = new Liquid(liquid);
        //Guardamos
        await newLiquid.save();
        //Respuesta
        return res.status(201).json({liquid:newLiquid});
    } catch (error) {
        //Error
        return res.status(500).json(error);
    }
};

LiquidCtrl.Read = async (req, res) => {
    //Extraemos el contenido de la peticion
    let id = req.params.id;
    //Buscamos
    let liquid = await Liquid.findById(id);
    //Respuesta
    if (liquid) {
        return res.status(200).json({liquid});
    } else {
        return res.status(404).send('Recurso no encontrado');
    }
};


LiquidCtrl.Update = async (req, res) => {
    //Extraemos el contenido de la peticion
    let id = req.params.id;
    let { liquid } = req.body
    try {
        //Buscamos el objeto y lo actualizamos
        let UpLiquid = await Liquid.findByIdAndUpdate(id, liquid);
         //Validacion para el objeto
         if (!UpLiquid) return res.status(404).send('Recurso no encontrado');
         //Retorno de la informacion
        return res.status(200).send('Recurso actualizado');
    } catch (error) {
        //Error
        return res.status(500).json(error);
    }
};


LiquidCtrl.Delete = async (req, res) => {
    //Extraemos el contenido de la peticion
    let id = req.params.id;
    try {
         //Buscamos el objeto y lo eliminamos
        let DelLiquid = await Liquid.findByIdAndDelete(id);
        //Validacion para el objeto
        if (!DelLiquid) return res.status(404).send('Recurso no encontrado');
        //Retorno de la informacion
        return res.status(200).send('Recurso eliminado');
    } catch (error) {
        return res.status(500).json(error);
    }
};


LiquidCtrl.All = async (req, res) => {
    //Buscamos lo extras con desde el ultimo creado
    let liquids = await Liquid.find().sort('-created_at');
    if (liquids.length > 0) {
        //Retornamos los extras
        return res.status(200).json(liquids);
    } else {
        //Retornamos un mensaje
        return res.status(404).send('No hay Liquidos registrados.');
    }
};

module.exports = LiquidCtrl;