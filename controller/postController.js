const Post = require('../models').Post;
const PostType = require('../posttype');
module.exports = {
    create(req, res) {
        switch (req.body.type) {
            case PostType.FIND_BAND:
                Post.create({
                    name: req.body.name,
                    address: req.body.address,
                    image: req.body.image,
                    salary: req.body.salary
                })
                break;

            default:
                break;
        }
    }
}