const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.set('useCreateIndex', true);
const userSchema = new mongoose.Schema({
    typeUser: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true // register date of create & update
});
module.exports = userSchema;