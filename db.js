require('dotenv').config();

const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.db_nome,process.env.db_user,process.env.DB_PASSWORD,{
    dialect: process.env.dialect,
    host:process.env.DB_URL,
    port: 3306
 



 


});sequelize.authenticate().then(() => {
    console.log('successfully.');
 }).catch((error) => {
    console.error('deu banco: ', error);
 });

module.exports = sequelize;



