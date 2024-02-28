const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Definição dos modelos
const Funcionario = sequelize.define('Funcionario', {
  id_funcionario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: true
  },
  funcao: {
    type: DataTypes.STRING,
    allowNull: true
  },
  imagem_caminho: {
    type: DataTypes.STRING,
    allowNull: true
  },

  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true // Pode ser verdadeiro ou falso dependendo da lógica de negócio
  }


});




const Supervisor = sequelize.define('Supervisor', {
  id_supervisor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: true
  },
  funcao: {
    type: DataTypes.STRING,
    allowNull: true
  },
  imagem_caminho: {
    type: DataTypes.STRING,
    allowNull: true
  },
  
  setor: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true // Pode ser verdadeiro ou falso dependendo da lógica de negócio
  }
});

const Terceiro = sequelize.define('Terceiro', {
  id_terceiro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: true
  }
});



const SolicitacaoCompra = sequelize.define('SolicitacaoCompra', {
  id_solicitacao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

 

  id_servico: {
    type: DataTypes.INTEGER,
    allowNull: true,

  },

 
  id_defeito: {
    type: DataTypes.INTEGER,
    allowNull: true,
  
  },


  id_processo: {
    type: DataTypes.INTEGER,
    allowNull: true,
   
  },


  id_aguarda_peca: {
    type: DataTypes.INTEGER,
    allowNull: true,
    
  },


  id_EntregaPeca: {
    type: DataTypes.INTEGER,
    allowNull: true,
  
  },

  

  id_gora_inicio: {
    type: DataTypes.DATE,
    allowNull: true,
   
  },

  nome: {
    type: DataTypes.STRING,
    allowNull: true
  },
  nivel_urgencia: {
    type: DataTypes.ENUM('baixo', 'médio', 'alto'),
    allowNull: true
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  caminho_docs: {
    type: DataTypes.STRING,
    allowNull: true
  },
  referencia: {
    type: DataTypes.STRING,
    allowNull: true
  },
  
  estado: {
    type: DataTypes.ENUM('Pendente','solicitado', 'Em Andamento', 'entregue'),
    allowNull: true,
    defaultValue: 'Pendente'
  }
});




const Servico = sequelize.define('Servico', {
  id_servico: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_funcionario: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_equipamento: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  id_supervisor: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

  nome: {
    type: DataTypes.STRING,
    allowNull: true
  }, 
  observacao: {
    type: DataTypes.TEXT,
    allowNull: true
  },


  horimetro: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  km: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },

  ordem_servico:{
type: DataTypes.STRING,
allowNull: true,
  },


  hora_inicial: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
  },
  hora_final: {
    type: DataTypes.DATE,
    allowNull: true
  },
  
  
  hora_servico: {
    type: DataTypes.TIME,
    allowNull: true
  },

  finalizado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false // Valor padrão: não finalizado
  },


  quantidade_servico: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  retrabalho: {
    type: DataTypes.ENUM('falta_informacao', 'irresponsabilidade_motorista', 'servico_mal_feito'),
    allowNull: true
  }
});






const ServicoTempo = sequelize.define('ServicoTempo', {
  id_ServicoTempo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  
  nome: {
    type: DataTypes.TEXT,
    allowNull: true
  },



  hora_servico: {
    type: DataTypes.TIME,
    allowNull: true
  },

  

  
  
});


const Ausencia = sequelize.define('Ausencia', {
  id_ausencia: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_funcionario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    
  },
  id_supervisor: {
    type: DataTypes.INTEGER,
    allowNull: true,
    
  },
  id_terceiro: {
    type: DataTypes.INTEGER,
    allowNull: true,
   
  },
   hora_inicial: {
    type: DataTypes.DATE,
    allowNull: true
  },
  hora_final: {
    type: DataTypes.DATE,
    allowNull: true
  }, 
  observacao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  caminho_foto_doc: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

const Chamada = sequelize.define('Chamada', {
  id_chamada: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_funcionario: {
    type: DataTypes.INTEGER,
    allowNull: true,
   
  },
  id_supervisor: {
    type: DataTypes.INTEGER,
    allowNull: true,
   
  },
  id_terceiro: {
    type: DataTypes.INTEGER,
    allowNull: true,
   
  },
  data: {
    type: DataTypes.DATE,
    allowNull: true
  },
  presente: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  }
});

