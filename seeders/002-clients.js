const tableName = 'clients';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(tableName, [
            { name: 'Oleg', address: 'Bulkina st. ap.124'},
            { name: 'Ihor', address: 'Pecherska st. ap.151'},
            { name: 'Dmitry', address: 'Sonyachna st. ap.21'},
            { name: 'Andriy', address: 'Vladimirska st. ap.311'},
        ]);
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete(tableName, null, {});
    }
};
