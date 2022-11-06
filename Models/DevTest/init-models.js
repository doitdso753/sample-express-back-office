const { DataTypes } = require('sequelize');
const _Board = require('./Board');

function initModels(sequelize) {
    const Board = _Board(sequelize, DataTypes);

    return {
        Board,
    }
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
