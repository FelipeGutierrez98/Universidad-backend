/* const express = require('express');
const router = express.Router();
const departamentosController = require('../controllers/departamentosController');

router.get('/', departamentosController.getAll);

module.exports = router; */

const express = require('express');
const router = express.Router();
const departamentosController = require('../controllers/departamentosController');

router.get('/', departamentosController.getAll);
router.get('/nombres', departamentosController.getDistinctNombres);
router.get('/facultades', departamentosController.getDistinctFacultades);
router.post('/', departamentosController.create);
router.get('/:id', departamentosController.getById);
router.put('/:id', departamentosController.update);
router.delete('/:id', departamentosController.delete);

module.exports = router;
