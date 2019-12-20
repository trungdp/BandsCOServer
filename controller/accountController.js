const Account = require('../models').Account;
const User = require('../models').User;
module.exports = {
    create(req, res) {
        return Account.create({ username: req.body.username, password: req.body.password })
            .then(account => {
                User.create({ accountid: account.id, name: account.username, email: req.body.email })
                    .then(user => {
                        res.status(201).json(user)
                    })
                    .catch(error => res.status(404).json(error));
            })
            .catch(error => res.status(404).json(error));
    },
    findById(req, res) {
        return Account.findByPk(req.params.id)
            .then(data => { res.json(data.toJSON()); });
    }
}