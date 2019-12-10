var mysql = require("mysql");
module.exports = function(req, res, next) {
    res.locals.connection = mysql.createConnection({
        host: 'remotemysql.com',
        user: '0dRBb8dJyh',
        password: 'cJtsAXvdbF',
        database: '0dRBb8dJyh'
    });
    res.locals.connect();
    next();
}