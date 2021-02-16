const User = require('../models/User');

class UsersController {

    index(req, res) {
        const query = User.find();
        query.select('');
        query.exec((err, users) => {
            res.send(users);
        });
    }
}

module.exports = new UsersController();