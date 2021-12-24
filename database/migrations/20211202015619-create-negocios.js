'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Negocios', 
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        data: {
          type: DataTypes.DATE
        },
        status: {
          type: DataTypes.STRING
        },
        valor: {
          type: DataTypes.STRING
        },
        funcionarioId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            model: 'Funcionarios',
            key: 'id'
          }
        },
        veiculoId: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            model: 'Veiculos',
            key: 'id'
          }
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Negocios');
  }
};
