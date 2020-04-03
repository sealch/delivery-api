const tableName = 'orders';

module.exports = {
    up: (queryInerface, Sequelize) => {
        return queryInerface.createTable(tableName, {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            restaurant_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            client_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            courier_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            menu_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            order_time: {
                type: Sequelize.DATE,
                allowNull: false
            },
            delivery_time: {
                type: Sequelize.DATE
            }
        });
    },

    down: (queryInerface, Sequelize) => {
        return queryInerface.dropTable(tableName);
    }
};
