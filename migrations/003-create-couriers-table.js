const tableName = 'couriers';

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
            delivery_service: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        });
    },

    down: (queryInerface, Sequelize) => {
        return queryInerface.dropTable(tableName);
    }
};
