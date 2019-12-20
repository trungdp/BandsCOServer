var homes = require('./homeRoute');
var posts = require('./postRoute');
var musicalInstruments = require('./musicalInstrumentRoute');
var login = require('./loginRoute');
var signup = require('./signup');
var account = require('./accountRoute');
module.exports = (app) => {
    app.use('/home', homes);

    app.use('/musicalInstrument', musicalInstruments);

    app.use('/login', login);

    app.use('/signup', signup);

    app.use('/account', account);
}