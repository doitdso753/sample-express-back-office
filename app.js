const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const envConfig = require('./Config');

// Sequelize Connect initialize
const sequelize = require('./Models/init-sequelize')(envConfig);

// Sequelize ORM init Model
const initModels = require('./Models/init-models');

// 모델 초기화
const models = initModels(sequelize);

// Controller에 의존성 객체를 전달한다.
const router = require('./Routes/router')({
    envConfig,
    sequelize,
    models,
});

const app = express();

app.use(logger('dev'));
app.use(express.json({ limit: envConfig.EXPRESS_JSON_SIZE }));
app.use(express.urlencoded({ limit: envConfig.EXPRESS_URLENCODED_SIZE, extended: true }));
app.use(cookieParser());

// 라우팅
app.use(router);

module.exports = app;
