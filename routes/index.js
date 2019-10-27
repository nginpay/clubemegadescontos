var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home api. */
router.get('/api', function(req, res, next) {
  res.json({ message: 'API clubemegadescontos.com.br' });
});

/* GET home api. */
router.post('/api/usuario/criar', function(req, res, next) {
  res.json({ method: 'POST', message: 'Cria usuário para a aplicação' });
});

/* GET home api. */
router.put('/api/usuario/ativar/', function(req, res, next) {
  res.json({ message: 'Ativa usuário para poder usar aplicação mobile' });
});


router.post('/api/usuario/login', function(req, res, next) {
  if(req.body.username === 'paulotozzi' && req.body.password === '123456'){
  res.json({ 
    username: "paulotozzi",
    password: "123456",
    digicard: "0000111122223333",
    mobile: "19984442281",
    cpf: "19171708820"
               });
});

/* GET home api. */
router.get('/api/usuario/cartaovirtual', function(req, res, next) {
  res.json({ message: 'Exibe o cartão virtual do usuário para validação em alguns serviços como clinicas e laboratórios' });
});

/* GET home api. */
router.put('/api/usuario/perfil/alterar', function(req, res, next) {
  res.json({ message: 'Permite alteração dos dados do usuário' });
});

/* GET home api. */
router.post('/api/usuario/sair', function(req, res, next) {
  res.json({ message: 'Encerra a conexão do usuário' });
});

/* GET home api. */
router.post('/api/usuario/recuperar/senha', function(req, res, next) {
  res.json({ message: 'Permite recuperação de senha de acesso - Passo 1/2' });
});

/* GET home api. */
router.post('/api/usuario/cadastrar/senha', function(req, res, next) {
  res.json({ message: 'Cadastra nova senha - Passo 2/2 do recuperar/senha' });
});

/* GET home api. */
router.get('/api/descontos/cidade', function(req, res, next) {
  res.json({ message: 'Exibe as cidades onde existem estabelecimentos credenciados' });
});

/* GET home api. */
router.get('/api/descontos/cidade/categoria', function(req, res, next) {
  res.json({ message: 'Exibe categorias de estabelecimentos com a cidade escolhida' });
});

/* GET home api. */
router.get('/api/descontos/georeferencia/categoria', function(req, res, next) {
  res.json({ message: 'Exibe categorias de estabelecimentos mais próximos do usuário' });
});

/* GET home api. */
router.get('/api/descontos/categoria/estabelecimento', function(req, res, next) {
  res.json({ message: 'Exibe o estabelecimento selecionado' });
});

/* GET home api. */
router.get('/api/descontos/detalhes/estabelecimento', function(req, res, next) {
  res.json({ message: 'Exibe os detalhes do estabelecimento escolhido' });
});

/* GET home api. */
router.get('/api/descontos/detalhes/estabelecimento/promocao', function(req, res, next) {
  res.json({ message: 'Exibe os detalhes da promoção/desconto do estabelecimento escolhido' });
});

/* GET home api. */
router.get('/api/transacao/estabelecimento/qr/gerar', function(req, res, next) {
  res.json({ message: 'Gera o QR Code para uma transação de descontos e pontuação para o usuário' });
});

/* GET home api. */
router.get('/api/transacao/usuario/qr/ler', function(req, res, next) {
  res.json({ message: 'Ação do Usuário na transação - ler o qrcode' });
});

/* GET home api. */
router.get('/api/transacao/usuario/qr/autorizar', function(req, res, next) {
  res.json({ message: 'Autorização do usuário para validar a transação - informa senha' });
});

/* GET home api. */
router.get('/api/transacao/desconto/gerar', function(req, res, next) {
  res.json({ message: 'Gera a transação e grava no bd' });
});


/* GET home api. */
router.get('/api/extrato/usuario', function(req, res, next) {
  res.json({ message: 'Exibe um extrato com todas as transações realizadas pelo usuário' });
});

/* GET home api. */
router.get('/api/extrato/usuario/periodo', function(req, res, next) {
  res.json({ message: 'Exibe um extrato com todas as transações realizadas pelo usuário por periodo' });
});

/* GET home api. */
router.get('/api/extrato/usuario/economia', function(req, res, next) {
  res.json({ message: 'Mostra para o usuário, baseado nos descontos que ele teve e no valor total de cada compra e o quanto ele economizou' });
});

/* GET home api. */
router.get('/api/extrato/usuario/economia/periodo', function(req, res, next) {
  res.json({ message: 'Mostra para o usuário, baseado nos descontos que ele teve e no valor total de cada compra e o quanto ele economizou por periodo' });
});


/* GET home api. */
router.get('/api/extrato/estabelecimento', function(req, res, next) {
  res.json({ message: 'Exibe um extrato com todas as transações realizadas pelo estabelecimento' });
});

/* GET home api. */
router.get('/api/extrato/usuario/periodo', function(req, res, next) {
  res.json({ message: 'Exibe um extrato com todas as transações realizadas pelo estabelecimento por periodo' });
});

/* GET home api. */
router.get('/transacao/estabelecimento/volume', function(req, res, next) {
  res.json({ message: 'Exibe a quantidade (volume) de transações realizadas no estabelecimento pelo app' });
});

/* GET home api. */
router.get('/transacao/estabelecimento/volume/periodo', function(req, res, next) {
  res.json({ message: 'Exibe a quantidade (volume) de transações realizadas no estabelecimento pelo app por periodo' });
});


module.exports = router;
