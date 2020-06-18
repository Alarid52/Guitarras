var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var guitarraSchema = new Schema({

    id: {type: Number},
    modelo: {type: String},
    marca: {type: String},
    color: {type: String},
    largo: {type: Number},
    ancho: {type: Number},
    peso: {type: Number},
    tipo: {type: String},
    numCuerdas: {type: Number},
    imagen: {type: String}

});

module.exports = mongoose.model('Guitarra', guitarraSchema);