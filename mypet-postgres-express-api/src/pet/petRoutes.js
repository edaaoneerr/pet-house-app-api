const { Router } = require('express');
const router = Router();
const PetController = require('./PetController');

router.get('/', PetController.getPets);
router.get('/:id', PetController.getPetById);
router.post('/', PetController.addPet);
router.delete('/:id', PetController.deletePet);
router.patch('/:id', PetController.updatePet);

module.exports = router;