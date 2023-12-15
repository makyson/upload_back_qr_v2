
const Sequelize = require('sequelize');

const sequelize = new Sequelize('bb','root','',{
    dialect: 'mysql',
    host:'localhost',
    port: 3306


});sequelize.authenticate().then(() => {
    console.log('successfully.');
 }).catch((error) => {
    console.error('deu banco: ', error);
 });

module.exports = sequelize;



