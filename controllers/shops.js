const mongoose =  require('mongoose');
const Shop = require('../models/shops');

const realizarTest = (req, res) => {
    res.send("ENVIANDO MENSAJE");
}

const findAllShop = (req, res) => {
    Shop.find((err, shop) =>{
        err && res.status(500).send(err, message);

        res.status(200).json(shop);
    })
}

const findShopById = (req, res) => {
    Shop.findById(req.params.id,(err, shop)=>{
        err && res.status(500).send(err.message);

        res.status(200).json(shop);
    })
}

const addShop = (req, res) => {
    let shop = new Shop({
        name: req.body.name,
        descripcion: req.body.descripcion,
        phone : req.body.phone,
        email: req.body.email,
        type: req.body.type,
        updateAt: req.body.updateAt,
        creatdAt: req.body.creatdAt
    });

    shop.save((err, shop)=>{
        err && res.status(500).send(err.mensage);

        res.status(200).json(shop);
    });
}

module.exports = { findAllShop, findShopById, addShop , realizarTest};
