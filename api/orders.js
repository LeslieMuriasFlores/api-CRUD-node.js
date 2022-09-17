const express = require('express');
const OrderController = require('../controllers/orders');

const router = express.Router();

router.get('/test', OrderController.realizarTest);
router.get('/all', OrderController.findAllShop);
router.get('/:id', OrderController.findShopById);
router.post('/add', OrderController.addShop);

module.exports = router;

