const { Router } = require('express');
const router = Router();
const addressController = require('./addressController');

router.get('/', addressController.getAddress);
router.get('/:id', addressController.getAddressById);
router.post('/', addressController.addAddress);
router.delete('/:id', addressController.deleteAddress);
router.patch('/:id', addressController.updateAddress);

module.exports = router;