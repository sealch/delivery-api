const tableName = 'menus';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(tableName, [
            { name: 'Pizza pepperoni', price: 120.99 },
            { name: 'Pizza with pineapples', price: 140.20 },
            { name: 'Pizza with olives', price: 150 },
            { name: 'Pizza mammamia', price: 110.99 },
            { name: 'Pizza with secret sauce', price: 115.99 },
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(tableName, null, {});
    }
};
