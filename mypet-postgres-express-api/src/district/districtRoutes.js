const { Router } = require('express');
const router = Router();
const districtController = require('./districtController');

router.get('/', districtController.getDistricts);
router.get('/:id', districtController.getDistrictById);
router.post('/', districtController.addDistrict);
router.delete('/:id', districtController.deleteDistrict);
router.patch('/:id', districtController.updateDistrict);

module.exports = router;