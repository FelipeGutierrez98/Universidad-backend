/* const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');

router.get('/especialidades', profesoresController.getEspecialidades); // Colocada antes de cualquier ruta con parámetros
router.get('/', profesoresController.getAll);
router.get('/:id', profesoresController.getById);
router.post('/', profesoresController.create);
router.put('/:id', profesoresController.update);
router.delete('/:id', profesoresController.delete);

module.exports = router;

 */


const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');

router.get('/', profesoresController.getAll);
router.get('/especialidades', profesoresController.getDistinctEspecialidades);
router.get('/:id', profesoresController.getById); // Añadir esta línea
router.post('/', profesoresController.create);
router.put('/:id', profesoresController.update);
router.delete('/:id', profesoresController.delete);

module.exports = router;


/* const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesoresController');

router.get('/', profesoresController.getAll);
router.get('/especialidades', profesoresController.getDistinctEspecialidades);
router.post('/', profesoresController.create);
router.put('/:id', profesoresController.update);
router.delete('/:id', profesoresController.delete);

module.exports = router;
 */

