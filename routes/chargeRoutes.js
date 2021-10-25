const express = require('express');
const ruta = express.Router();
const chargeController = require('../controller/chargeController');
const open = require('open');
ruta.post('/redirect', (req, res) => {
    chargeController.chargeR(req.body, async (error, charge) => {
        if (error != null) {
            res.status(400).send(error);
        } else {
            await open(charge.payment_method.url);
            res.status(200).json({
                Response: "Abriendo enlace de pago."
            })
        }
    });
})

ruta.post('/bank', (req, res) => {
    chargeController.chargB(req.body, (error, charge) => {
        if (error != null) {
            res.status(400).send(error);
        } else {
            res.status(200).send(charge);
        }
    })
})

ruta.post('/shop', (req, res) => {
    chargeController.chargeS(req.body, async (error, charge) => {
        if (error != null) {
            res.status(400).send(error);
        } else {
            await open(charge.payment_method.barcode_url);
            res.status(200).json({
                Response: "Abriendo enlace de pago."
            })
        }
    })
})

module.exports = ruta;