const Post = require('../models').Post;
const PostType = require('../posttype');
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
    },
    getPosts(req, res) {
        return Post.findAll({ limit: 10 })
            .then(async posts => {
                var data = [];
                await posts.forEach(async post => {
                    var json = { type: post.type, postcontent: "" }
                    switch (post.type) {
                        case PostType.FIND_BAND:
                            json.postcontent = {
                                id: post.id,
                                name: post.name,
                                address: post.address,
                                image: post.image,
                                salary: post.salary,
                                phone: post.phone,
                                musicals: post.musical,
                                device: post.device,
                                require: post.require,
                                createdAt: post.createdAt,
                                updatedAt: post.updatedAt
                            }
                            data.push(json);
                            break;
                        case PostType.FIND_MEMBER:
                            var memberIDs = post.members.split(',');
                            var members = [];
                            await memberIDs.forEach(async id => {
                                await User.findByPk(id).then(async member => {
                                    await members.push(member);
                                    if (members.length === memberIDs.length) {
                                        json.postcontent = {
                                            id: post.id,
                                            createdAt: post.createdAt,
                                            updatedAt: post.updatedAt,
                                            name: post.name,
                                            kindofmusic: post.kindofmusic,
                                            achivement: post.achivement,
                                            phone: post.phone,
                                            members: members,
                                            musicals: post.musicals
                                        }
                                        data.push(json);
                                    }
                                })
                            })
                            break;
                        case PostType.JOIN_BAND:
                            await User.findByPk(post.postedby)
                                .then(async user => {
                                    json.postcontent = {
                                        id: post.id,
                                        createdAt: post.createdAt,
                                        updatedAt: post.updatedAt,
                                        postedby: user,
                                        exbands: post.exbands,
                                        freetime: post.freetime,
                                        aspiration: post.aspiration
                                    }
                                }).then(async() => { await data.push(json); })

                            break;
                        default:
                            break;
                    }
                    console.log(json)
                });
                res.json(data);
            })
    }
}