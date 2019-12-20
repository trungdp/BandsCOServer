var express = require('express')
var router = express.Router()
const AccountController = require('../controller').account;
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
router.get("/", (req, res) => res.status(201).json({
    message: "This is account APIs"
}));
router.get("/:id", AccountController.findById);
router.post("/create", AccountController.create);
module.exports = router;