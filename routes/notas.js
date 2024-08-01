/* const express = require('express');
const router = express.Router();
const notasController = require('../controllers/notasController');

router.get('/', notasController.getAll);

module.exports = router; */



/* const express = require('express');
const router = express.Router();
const notasController = require('../controllers/notasController');

router.get('/', notasController.getAll);
router.get('/cursos', notasController.getCursos);

module.exports = router;
 */

const express = require('express');
const router = express.Router();
const notasController = require('../controllers/notasController');

router.get('/', notasController.getAll);
router.get('/cursos', notasController.getCursos);
router.get('/:id', notasController.getById); // Asegúrate de tener esta ruta
router.post('/', notasController.create);
router.put('/:id', notasController.update);
router.delete('/:id', notasController.delete);

module.exports = router;
