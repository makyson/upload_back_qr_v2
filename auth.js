// auth.js

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { promisify } = require('util');
const  { User,Role } = require('./model/User');


const saltRounds = 10;
const jwtSecret = 'secreto_do_jwt'; // Use um segredo forte e seguro

// Registrar um novo usuário
async function register(username, password, role) {
  try {
    // Verificar se o papel já existe no banco de dados, se não, criá-lo
    let userRole = await Role.findOne({ where: { name: role } });
   

    if (!userRole) {
      throw new Error('nao existi a permissao');
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Gere o hash da senha
    const newUser = await User.create({ username, password: hashedPassword });
    
    // Associe o papel (role) ao novo usuário
    await newUser.addRole(userRole);

    return newUser;
  } catch (error) {
    throw error;
  }
}



// Função para login e geração do token JWT
async function login(username, password) {
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Senha inválida');
    }

    const userRoles = await user.getRoles();
    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        roles: userRoles.map(role => role.name), // Incluir as roles no payload do token
      },
      jwtSecret,
      { expiresIn: '1h' }
    );

    return token;
  } catch (error) {
    throw error;
  }
}

// Verificar o token JWT
async function verifyToken(token) {
  try {
    const decoded = await promisify(jwt.verify)(token, jwtSecret);
    const user = await User.findByPk(decoded.userId, { include: Role });

    if (!user) {
      throw new Error('Usuário associado ao token não encontrado');
    }

    return user;
  } catch (error) {
    throw new Error('Erro durante a verificação do token: ' + error.message);
  }
}






module.exports = { register, login, verifyToken };
