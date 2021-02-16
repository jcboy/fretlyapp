const mongoose = require('mongoose');
// const dbURL = require('./properties');

mongoose.connect('mongodb://localhost/fretlydb', {useNewUrlParser: true})
    .then( () => {
        console.log('Successfully connected ! Yeahh !! ')
    } )
    .catch( (err) => {
        console.error('error:', err);
    });

module.exports = mongoose.connection;