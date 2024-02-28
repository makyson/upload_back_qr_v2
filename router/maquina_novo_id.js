
const {getMachineDatanovo} = require('./../fuction/getMachineDatanovo');




async function MaquinaNovoId(req, res, next) {


    const nomeDaMaquina = req.params.id;
  
    if (!nomeDaMaquina) {
      return res.status(400).send({
        error: 'Especifique o nome da máquina na consulta'
      });
  
    }
  
    try {
  
      
      const machineData = await getMachineDatanovo(nomeDaMaquina);
     
      if (machineData) {
        res.status(200).send(machineData);
      } else {
        res.status(404).send({ message: 'Máquina não encontrada' });
      }
    } catch (error) {
      console.error('Ocorreu um erro:', error);
      res.status(500).send({ error: 'Erro interno no servidor' });
    }
  };


  module.exports = MaquinaNovoId;