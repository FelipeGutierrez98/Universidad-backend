const express = require('express');
const router = express.Router();
const asignacionesController = require('../controllers/asignacionesController');

router.get('/', asignacionesController.getAll);
router.post('/', asignacionesController.create);
router.get('/profesores', asignacionesController.getAllProfesores);
router.get('/cursos', asignacionesController.getAllCursos);
router.get('/:id', asignacionesController.getById);
router.put('/:id', asignacionesController.update);
router.delete('/:id', asignacionesController.delete);

module.exports = router;
