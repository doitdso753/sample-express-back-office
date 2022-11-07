const express = require('express');

module.exports = (controller) => {
  const router = express.Router();

  router.get('/', controller.getBoardList);
  router.get('/:id', controller.getBoardOne);
  router.post('/', controller.postBoardOne);
  router.put('/:id', controller.putBoardOne);
  router.delete('/:id', controller.deleteBoardOne);

  return router;
};
