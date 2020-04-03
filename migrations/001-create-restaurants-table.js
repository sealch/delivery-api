const tableName = 'restaurants';

module.exports = {
    up: (queryInerface, Sequelize) => {
        return queryInerface.createTable(tableName, {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });
    },

    down: (queryInerface, Sequelize) => {
        return queryInerface.dropTable(tableName);
    }
};
