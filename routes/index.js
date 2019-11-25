var express = require('express');
var router = express.Router();
var ip = require("ip");

var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://26Elshamah12:26Elshamah12@ds117469.mlab.com:17469/megadescontos");

var ProfissionalSchema = new mongoose.Schema({
  Nome: String,
  Email: String,
  Celular: String,
  Cidade: String
});

var ContratanteSchema = new mongoose.Schema({
  Nome: String,
  Email: String,
  Celular: String,
  Cidade: String
});


var AcessosSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now},
  ip: String,

});


var Profissional = mongoose.model("Profissional", ProfissionalSchema);
var Contratante = mongoose.model("Contratante", ContratanteSchema);
var Acessos = mongoose.model("Acessos", AcessosSchema);

router.post("/addcontratante", (req, res) => {
  var myData = new Contratante(req.body);
  myData.save()
    .then(item => {
      res.redirect("/");
    })
    .catch(err => {
      res.status(400).send("Erro no cadastro");
    });
});

router.post("/addprofissional", (req, res) => {
  var myData = new Profissional(req.body);
  myData.save()
    .then(item => {
      res.redirect("/");
    })
    .catch(err => {
      res.status(400).send("Erro no cadastro");
    });
});

router.post("/addacessos", (req, res) => {
  var myData = new Acessos(req.body);
  myData.save()
    .then(item => {
      console.log("gravado");
    })
    .catch(err => {
      res.status(400).send("Erro no cadastro");
    });
});




/* GET home page. */
router.get('/', function(req, res, next) {
  console.log ( ip.address() );
  res.render('index', { title: 'Express' });
});

router.get('/api/cidades', function(req, res, next) {
  res.json({ cidades: [
    {
      id: 1, cidade: "Sumaré/SP"
    },
  {
    id: 2, cidade: "Campinas/SP"
  }],
  });
});

router.get('/api/profissionais/categorias', function(req, res, next) {
  res.json({ categorias: [
    {
      id: 1, categoria: "Consertos / Reparos"
    },
  {
    id: 2, categoria: "Serviços domésticos"
  }],
  });
});


router.get('/api/profissionais/subcategorias', function(req, res, next) {
  res.json({ subcategorias: [
    {
      categoriaid: 1, id: 1, subcategoria: "Eletricista"
    },
  {
    categoriaid: 1, id: 2, subcategoria: "Pintor"
  },
  {
    categoriaid: 2, id: 1, subcategoria: "Faxineira"
  },
  {
    categoriaid: 2, id: 2, subcategoria: "Babá"
  }],
  });
});
module.exports = router;
