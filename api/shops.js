const express = require('express');
const ShopController = require('../controllers/shops');

const router = express.Router();


router.get('/test', ShopController.realizarTest);
router.get('/all', ShopController.findAllShop);
router.get('/:id', ShopController.findShopById);
router.post('/add', ShopController.addShop);


module.exports = router;

