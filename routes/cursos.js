const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

router.get('/', cursosController.getAll);

module.exports = router;
