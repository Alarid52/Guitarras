const express = require('express');
const path = require('path');
const morgan = require('morgan');
const hbs = require('handlebars');
const exphbs = require('express-handlebars');

//Initializations
const app = express();
var guitarraRouter = require('./routes/guitarras.routes');
var frontRouter = require('./routes/front.routes');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.engine('.hbs', exphbs({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.json());

//Global variables


//Routes
app.use('/api', guitarraRouter);
app.use('/front', frontRouter);

//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;