const { Router } = require('express');
const router = Router();
const streetController = require('./streetController');

router.get('/', streetController.getStreets);
router.get('/:id', streetController.getStreetById);
router.post('/', streetController.addStreet);
router.delete('/:id', streetController.deleteStreet);
router.patch('/:id', streetController.updateStreet);

module.exports = router;