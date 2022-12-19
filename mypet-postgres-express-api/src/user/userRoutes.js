const { Router } = require('express');
const router = Router();
const userController = require('./userController');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.addUser);
router.delete('/:id', userController.deleteUser);
router.patch('/:id', userController.updateUser);

module.exports = router;