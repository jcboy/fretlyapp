const express = require('express');

const router = express.Router();  // Créer un router qui va définir chaqu'une des routes déclaré dans ce fichier
const UsersController = require('../controllers/UserController');

const prefix = '/users';

// CRUD user

router.get('/', UsersController.index);

module.exports = {prefix,router};

