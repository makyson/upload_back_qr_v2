
const Sequelize = require('sequelize');





const sequelize = new Sequelize('banco_dados_q','banco_dados_q','Maximiano@2004',{
    dialect: 'mysql',
    host:'banco_dados_q.mysql.dbaas.com.br',
    

/*
    const sequelize = new Sequelize('bb','root','',{
        dialect: 'mysql',
        host:'localhost',
        port: 3306


*/





});sequelize.authenticate().then(() => {
    console.log('successfully.');
 }).catch((error) => {
    console.error('deu banco: ', error);
 });

module.exports = sequelize;





/*
const sequelize = new Sequelize(process.env.db_nome,process.env.db_user,process.env.DB_PASSWORD,{
    dialect: process.env.dialect,
    host:process.env.DB_URL,*/






    