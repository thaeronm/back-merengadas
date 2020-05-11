'use strict'
//Models
const Protein = require('../models/Protein');

//Controller
const ProteinCtrl = {};

ProteinCtrl.Create = async (req, res) => {
    //Extraemos el contenido de la peticion
    let { protein } = req.body;
    try {
        //Creamos
        let newProtein = new Protein(protein);
        //Guardamos
        await newProtein.save();
        //Respuesta
        return res.status(201).json({protein: newProtein});
    } catch (error) {
        //Error
        return res.status(500).json(error);
    }
};

ProteinCtrl.Read = async (req, res) => {
    //Extraemos el contenido de la peticion
    let id = req.params.id;
    //Buscamos
    let protein = await Protein.findById(id);
    //Respuesta
    if (protein) {
        return res.status(200).json({protein});
    } else {
        return res.status(404).send('Recurso no encontrado');
    }
};


ProteinCtrl.Update = async (req, res) => {
    //Extraemos el contenido de la peticion
    let id = req.params.id;
    let { protein } = req.body
    try {
        //Buscamos el objeto y lo actualizamos
        let UpProtein = await Protein.findByIdAndUpdate(id, protein);
         //Validacion para el objeto
         if (!UpProtein) return res.status(404).send('Recurso no encontrado');
         //Retorno de la informacion
        return res.status(200).send('Recurso actualizado');
    } catch (error) {
        //Error
        return res.status(500).json(error);
    }
};


ProteinCtrl.Delete = async (req, res) => {
    //Extraemos el contenido de la peticion
    let id = req.params.id;
    try {
         //Buscamos el objeto y lo eliminamos
        let DelProtein = await Protein.findByIdAndDelete(id);
        //Validacion para el objeto
        if (!DelProtein) return res.status(404).send('Recurso no encontrado');
        //Retorno de la informacion
        return res.status(200).send('Recurso eliminado');
    } catch (error) {
        return res.status(500).json(error);
    }
};


ProteinCtrl.All = async (req, res) => {
    //Buscamos lo extras con desde el ultimo creado
    let proteins = await Protein.find().sort('-created_at');
    if (proteins.length > 0) {
        //Retornamos los extras
        return res.status(200).json(proteins);
    } else {
        //Retornamos un mensaje
        return res.status(404).send('No hay Proteinas registradas.');
    }
};

module.exports = ProteinCtrl;