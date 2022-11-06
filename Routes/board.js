const express = require('express');

module.exports = (controller) => {
  const router = express.Router();

  router.get('/', controller.getBoardList);

  return router;
};
