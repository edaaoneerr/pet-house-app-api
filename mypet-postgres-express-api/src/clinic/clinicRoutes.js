const { Router } = require('express');
const router = Router();
const clinicController = require('./clinicController');

router.get('/', clinicController.getClinics);
router.get('/:id', clinicController.getClinicById);
router.post('/', clinicController.addClinic);
router.delete('/:id', clinicController.deleteClinic);
router.patch('/:id', clinicController.updateClinic);

module.exports = router;