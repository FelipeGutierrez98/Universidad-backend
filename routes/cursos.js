// routes/cursos.js
const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController');

router.get('/', cursosController.getAll);
router.get('/nombres', cursosController.getCourseNames);
router.post('/', cursosController.create);
router.get('/:id', cursosController.getById);
router.put('/:id', cursosController.update);
router.delete('/:id', cursosController.remove);

module.exports = router;
