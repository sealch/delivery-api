const tableName = 'orders';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(tableName, [
            { restaurant_id: '1', client_id: '2', courier_id: '1', menu_id: '2', order_time: '13:00:00', delivery_time: '13:50:20' },
            { restaurant_id: '2', client_id: '2', courier_id: '1', menu_id: '1', order_time: '15:50:13', delivery_time: '16:20:01' },
            { restaurant_id: '2', client_id: '2', courier_id: '1', menu_id: '3', order_time: '18:50:14', delivery_time: '19:20:12' },
            { restaurant_id: '2', client_id: '2', courier_id: '1', menu_id: '3', order_time: '10:12:53', delivery_time: '11:00:00' },
            { restaurant_id: '2', client_id: '1', courier_id: '1', menu_id: '2', order_time: '14:10:43', delivery_time: '14:30:05' },
            { restaurant_id: '3', client_id: '2', courier_id: '2', menu_id: '2', order_time: '11:20:15', delivery_time: '12:00:21' },
            { restaurant_id: '2', client_id: '1', courier_id: '2', menu_id: '1', order_time: '21:00:51', delivery_time: '21:40:16' },
            { restaurant_id: '1', client_id: '1', courier_id: '3', menu_id: '1', order_time: '20:30:41', delivery_time: '21:05:17' },
            { restaurant_id: '2', client_id: '2', courier_id: '3', menu_id: '1', order_time: '13:50:13', delivery_time: '14:20:01' },
            { restaurant_id: '1', client_id: '1', courier_id: '3', menu_id: '2', order_time: '16:20:42', delivery_time: null },
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(tableName, null, {});
    }
};
