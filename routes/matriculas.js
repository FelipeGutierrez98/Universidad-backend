const express = require('express');
const router = express.Router();
const matriculasController = require('../controllers/matriculasController');

router.get('/', matriculasController.getAll);

module.exports = router;