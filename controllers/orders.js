const mongoose =  require('mongoose');
const Order = require('../models/orders');

const realizarTestO = (req, res) => {
    res.send("ENVIANDO MENSAJE");
}

const findAllOrder = (req, res) => {
    Order.find((err, order) =>{
        err && res.status(500).send(err, message);

        res.status(200).json(order);
    })
}

const findOrderById = (req, res) => {
    Order.findById(req.params.id,(err, order)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(order);
    })
}

const addOrder = (req, res) => {
    let order = new Order({
        status: req.body.status,
        items: req.body.items,
        total : req.body.total,
        shop: req.body.shop,
        updateAt: req.body.updateAt,
        creatdAt: req.body.creatdAt
    });

    order.save((err, order)=>{
        err && res.status(500).send(err.mensage);

        res.status(200).json(order);
    });
}

module.exports = { findAllOrder, findOrderById , addOrder , realizarTestO};
