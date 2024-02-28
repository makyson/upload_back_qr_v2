const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { promisify } = require('util');
const  { User,Role } = require('../../model/index');


const saltRounds = 10;
const jwtSecret = 'secreto_do_jwt';
const tokenexpiresIn = '1h';


module.exports = { User, Role, bcrypt, jwt, jwtSecret,promisify, saltRounds,tokenexpiresIn }