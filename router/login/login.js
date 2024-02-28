const { User, Role, bcrypt, jwt, jwtSecret,promisify, saltRounds,tokenexpiresIn } = require('./config');

// Função para login e geração do token JWT
async function login(req, res, next) {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json('Usuário não encontrado');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json('Senha inválida');
    }

    const userRoles = await user.getRoles();
    const token = jwt.sign(
      {
        userId: user.id,
        username: user.username,
        roles: userRoles.map(role => role.name),
      },
      jwtSecret,
      { expiresIn: tokenexpiresIn }
    );

    return res.status(200).json({ token, username, roles: userRoles.map(role => role.name) });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

module.exports = login;
