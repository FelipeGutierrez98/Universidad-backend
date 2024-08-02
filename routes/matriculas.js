const express = require('express');
const router = express.Router();
const matriculasController = require('../controllers/matriculasController');

router.get('/estudiantes', matriculasController.getAllEstudiantes);
router.get('/cursos', matriculasController.getAllCursos);
router.get('/:id', matriculasController.getById);
router.put('/:id', matriculasController.update);
router.delete('/:id', matriculasController.remove);
router.get('/', matriculasController.getAll);
router.post('/', matriculasController.create);

module.exports = router;

