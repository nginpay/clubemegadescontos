var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Clubemegadescontos' });
});

/* GET home page. */
router.get('/dashboard', function(req, res, next) {
  res.render('./dashboard/index', { title: 'Dashboard' });
});

/* GET Api page. */
router.get('/api', function(req, res, next) {
  res.json({ title: 'API v2' });
});

module.exports = router;
