module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Veiculos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      marca: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      modelo: {
        type: DataTypes.STRING,
      },
      ano: {
        type: DataTypes.INTEGER,
      },
      km: {
        type: DataTypes.STRING,
      },
      cor: {
        type: DataTypes.STRING,
      },
      chassi: {
        type: DataTypes.STRING,
      },
      precoDeCompra: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Veiculos');
  }
};