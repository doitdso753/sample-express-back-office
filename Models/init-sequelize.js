// Sequelize ORM
const Sequelize = require('sequelize');
module.exports = envConfig => new Sequelize(envConfig.DB_NAME, envConfig.DB_USER, envConfig.DB_PASSWORD, {
    dialect: envConfig.DB_DIALECT,
    timezone: envConfig.DB_TIMEZONE,
    host: envConfig.DB_HOST,
    port: envConfig.DB_PORT,
    logging: false,
    timestamps: true,
    // 데이터 베이스 서버의 Timezone 이 UTC로 설정이 되어 있고 이것을 KST로 변경하기 위해
    dialectOptions: {
        autoJsonMap: false,
        // timezone,
        // connectTimeout: 60000,
        idleTimeout: 0,
        // UTC를 사용하지 않으며
        // 현재 연결에서 의미 없음
        useUTC: false,
        // date(timestamp)를 문자열로 인식하며
        dateStrings: true,
        // 쿼리 실패 (DB 접속 실패 등의 문제 등으로 재시도)
        retry: {
            max: 3
        },
        // typeCast를 진행한다.
        typeCast(field, next) {
            if (['DATETIME', 'TIMESTAMP'].includes(field.type)) {
                return field.string();
            }
            return next();
        }
    },
    pool: {
        max: parseInt(envConfig.DB_MAX_POOL, 10),
        min: parseInt(envConfig.DB_MIN_POOL, 10)
    }
});