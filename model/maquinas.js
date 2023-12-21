

const Sequelize = require('sequelize');
const database = require('../db');


const maquinaslist = database.define('maquinas',{
  nome: {
    type: Sequelize.STRING,
    
    allowNull: false,
    
    primaryKey: true
   


     },



   
     
     
  
     imageUrl: Sequelize.STRING,






})
//maquinaslist.sync({force: true});
//maquinaslist.sync();



module.exports = maquinaslist;