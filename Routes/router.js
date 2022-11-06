const express = require('express');

const router = express.Router();

const BoardController = require('../App/Controller/BoardController');

const board = require('./board');

module.exports = (dependencies) => {
    const controllers = {
        board: new BoardController(),
    };

    // 컨트롤러 의존성 주입 부분
    for (const [, controller] of Object.entries(controllers)) {
        for (const [key, value] of Object.entries(dependencies)) {
            Reflect.set(controller, key, value);
        }

        if (Reflect.has(controller, 'init')) {
            controller.init();
        }
    }

    /**
     * 라우터 미들웨어 정의 부분
     */
    router.use((req, res, next) => {
        next();
    });

    router.use('/board/', board(controllers.board));

    return router;
};
