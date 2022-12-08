'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', 
    [
      {
        npm: '5190311121',
        nama: 'Hernan',
        gender: 'Perempuan',
        jurusan: 'Sistem Informasi',
        asal: 'Gunungkidul',
        umur: '21',
        email:'nan@gmail.com',
        password:await bcrypt.hash('123456',10),
        created_ad: new Date(),
      },
      {
        npm: '5190311171',
        nama: 'Nawasena',
        gender: 'Laki-laki',
        jurusan: 'Sistem Informasi',
        asal: 'Jogja',
        umur: '21',
        email:'nsena@gmail.com',
        password:await bcrypt.hash('123456',10),
        created_ad: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bultDelete('users', null, {});
  }
};