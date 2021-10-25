const express = require('express');
const ruta = express.Router();
const customerController = require('../controller/customerController');

ruta.get('/', (req, res) => {
    customerController.get((error, list) => {
        if (error != null) {
            res.status(400).send(error);
        } else {
            res.status(200).send(list);
        }
    })
})

ruta.post('/create', (req, res) => {
    customerController.create(req.body, (error, body) => {
        if (error != null) {
            res.status(400).send(error);
        } else {
            res.status(200).send(body);
        }
    })
})

ruta.post('/delete', (req, res) => {
    customerController.delete(req.body, (error) => {
        if (error != null) {
            res.status(400).send(error);
        } else {
            res.status(200).send(`User ${req.body.ID} was deleted`);
        }
    })
})


module.exports = ruta;