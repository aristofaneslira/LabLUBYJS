module.exports = (sequelize, DataTypes) => {
  const Funcionarios = sequelize.define('Funcionarios', {
    cpf: DataTypes.STRING,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    funcao: DataTypes.STRING
  });
  Funcionarios.associate = (models) => {
    Funcionarios.hasMany(models.Negocios, {as: 'negocios'})
  };
  return Funcionarios;
}