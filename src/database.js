const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://usuario1:ibQOEtqC83JjtwD2@cluster0-y9uox.mongodb.net/informacion?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Conectado a MongoDB')
  })
  .catch(err => console.log(err));

  module.exports = mongoose;