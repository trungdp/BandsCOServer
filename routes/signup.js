var express = require('express')
var router = express.Router()
    // middleware that is specific to this router
var accounts = [
    { id: 1, username: "trung", password: "123", email: "trungtrs1998@gmail.com" },
    { id: 2, username: "admin", password: "123", email: "trungtrs1@gmail.com" },
    { id: 3, username: "notok", password: "123", email: "trungtrs19@gmail.com" }
]
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.post('/', function(req, res) {
    var account = { id: 6, username: req.body.username, password: req.body.password, email: req.body.email }
    var user = { id: 6, accountid: account.id, username: account.username, img: "", phone: "", email: account.email, skill: "", musical: "", achievements: "" }

    if (accounts.find(x => x.username === account.username) == null && accounts.find(x => x.email === account.email) == null)
        res.json({ message: 'Đăng ký thành công', user: user });
    else
        res.json({ message: 'Đăng ký thất bại' });
})

module.exports = router