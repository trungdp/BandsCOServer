var mysql = require("mysql");
module.exports = function(req, res, next) {
    res.locals.connection = mysql.createConnection({
        host: 'remotemysql.com',
        user: 'I70FUQH9jL',
        password: 'tMow83qcJJ',
        database: 'I70FUQH9jL'
    });
    res.locals.connect();
    next();
}