

const Sequelize = require('sequelize');
const database = require('../db');


const mecanicoimg = database.define('mecanico',{
  nome: {
    type: Sequelize.STRING,
    
    allowNull: false,
    
    primaryKey: true
   
   
     },



   
     
     
  
     imageUrl: Sequelize.STRING,





     description: Sequelize.STRING,
     DIA_LUBRIFICACAO: Sequelize.STRING,
     DIA_CALIBRACAO: Sequelize.STRING,
     pdf: Sequelize.STRING,
     DATA_ATUAL: Sequelize.STRING,




     ultima_troca_oleo_hor: Sequelize.DOUBLE,

     HORI_ATUAL: Sequelize.STRING,
     modelo: Sequelize.STRING,
     imageUrl: Sequelize.STRING,




     
   


      horasrest_hor: Sequelize.DOUBLE,

     urlimagem: Sequelize.STRING,
     nomefiltro: Sequelize.STRING,
    
     horasrest: Sequelize.DOUBLE,
     nomesol: Sequelize.STRING,
     nomereq: Sequelize.STRING,
     referencia: Sequelize.STRING,
     obs: Sequelize.STRING,
     dataultima: Sequelize.STRING,
     trocar: Sequelize.DOUBLE,

     urlimagem1: Sequelize.STRING,
     nomefiltro1: Sequelize.STRING,
     horasrest1: Sequelize.DOUBLE,
     nomesol1: Sequelize.STRING,
     nomereq1: Sequelize.STRING,
     referencia1: Sequelize.STRING,
     obs1: Sequelize.STRING,
     dataultima1: Sequelize.STRING,
     trocar1: Sequelize.DOUBLE,
     horasrest_hor: Sequelize.DOUBLE,

     horasrest_hor2: Sequelize.DOUBLE,
     urlimagem2: Sequelize.STRING,
     nomefiltro2: Sequelize.STRING,
     horasrest2: Sequelize.DOUBLE,
     nomesol2: Sequelize.STRING,
     nomereq2: Sequelize.STRING,
     referencia2: Sequelize.STRING,
     obs2: Sequelize.STRING,
     dataultima2: Sequelize.STRING,
     trocar2: Sequelize.DOUBLE,


     urlimagem3: Sequelize.STRING,
     nomefiltro3: Sequelize.STRING,
     horasrest3: Sequelize.DOUBLE,
     nomesol3: Sequelize.STRING,
     nomereq3: Sequelize.STRING,
     referencia3: Sequelize.STRING,
     obs3: Sequelize.STRING,
     dataultima3: Sequelize.STRING,
     trocar3: Sequelize.DOUBLE,

     urlimagem4: Sequelize.STRING,
     nomefiltro4: Sequelize.STRING,
     horasrest4: Sequelize.DOUBLE,
     nomesol4: Sequelize.STRING,
     nomereq4: Sequelize.STRING,
     referencia4: Sequelize.STRING,
     obs4: Sequelize.STRING,
     dataultima4: Sequelize.STRING,
     trocar4: Sequelize.DOUBLE,
   
    
     




















})
//mecanicoimg.sync({force: true});
//mecanicoimg.sync();



module.exports = mecanicoimg;