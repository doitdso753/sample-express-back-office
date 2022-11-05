const express = require('express');

const router = express.Router();

// const intranetConnection = require('./intranetConnection');

module.exports = (dependencies) => {
  // const controllers = {
  //   // imageHosting: new ESellersImageHostingController(),
  // };
  //
  // // 컨트롤러 의존성 주입 부분
  // for (const [, controller] of Object.entries(controllers)) {
  //   for (const [key, value] of Object.entries(dependencies)) {
  //     Reflect.set(controller, key, value);
  //   }
  //
  //   if (Reflect.has(controller, 'init')) {
  //     controller.init();
  //   }
  // }

  /**
   * 라우터 미들웨어 정의 부분
   */
  router.use((req, res, next) => {
    next();
  });

  router.get('/board', function(req, res, next) {
    res.send({
      code: 'success',
      data: [
        {
          id: 1,
          title: 'title1',
          content: 'content1',
        },
        {
          id: 2,
          title: 'title2',
          content: 'content2',
        },
        {
          id: 3,
          title: 'title3',
          content: 'content3',
        },
      ]
    });
  });

  return router;
};
