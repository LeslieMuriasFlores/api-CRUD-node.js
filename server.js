require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectionString = process.env.MONGO_DB_URI;
const Shops = require('./api/shops');
const Orders = require('./api/orders');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* app.listen(9000, () => {
    console.log('Servidor en ejecucion en....');
}); */

//conectando con DB
mongoose
    .connect(connectionString, {useNewUrlParser: true})
    .then(() => console.log('CONECTANDO CON MONGO DBATLAS'))
    .catch((error) => console.error(error))




app.listen(9000, () => {
    console.log('Servidor en ejecucion en....');
}); 

app.use('/api/shops', Shops);

app.use('/api/orders', Orders);

