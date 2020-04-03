const tableName = 'couriers';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(tableName, [
            { name: 'Ivan', delivery_service: 'Uber Eats'},
            { name: 'Petro', delivery_service: 'Glovo'},
            { name: 'Vladimir', delivery_service: 'Glovo'},
            { name: 'Misha', delivery_service: 'Raketa'},
            { name: 'Ihor', delivery_service: 'Glovo'},
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(tableName, null, {});
    }
};
