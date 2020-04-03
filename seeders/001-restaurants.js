const tableName = 'restaurants';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, [
      { name: 'Dominos', address: 'Shevchenko st., 77'},
      { name: 'Pizza Hut', address: 'Sichovih striltsiv st., 12'},
      { name: 'Pizza cat', address: 'Borshagivska st., 42'},
      { name: 'Tasty pizza', address: 'Saksaganskogo st., 51'},
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  }
};
