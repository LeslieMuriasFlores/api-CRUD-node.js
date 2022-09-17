const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const ShopSchema = new Schema({
    name:{type: String},
    descripcion: {type: String},
    phone :{type: String},
    email: {type: String},
    type: {type: String},
    updateAt: {type: String},
    creatdAt: {type: String}
});

module.exports = mongoose.model('Shop',ShopSchema);