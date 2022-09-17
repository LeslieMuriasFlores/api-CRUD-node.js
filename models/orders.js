const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    status: {type: String},
    items: {type: String},
    total : {type: String},
    shop: {type: String},
    updateAt: {type: String},
    creatdAt: {type: String},
});

module.exports = mongoose.model('Order',OrderSchema);