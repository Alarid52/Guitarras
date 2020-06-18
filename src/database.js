const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Admin:7kOzSThmN9G65Iim@guitarras-c0wyn.mongodb.net/guitarras?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('Conectado a MongoDB')
  })
  .catch(err => console.log(err));

  module.exports = mongoose;