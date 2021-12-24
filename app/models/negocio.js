module.exports = (sequelize, DataTypes) => {
  const Negocios = sequelize.define('Negocios', {
    data: DataTypes.DATE,
    status: DataTypes.STRING,
    valor: DataTypes.STRING,
    funcionarioId: DataTypes.INTEGER,
    veiculoId: DataTypes.INTEGER
  });
  Negocios.associate = (models) => {
    Negocios.belongsTo(models.Funcionarios, {foreignKey: 'funcionarioId', as: 'funcionario'});
    Negocios.belongsTo(models.Veiculos, {foreignKey: 'veiculoId', as: 'veiculo'});
  };
  return Negocios;
}