var express = require('express')
var router = express.Router()
const PostController = require('../controller').post;
router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })
    // router.get("/", (req, res) => res.status(201).json({
    //     message: "This is Home"
    // }));
    // router.get("/posts", PostController.getPosts);
module.exports = router;