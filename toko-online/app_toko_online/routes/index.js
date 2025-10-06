var express = require('express');
var router = express.Router();
var mainController = require('../../controller/main');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Toko Onlinde Sederhana',
//      products: products
//      });
// });
  router.get("/", mainController.index);

module.exports = router;
