const Users = require('./auth.controller');
module.exports = (router) => {
    router.post('/register', Users.createUser); // createUser et loginUser seront des methodes
    router.post('/login', Users.loginUser);
}