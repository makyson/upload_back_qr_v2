const doc = require('./../utils/spreadsheet_get_maquinas');

//serve maquina_novo_id



async function getMachineDatanovo(nomeDaMaquina) {
    try {
  
       
            return await findMachineDatanovo(nomeDaMaquina);
          } catch (error) {
            console.error('Erro ao buscar a máquina:', error);
            throw error;
          }
        }
      
      
      
      
      
        async function findMachineDatanovo(nomeDaMaquina) {
          try {
        
      
            
            await doc.loadInfo();
            console.log(nomeDaMaquina) 

            const sheet = doc.sheetsByIndex[0];
            console.log(nomeDaMaquina) 
            const rows = await sheet.getRows();
        
            const columnIndex = 0;
        
            for (let i = 0; i < rows.length; i++) {
              const cellValue = rows[i]._rawData[columnIndex];
        
              if (cellValue === nomeDaMaquina) {
                // Retorna os dados da máquina como objeto
        
                let tipocal = '';
                let valcal = '';
        
                if (rows[i]._rawData[54] === '' || rows[i]._rawData[55] === '') {
                  tipo = '';
                  valcal = '';
                } else if (rows[i]._rawData[54] !== '') {
                  tipo = 'calibragem';
                  valcal = rows[i]._rawData[54];
                } else if (rows[i]._rawData[55] !== '') {
                  tipo = 'lubrificação';
                  valcal = rows[i]._rawData[55];
                }
        
                let INTERVALOnova = rows[i]._rawData[7].replace(',', '.'); // Substitui vírgulas por pontos
                let ULTIMA_TROCA_DATAnova = rows[i]._rawData[3].replace(',', '.'); // Substitui vírgulas por pontos
                
                // Agora, você pode usar os valores para operações matemáticas
                let proximatrocahor = (parseFloat(INTERVALOnova) + parseFloat(ULTIMA_TROCA_DATAnova)).toString();
                
               
        
                return {
                  nome: rows[i]._rawData[0],
                  imageUrl: "/imagem/imagemequipamento/" + rows[i]._rawData[56],
                  description: "",
                  pdf: "/imagem/pdfequipamento/" + rows[i]._rawData[57],
                  modelo: rows[i]._rawData[1],
                  ULTIMA_TROCA_DATA: rows[i]._rawData[2],
                  ULTIMA_TROCA_HORIM: rows[i]._rawData[3],
                  DATA_ATUAL: rows[i]._rawData[4],
                  HORI_ATUAL: rows[i]._rawData[5],
                  HR_TRABA: rows[i]._rawData[6],
                  INTERVALO: rows[i]._rawData[7],
                  HR_REST: rows[i]._rawData[8],
                  vallubcal:valcal,
                  tipolubcal:tipocal,
                  urlqrcode:'https://manutecaoqr.com.br/#/machineDetails/',
                  proximatrocahor:proximatrocahor,
        
                filtros:[ {
                  urlimagem: "/imagem/filtros/wm_s-removebg-preview.png",
                  nomefiltro: "AR INTERNO",
                  horasrest: rows[i]._rawData[13],
                  nomesol: rows[i]._rawData[14],
                  nomereq: rows[i]._rawData[15],
                  referencia: rows[i]._rawData[11],
                  obs: rows[i]._rawData[16],
                  dataultima: rows[i]._rawData[10],
                  horinit: rows[i]._rawData[9],
                  intevalofiltro:  rows[i]._rawData[17],
                   proximatrocahor: (parseFloat(rows[i]._rawData[17].replace(',', '.')) + parseFloat(rows[i]._rawData[9].replace(',', '.'))).toString(),
        
        
                
                   
                },{
                 
                  urlimagem: "/imagem/filtros/wm_s-removebg-preview.png",
                  nomefiltro: "AR EXTERNO",
                  horasrest: rows[i]._rawData[22],
                  nomesol: rows[i]._rawData[23],
                  nomereq: rows[i]._rawData[24],
                  referencia: rows[i]._rawData[20],
                  obs: rows[i]._rawData[25],
                  dataultima: rows[i]._rawData[19],
                  horinit: rows[i]._rawData[18],
                  intevalofiltro:  rows[i]._rawData[26],
                  proximatrocahor: (parseFloat(rows[i]._rawData[26].replace(',', '.')) + parseFloat(rows[i]._rawData[18].replace(',', '.'))).toString(),
                },{
                  urlimagem: "/imagem/filtros/992493_filtro-oleo-motor-2vc115561-905411880013-tac1_z1_637042297440429857-removebg-preview.png",
                  nomefiltro: "LUBRIFICANTE",
                  horasrest: rows[i]._rawData[31],
                  nomesol: rows[i]._rawData[32],
                  nomereq: rows[i]._rawData[33],
                  referencia: rows[i]._rawData[29],
                  obs: rows[i]._rawData[34],
                  dataultima: rows[i]._rawData[28],
                  horinit: rows[i]._rawData[27],
                  intevalofiltro:  rows[i]._rawData[35],
                  proximatrocahor: (parseFloat(rows[i]._rawData[35].replace(',', '.')) + parseFloat(rows[i]._rawData[27].replace(',', '.'))).toString(),
                },{
                  
                  urlimagem: "/imagem/filtros/OIP-removebg-preview.png",
                  nomefiltro: "COMBUSTIVEL",
                  horasrest: rows[i]._rawData[40],
                  nomesol: rows[i]._rawData[41],
                  nomereq: rows[i]._rawData[42],
                  referencia: rows[i]._rawData[38],
                  obs: rows[i]._rawData[43],
                  dataultima: rows[i]._rawData[37],
                  horinit: rows[i]._rawData[36],
                  intevalofiltro:  rows[i]._rawData[44],
                  proximatrocahor: (parseFloat(rows[i]._rawData[44].replace(',', '.')) + parseFloat(rows[i]._rawData[36].replace(',', '.'))).toString(),
                  
                },{
                 
                  urlimagem: "/imagem/filtros/Imagem13.png",
                  nomefiltro: "SEPARADOR De AGUA",
                  horasrest: rows[i]._rawData[49],
                  nomesol: rows[i]._rawData[50],
                  nomereq: rows[i]._rawData[51],
                  referencia: rows[i]._rawData[47],
                  obs: rows[i]._rawData[52],
                  dataultima: rows[i]._rawData[46],
                  horinit: rows[i]._rawData[45],
                  intevalofiltro:  rows[i]._rawData[53],
                  proximatrocahor: (parseFloat(rows[i]._rawData[45].replace(',', '.')) + parseFloat(rows[i]._rawData[53].replace(',', '.'))).toString(),
        
                }],
        
                };
              }
            }
        
            return null; // Retorna null se os dados não forem encontrados na planilha
          } catch (error) {
            console.error('Erro ao procurar a máquina:', error);
            throw error;
          }
        }
        
        module.exports = {getMachineDatanovo};
      