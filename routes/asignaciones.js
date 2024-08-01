const express = require('express');
const router = express.Router();
const asignacionesController = require('../controllers/asignacionesController');

router.get('/', asignacionesController.getAll);

module.exports = router;