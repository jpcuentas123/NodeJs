const jwt = require('jsonwebtoken')
const fs = require('fs')

var privateKey = fs.readFileSync('privateKey.key');
var token = jwt.sign({ id: 'user_001' }, privateKey, { algorithm: 'RS256' });

console.log(token)