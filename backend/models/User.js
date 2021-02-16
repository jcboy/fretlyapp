const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    typeUser: String
});

module.exports = mongoose.model('User', UserSchema);
