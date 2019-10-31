var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Clubemegadescontos' });
});

/* GET dashboard home page. */
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'Dashboard App' });
});

/* GET API home page. */
router.get('/api', function(req, res, next) {
  res.json({ title: 'Api Rest' });
});


module.exports = router;
