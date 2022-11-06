const initDevModels = require('./DevTest/init-models');
// const initUserModels = require('./User/init-models');
// const initB2bModels = require('./B2b/init-models');

function initModels(sequelize) {
    const masterModels = initDevModels(sequelize);
    // const userModels = initUserModels(sequelize);
    // const b2bModels = initB2bModels(sequelize);

    return {
        ...masterModels,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;


