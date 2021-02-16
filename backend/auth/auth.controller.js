const User = require('./auth.dao');


exports.createUser = (req, res, next) => { // method that creates a user
    const newUser = {
        typeUser: req.body.typeUser, email: req.body.email, password: req.body.password,
    }

    User.create(newUser, (err, user) => {
        if (err && err.code === 11000) return res.status(409).send('Email already exists');
        if (err) return res.status(500).send('Server error');

        const dataUser = {
            typeUser: user.typeUser,
            email: user.email,
            password: user.password

        }
        // response
        res.send({ dataUser });
    });

}

exports.loginUser = (req, res, next) => {
    const userData = {
        email: req.body.email,
        password: req.body.password
    }

    User.findOne({email: userData.email}, (err, user)=> { // findOne Mongoose queries
        if(err) return res.status(500).send('Server error');

        if(!user) {
            res.status(409).send({ message: 'Email does not exist' });
        } else {
            const resultPassword = userData.password === user.password;
            if (resultPassword) {

                res.send({userData}); // response to the Front-end
            } else {
                res.status(409).send({message: 'password wrong'})
            }
        }
    })
}

