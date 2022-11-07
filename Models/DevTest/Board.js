const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => Board.init(sequelize, DataTypes);

class Board extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init({
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true,
                },
                title: {
                    type: Sequelize.STRING(50),
                    allowNull: true,
                    unique: false
                },
                content: {
                    type: Sequelize.STRING(200),
                    allowNull: true,
                    unique: false
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: false,
                paranoid: false,
                // modelName: 'User',
                createdAt: 'created_at',
                updatedAt: 'updated_at',
                deletedAt: 'deleted_at',
                tableName: 'board',
                charset: 'utf8mb4',
                collate: 'utf8mb4_general_ci'
            });
    }
}