var express = require('express')
var router = express.Router()
const MusicalInstrumentController = require('../controller').musicalInstrument;
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
router.get("/", MusicalInstrumentController.findAll);
router.get("/:id", MusicalInstrumentController.findById);
router.post("/create", MusicalInstrumentController.create);
module.exports = router;