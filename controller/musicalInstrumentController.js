const MusicalInstrument = require('../models').MusicalInstrument;
module.exports = {
    findAll(req, res) {
        return MusicalInstrument.findAll({ limit: 10 })
            .then(data => { res.json(data); });
    },
    findById(req, res) {
        return MusicalInstrument.findByPk(req.params.id)
            .then(data => { res.json(data.toJSON()); });
    },
    create(req, res) {
        return MusicalInstrument.create({ name: req.body.name })
            .then(data => { res.json(data.toJSON()); });
    }
}