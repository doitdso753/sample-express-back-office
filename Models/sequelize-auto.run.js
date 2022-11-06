const SequelizeAuto = require('sequelize-auto');
const envConfig = require('../Config');

console.log(envConfig);

async function devTestRun() {
    const auto = new SequelizeAuto(envConfig.DB_NAME, envConfig.DB_USER, envConfig.DB_PASSWORD, {
        host: envConfig.DB_HOST,
        dialect: envConfig.DB_DIALECT,
        port: envConfig.DB_PORT,
        directory: './Models/DevTest',
        // where to write files
        caseModel: 'p',
        // convert snake_case column names to camelCase field names: user_id -> userId
        caseFile: 'p',
        // 모델 파일명 형식 p=PascalCase, c=camelCase, o=origin(default), u=UPPER_CASE, l=lower_case
        caseProp: 'c',
        singularize: false,
        // 복수형 테이블이름을 단수형으로 변경한다.
        lang: 'es6',
        additional: {
            timestamps: true,
            paranoid: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at'
        }
    });
    return auto.run();
}
async function userRun() {
    const auto = new SequelizeAuto(envConfig.DB_USER_BASE_NAME, envConfig.DB_USER, envConfig.DB_PASSWORD, {
        host: envConfig.DB_HOST,
        dialect: envConfig.DB_DIALECT,
        port: envConfig.DB_PORT,
        directory: './Models/User',
        // where to write files
        caseModel: 'p',
        // convert snake_case column names to camelCase field names: user_id -> userId
        caseFile: 'p',
        // 모델 파일명 형식 p=PascalCase, c=camelCase, o=origin(default), u=UPPER_CASE, l=lower_case
        caseProp: 'c',
        singularize: false,
        // 복수형 테이블이름을 단수형으로 변경한다.
        lang: 'es6',
        additional: {
            timestamps: true,
            paranoid: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at'
        }
    });
    return auto.run();
}
async function b2bRun() {
    const auto = new SequelizeAuto(envConfig.DB_B2B_NAME, envConfig.DB_USER, envConfig.DB_PASSWORD, {
        host: envConfig.DB_HOST,
        dialect: envConfig.DB_DIALECT,
        port: envConfig.DB_PORT,
        directory: './Models/B2b',
        // where to write files
        caseModel: 'p',
        // convert snake_case column names to camelCase field names: user_id -> userId
        caseFile: 'p',
        // 모델 파일명 형식 p=PascalCase, c=camelCase, o=origin(default), u=UPPER_CASE, l=lower_case
        caseProp: 'c',
        singularize: false,
        // 복수형 테이블이름을 단수형으로 변경한다.
        lang: 'es6',
        additional: {
            timestamps: true,
            paranoid: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at'
        }
    });
    return auto.run();
}
devTestRun().then(data => {
    console.log('Master DB :', Object.keys(data.tables));
});

// userRun().then((data) => {
//   console.log('User DB :', Object.keys(data.tables));
// });
//
// b2bRun().then((data) => {
//   console.log('B2B DB :', Object.keys(data.tables));
// });