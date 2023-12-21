// user.model.js

const { DataTypes } = require('sequelize');
const sequelize = require('./../db');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

//criar tabelas
/*sequelize.sync({ force: true })
  .then(() => console.log('Tabelas criadas com sucesso'))
  .catch(error => console.error('Erro ao criar tabelas:', error));



User.belongsToMany(Role, { through: 'UserRoles' });
Role.belongsToMany(User, { through: 'UserRoles' });
*/


module.exports = {
  User,
  Role,
};



