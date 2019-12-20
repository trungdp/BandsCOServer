// var express = require('express')
// var router = express.Router()
// var posts = [{
//             type: "FIND MEMBER",
//             postcontent: {
//                 id: 1,
//                 bandname: "Team 7296",
//                 musictype: "R&B",
//                 achivements: "Giải nhất",
//                 phone: "123456789",
//                 members: [{ id: 1, accountid: 1, username: "trung", img: "", phone: "12345678890", email: "trungtrs1998@gmail.com", skill: "Hát chính", musical: "", achievements: "" },
//                     { id: 2, accountid: 2, username: "admin", img: "", phone: "23450000009", email: "trungtrs1@gmail.com", skill: "Rap", musical: "Trống", achievements: "Giải nhất the voice" }
//                 ],
//                 musical: "Trống, Guitar"
//             }
//         },
//         {
//             type: "FIND BAND",
//             postcontent: {
//                 id: 1,
//                 name: "Phòng trà Đồng Dao",
//                 address: "Phường 8, Đà Lạt",
//                 img: "",
//                 salary: "Giải nhất",
//                 phone: "123456789",
//                 musical: "Trống, Guitar",
//                 device: "Loa, micro, đèn",
//                 require: ""
//             }
//         },
//         {
//             type: "JOIN BAND",
//             postcontent: {
//                 id: 1,
//                 user: { id: 1, accountid: 1, username: "trung", img: "", phone: "12345678890", email: "trungtrs1998@gmail.com", skill: "Hát chính", musical: "", achievements: "" },
//                 exbands: "Team A, Team B",
//                 freetime: "Thứ 7, chủ nhật",
//                 aspiration: "Được trau dồi kỹ năng"
//             }
//         }
//     ]
//     // middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })
// router.get('/posts', function(req, res) {
//     res.json(posts)
// })

// module.exports = router




var express = require('express')
var router = express.Router()
const HomeController = require('../controller').home;
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
router.get("/", (req, res) => res.status(201).json({
    message: "This is Home"
}));
router.get("/posts", HomeController.getPosts);
module.exports = router;