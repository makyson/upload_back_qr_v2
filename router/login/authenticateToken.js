const { verifyToken } = require('./verifytoken'); // Importe a função verifyToken

// No middleware authenticateToken, modifique para incluir as informações do usuário no objeto req
async function authenticateToken(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];

        if (!authHeader) {
            req.user = null;
            return res.status(401).json({ message: 'Token de autenticação não fornecido' });
        }

        const token = authHeader.split(' ')[1]; // O token geralmente é fornecido no formato "Bearer token"
       

        const user = await verifyToken(token); // Verificar o token

        if (!user) {
            req.user = null;
            return res.status(403).json({ message: 'Token inválido ou expirado' });
        }

        req.user = user; // Adicionando o usuário no objeto req
        next();
    } catch (error) {
        req.user = null;
     
        return res.status(500).json({ message: "" + error });
    }
}

module.exports = { authenticateToken };