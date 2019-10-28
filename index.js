//index.js
require("dotenv-safe").load();
var jwt = require('jsonwebtoken');
var http = require('http');
const express = require('express')
const httpProxy = require('express-http-proxy')
const app = express()
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');


app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

function verifyJWT(req, res, next){
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, process.env.SECRET, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    // se tudo estiver ok, salva no request para uso posterior
    req.userId = decoded.id;
    next();
  });
}

//authentication
app.post('/login', (req, res, next) => {
  if(req.body.user === 'dev@nginpay' && req.body.pwd === '123456'){
    //auth ok
    const id = 1; //esse id viria do banco de dados
    var token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300 // expires in 5min
    });
    res.status(200).send({ auth: true, token: token });
  }
  
  res.status(500).send('Login inválido!');
})

app.post('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

app.post('/logout', (req,res, next) => {

})

// Proxy request
app.get('/users', verifyJWT, (req, res, next) => {
 res.json({
   id: 1,
    username: 'dev_mocup_ngin',
    email: 'dev@nginpay.com',
    cpf: '17335370400',
    telephone: '19912348765',
    dtnascimento: '05/08/1976',
    senha: '123456',
    digicard: '0000999988887777'
  });
})

app.get('/descontos/cidades', verifyJWT, (req, res, next) => {
  res.json({
    "cidades":[
      "Americana",
      "Campinas",
      "Hortolândia",
      "Jundiaí",
      "Sumaré"
    ]
  });
})

app.get('/estabelecimento/categoria', verifyJWT, (req, res, next) => {
  res.json({
    "estabelecimentos":[
      "Bistrô",
      "Cafeteria",
      "Lanchonetes",
      "Pizzarias",
      "Restaurantes"
    ]
  });
})

var server = http.createServer(app);
var port = process.env.port || 3000;

app.listen(port);
//server.listen(port);