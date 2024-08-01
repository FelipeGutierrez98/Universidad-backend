/* const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');

router.get('/', estudiantesController.getAll);
router.get('/:id', estudiantesController.getById);
router.put('/:id', estudiantesController.update);
router.delete('/:id', estudiantesController.delete); 

module.exports = router;

 
 */
const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesController');

router.get('/', estudiantesController.getEstudiantes);
router.get('/:id', estudiantesController.getEstudianteById);
router.post('/', estudiantesController.createEstudiante);
router.put('/:id', estudiantesController.updateEstudiante);
router.delete('/:id', estudiantesController.deleteEstudiante);

module.exports = router;
