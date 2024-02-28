const { User, Role, bcrypt, jwt, jwtSecret, promisify, saltRounds, tokenexpiresIn } = require('./config');

// Registrar um novo usuário
async function register(req, res, next) {
  const { username, password, role = "user" } = req.body;

  try {
 

    // Verificar se o usuário tem a função "adm"
    const userRole = await Role.findOne({ where: { name: role } });
    if (!userRole || userRole.name !== 'adm') {
      return res.status(403).json({ error: 'Apenas usuários com a função "adm" podem registrar novos usuários' });
    }

    // Verificar se o usuário já existe no banco de dados
    const isUser = await User.findOne({ where: { username: username } });
    if (isUser) {
      return res.status(400).json({ error: 'Usuário já possui cadastro' });
    }

    // Gerar o hash da senha
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // Criar o novo usuário
    const newUser = await User.create({ username, password: hashedPassword });
    // Associar a função ao novo usuário
    await newUser.addRole(userRole);

    return res.status(201).json(newUser); // Use 201 for resource creation success
  } catch (error) {
    console.error('Error during registration:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

module.exports = register;
