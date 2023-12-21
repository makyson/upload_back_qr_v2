const { verifyToken } = require('./auth'); // Importe a função verifyToken


// No middleware authenticateToken, modifique para incluir as informações do usuário no objeto req
async function authenticateToken(req, res, next) {
    try {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
  
      if (!token) {
        req.user = null;
        return res.status(401).json({ message: 'Token de autenticação não fornecido' });
      }
  
      const user = await verifyToken(token);
  
      if (!user) {
        req.user = null;
        return res.status(403).json({ message: 'Token inválido ou expirado' });
      }
  
      req.user = user; // Adicionando o usuário no objeto req
      next();
    } catch (error) {
      console.error('Erro durante a autenticação:', error);
      req.user = null;
      return res.status(500).json({ message: 'Erro interno no servidor' });
    }
  }
  

  
/*
function authenticateToken(roles = []) {
  return async function (req, res, next) {
    try {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];

      if (!token) {
        return res.status(401).json({ message: 'Token de autenticação não fornecido' });
      }

      const user = await verifyToken(token);

      if (!user) {
        return res.status(403).json({ message: 'Token inválido ou expirado' });
      }

      // Verificar se o usuário possui alguma das roles necessárias
      if (roles.length > 0 && !roles.some(role => user.roles.includes(role))) {
        return res.status(403).json({ message: 'Acesso negado. Você não tem permissão para acessar esta página.' });
      }

      req.user = user;
      next();
    } catch (error) {
      // Lidar com erros, mas não interromper o servidor
      console.error('Erro durante a autenticação:', error);
      return res.status(500).json({ message: 'Token inválido ou Erro interno no servidor' });
    }
  }
}
*/
module.exports = authenticateToken;