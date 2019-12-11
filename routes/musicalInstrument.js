var express = require('express')
var router = express.Router()
var data = [
        { id: 1, name: "Guitar" },
        { id: 2, name: "Piano" },
        { id: 3, name: "Cajon - Hithat" },
        { id: 4, name: "Beatbox" },
        { id: 5, name: "Drum" }
    ]
    // middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
router.get('/', function(req, res) {
    res.send(data);
})
router.get('/:id', function(req, res) {
    data.forEach(element => {
        if (element.id == req.params.id) {
            res.send(element);
            break;
        }
    });
})

module.exports = router