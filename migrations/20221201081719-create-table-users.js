'use strict';

module.exports = {
  up : async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      npm: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender:{
        type: Sequelize.ENUM,
        values:['Laki-Laki', 'Perempuan'],
        allowNull: false
      },
      jurusan:{
        type: Sequelize.STRING,
        allowNull: false
      },
      asal:{
        type: Sequelize.STRING,
        allowNull: false
      },
      umur:{
        type: Sequelize.STRING,
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      password:{
        type: Sequelize.STRING,
        allowNull: false
      },
      token:{
        type: Sequelize.TEXT,
        allowNull: false
      },
      created_ad:{
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      },
      updated_ad:{
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
        allowNull: true
      },
    });

    await queryInterface.addConstraint('project8', {
      type:'unique',
      fields: ['npm'],
      name: 'UNIQUE_NPM'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('project8');
  }
};