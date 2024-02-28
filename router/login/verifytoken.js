const { User, Role, bcrypt, jwt, jwtSecret, promisify, saltRounds, tokenexpiresIn } = require('./config');

async function verifyToken(token) {
    try {
        const decoded = await promisify(jwt.verify)(token, jwtSecret);
        
        const user = await User.findByPk(decoded.userId, { include: Role });

        if (!user) {
            throw new Error('Usuário associado ao token não encontrado');
        }

    

        return user;
    } catch (error) {

      if (!token) {
        throw new Error('Token de autenticação não fornecido');
    }

        throw new Error('durante a verificação do token: ' + error.message);
    }
}

module.exports = { verifyToken };