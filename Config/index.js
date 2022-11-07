const fs = require('fs');
const dotenv = require('dotenv');

// 파일을 읽는다 process.env 를 사용하지 않기 위해 아래와 같이 동작을 하도록 한다.
// const configPath = `${process.cwd()}/Config/.env.${process.env.NODE_ENV ?? 'development'}`;
const configPath = `${process.cwd()}/Config/.env`;

// 설정 파일을 읽는다.
const loadConfig = dotenv.parse(fs.existsSync(configPath) ? fs.readFileSync(configPath) : '');
// 비어 있거나 정확하지 않은 데이터를 교정하기 위해 환경 설정을 재구 성한다.

const defaultConfig = {
  // Express 설정
  HTTP_PORT: 80,
  EXPRESS_JSON_SIZE: '10mb',
  EXPRESS_URLENCODED_SIZE: '10mb',
  BODYPARSER_JSON_SIZE: '10mb',
  BODYPARSER_URLENCODED_SIZE: '10mb',

  // DB 설정
  DB_HOST: 'localhost',
  DB_NAME: 'dev_test',
  DB_USER: 'root',
  DB_PASSWORD: '1234',
  DB_PORT: 3306,
  DB_DIALECT: 'mariadb',
  DB_TIMEZONE: '+00:00',
  DB_MAX_POOL: 5,
  DB_MIN_POOL: 2,
};

module.exports = { ...defaultConfig, ...loadConfig };