const Expurgo = sequelize.define('Expurgo', {
  id_expurgo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_funcionario: {
    type: DataTypes.INTEGER,
    allowNull: true,
   
  },
  id_supervisor: {
    type: DataTypes.INTEGER,
    allowNull: true,
   
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  hora_inicial: {
    type: DataTypes.DATE,
    allowNull: true
  },
  hora_final: {
    type: DataTypes.DATE,
    allowNull: true
  },
  
  id_terceiro: {
    type: DataTypes.INTEGER,
    allowNull: true,
    
  },
  caminho_foto_doc: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

const Falta = sequelize.define('Falta', {
  id_falta: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_funcionario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    
  },
  id_supervisor: {
    type: DataTypes.INTEGER,
    allowNull: true,
   
  },

  id_terceiro: {
    type: DataTypes.INTEGER,
    allowNull: true,
    
  },
  data: {
    type: DataTypes.DATE,
    allowNull: true
  },
  justificada: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  observacao: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});


const ProcessoCompra = sequelize.define('ProcessoCompra', {
    id_processo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_solicitacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
   
    
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    tempo_gasto: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    caminho_docs_produto: {
      type: DataTypes.STRING,
      allowNull: true
    },
    autorizador: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  });

const AguardaPeca = sequelize.define('AguardaPeca', {
  id_aguarda_peca: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
 


  id_processo: {
    type: DataTypes.INTEGER,
    allowNull: true,
    
  },


  tempo_processo: {
    type: DataTypes.DATE,
    allowNull: true
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: true
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  tempo_retirada: {
    type: DataTypes.DATE,
    allowNull: true
  },
  tempo_pra_retirada: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
});

const EntregaPeca = sequelize.define('EntregaPeca', {
  id_entrega: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  id_aguarda_peca: {
    type: DataTypes.INTEGER,
    allowNull: true
    
  },
 
  funcionario_recebeu: {
    type: DataTypes.STRING,
    allowNull: true
  },
  autorizador: {
    type: DataTypes.STRING,
    allowNull: true
  },
  hora_entrega: {
    type: DataTypes.DATE,
    allowNull: true
  },
  caminho_docs: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

const Defeito = sequelize.define('Defeito', {
  id_defeito: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_servico: {
    type: DataTypes.INTEGER,
    allowNull: true,
    
  },
  id_funcionario: {
    type: DataTypes.INTEGER,
    allowNull: true,
  
  },
  id_supervisor: {
    type: DataTypes.INTEGER,
    allowNull: true,
   
  },
  id_equipamento: {
    type: DataTypes.INTEGER,
    allowNull: true,
   
  },
  hora_inicial: {
    type: DataTypes.DATE,
    allowNull: true
  },
  finalizado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false // Valor padrão: não finalizado
  },

  hora_final: {
    type: DataTypes.DATE,
    allowNull: true
  },
  observacao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  horimetro: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  km: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  data: {
    type: DataTypes.DATE,
    allowNull: true
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: true
  },
  retrabalho: {
    type: DataTypes.ENUM('falta_informacao', 'irresponsabilidade_motorista', 'servico_mal_feito'),
    allowNull: true
  }
});




const Equipamento = sequelize.define('Equipamento', {
  id_equipamento: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: true
  },
  imagem_caminho: {
    type: DataTypes.STRING, // Tipo INTEGER para armazenar o ID do arquivo
    allowNull: true
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  plano_manutencao_caminho: {
    type: DataTypes.STRING,
    allowNull: true
  },
  grupo_identificador: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

const Grupo = sequelize.define('Grupo', {
  id_grupo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: true
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const Role = sequelize.define('Role', {
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
});

const HistoricoFuncionario = sequelize.define('HistoricoFuncionario', {
  id_registro: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_Funcionario: {
    type: DataTypes.INTEGER,
    allowNull: true,
    
  },
  id_supervisor: {
    type: DataTypes.INTEGER,
    allowNull: true,
    
  },
  data_inicio: {
    type: DataTypes.DATE,
    allowNull: true
  },
  data_fim: {
    type: DataTypes.DATE,
    allowNull: true
  }
});



const Pontuacao = sequelize.define('Pontuacao', {
    id_pontuacao: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    percentual: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    nota: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  
  

  const SupervisorFuncionarios = sequelize.define('SupervisorFuncionario', {
    funcionarioId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    supervisorId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });


/*

// Sincronização dos modelos com o banco de dados
sequelize.sync({ force: true }) // O parâmetro force: true irá forçar a sincronização e recriação de todas as tabelas
  .then(() => {
    console.log('Todas as tabelas foram criadas com sucesso.');
    process.exit(0); // Se desejar, você pode sair do processo após a sincronização bem-sucedida
  })
  .catch((error) => {
    console.error('Erro ao criar tabelas:', error);
    process.exit(1); // Se ocorrer um erro, você pode sair do processo com um código de erro
  });

*/


  
  



  const Arquivo = sequelize.define('Arquivo', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
  const ServicoArquivo = sequelize.define('ServicoArquivo', {
    // Aqui, você pode adicionar quaisquer outras propriedades que desejar na tabela intermediária
  });
  
  // Configurar o relacionamento entre os modelos
  Servico.belongsToMany(Arquivo, { through: ServicoArquivo });
  Arquivo.belongsToMany(Servico, { through: ServicoArquivo });









  

// Associações entre os modelos
User.belongsToMany(Role, { through: 'UserRoles' });
Role.belongsToMany(User, { through: 'UserRoles' });

Equipamento.belongsTo(Grupo, { foreignKey: 'id_grupo' });
Grupo.hasMany(Equipamento, { foreignKey: 'id_grupo' });



Servico.hasMany(SolicitacaoCompra, { foreignKey: 'id_servico' });
SolicitacaoCompra.belongsTo(Servico, { foreignKey: 'id_servico' });
Defeito.hasMany(SolicitacaoCompra, { foreignKey: 'id_defeito' });
SolicitacaoCompra.belongsTo(Defeito, { foreignKey: 'id_defeito' });



// Exportação dos modelos
module.exports = {
  Funcionario,
  Supervisor,
  Terceiro,
  ProcessoCompra,
  SolicitacaoCompra,
  Servico,
  Arquivo,
  ServicoArquivo,
  Ausencia,
  Chamada,
  Pontuacao,
  Expurgo,
  Falta,
  SupervisorFuncionarios,
  AguardaPeca,
  EntregaPeca,
  Defeito,
  ServicoTempo,
  User,
  Role,
  Grupo,
  Equipamento,
  HistoricoFuncionario
};

