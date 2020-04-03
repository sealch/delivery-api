const tableName = 'menus';

module.exports = {
    up: (queryInerface, Sequelize) => {
        return queryInerface.createTable(tableName, {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            price: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false
            }
        });
    },

    down: (queryInerface, Sequelize) => {
        return queryInerface.dropTable(tableName);
    }
};
