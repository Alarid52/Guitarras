var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Guitarra = require('../models/guitarra');

//GET muestra todos los documentos
router.get('/', (req, res, next) => {
    Guitarra.find({}, (err, datos) => {
        if (err)
            res.status(500).json({ error: "Error en la consulta" });
        if (datos)
            res.status(200).json(datos);
    });
});

//GET muestra documento por id
router.get('/:idGui', (req, res, next) => {
    Guitarra.findOne({ id: req.params.idGui }, (err, datos) => {
        if (datos == null)
            res.status(404).json({ mensaje: "No existe" });
        else
            res.status(200).json(datos);
    });
});

//POST crea documento
router.post('/', (req, res, next) => {
    console.log(req.body);
    var guitar = Guitarra({
        id: req.body.id,
        modelo: req.body.modelo,
        marca: req.body.marca,
        color: req.body.color,
        largo: req.body.largo,
        ancho: req.body.ancho,
        peso: req.body.peso,
        tipo: req.body.tipo,
        numCuerdas: req.body.numCuerdas,
        imagen: req.body.imagen
      });
      guitar.save((err, datos) => {
        if (err)
            res.status(404).json({ mensaje: "Error al guardar" });
        else
            res.status(201).json(datos);
      });
});

//PATCH modifica documento por id
router.patch('/:idGui', (req,res, next) => {
    Guitarra.findOneAndUpdate({id:req.params.idGui},{$set:req.body},{new: true},(err, datos) => {
        if (err)
            res.status(404).json({mensaje:"Error al actualizar"});
        else
            //retorna documento modificado
            res.status(200).json(datos);       
    });
});

//Validación de DELETE
router.delete('/', (req, res, next) => {
    res.status(405).json({ mensaje: "Acción no permitida" });
});

//DELETE elimina documento por id
router.delete('/:idGui', (req, res, next) => {
    Guitarra.findOneAndDelete({ id: req.params.idGui }, (err, datos) => {
        if (err)
            res.status(404).json(err);
        else
            res.status(200).json(datos);
    });
});

module.exports = router;