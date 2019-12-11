var express = require('express')
var router = express.Router()
    // middleware that is specific to this router

var accounts = [
    { id: 1, username: "trung", password: "123", email: "trungtrs1998@gmail.com" },
    { id: 2, username: "admin", password: "123", email: "trungtrs1@gmail.com" },
    { id: 3, username: "notok", password: "123", email: "trungtrs19@gmail.com" }
]
var users = [
    { id: 1, accountid: 1, username: "trung", img: "", phone: "12345678890", email: "trungtrs1998@gmail.com", skill: "Hát chính", musical: "", achievements: "" },
    { id: 2, accountid: 2, username: "admin", img: "", phone: "23450000009", email: "trungtrs1@gmail.com", skill: "Rap", musical: "Trống", achievements: "Giải nhất the voice" },
    { id: 3, accountid: 3, username: "notok", img: "", phone: "12345000009", email: "trungtrs19@gmail.com", skill: "Beatbox", musical: "Piano", achievements: "" }
]
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.post('/', function(req, res) {
    accounts.forEach(element => {
        if (element.username == req.body.username && element.password == req.body.password) {
            res.json({ message: 'Đăng nhập thành công', user: users.find(x => x.id === element.id) })
        };
        return;
    })
    res.json({ message: 'Đăng nhập thất bại' });
})

router.get('/:username', function(req, res) {
    accounts.forEach(element => {
        if (element.username == req.params.username) {
            res.json(element)
        };
        return;
    })
    res.json({ message: 'Không tìm thấy tài khoản' });
})

module.exports = router