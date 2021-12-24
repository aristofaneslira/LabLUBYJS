module.exports = (sequelize, DataTypes) => {
  const Veiculos = sequelize.define('Veiculos', {
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    ano: DataTypes.INTEGER,
    km: DataTypes.STRING,
    cor: DataTypes.STRING,
    chassi: DataTypes.STRING,
    precoDeCompra: DataTypes.STRING,
    status: DataTypes.STRING
  });
  return Veiculos;
}