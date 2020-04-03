const tableName = 'orders';

module.exports = {
    up: (queryInerface, Sequelize) => {
        return queryInerface.createTable(tableName, {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            restaurant_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'restaurants',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            client_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'clients',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            courier_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'couriers',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            menu_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'menus',
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            order_time: {
                type: Sequelize.TIME,
                allowNull: false
            },
            delivery_time: {
                type: Sequelize.TIME
            }
        });
    },

    down: (queryInerface, Sequelize) => {
        return queryInerface.dropTable(tableName);
    }
};
