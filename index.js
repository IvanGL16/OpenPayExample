const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const customerRoutes = require('./routes/customerRoutes');
const chargeRoutes = require('./routes/chargeRoutes');
const app = express();
const port = process.env.NODE_PORT || 3000;

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`.blue);
});

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/OpenpayExample/customers', customerRoutes);
app.use('/OpenpayExample/charge', chargeRoutes);
            // for (const x of list) {
            //     console.log(customerModel.customer(x));
            // }
            // var person = new customerModel.customer("ivan", "gomez", "test@test.com", "2382243223");
            // console.log(person);