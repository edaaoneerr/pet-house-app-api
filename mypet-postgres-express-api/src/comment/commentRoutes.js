const { Router } = require('express');
const router = Router();
const commentController = require('./commentController');

router.get('/', commentController.getComments);
router.get('/:id', commentController.getCommentById);
router.post('/', commentController.addComment);
router.delete('/:id', commentController.deleteComment);
router.patch('/:id', commentController.updateComment);

module.exports = router;