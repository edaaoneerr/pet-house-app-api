const { Router } = require('express');
const router = Router();
const cityController = require('./cityController');

router.get('/', cityController.getCitys);
router.get('/:id', cityController.getCityById);
router.post('/', cityController.addCity);
router.delete('/:id', cityController.deleteCity);
router.patch('/:id', cityController.updateCity);

module.exports = router;