const { Router } = require('express');
const router = Router();
const vetController = require('./vetController');

router.get('/', vetController.getVets);
router.get('/:id', vetController.getVetById);
router.post('/', vetController.addVet);
router.delete('/:id', vetController.deleteVet);
router.patch('/:id', vetController.updateVet);

module.exports = router;