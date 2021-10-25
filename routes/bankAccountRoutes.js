const express = require('express');
const ruta = express.Router();
const bankAccountController = require('../controller/bankAccountController');


ruta.post('/create', (req, res) => {
    bankAccountController.create(req.body, (error, body) => {
        if (error != null) {
            res.status(400).send(error);
        } else {
            res.status(200).send(body);
        }
    })
})

ruta.post('/get', (req, res) => {
    bankAccountController.get(req.body, (error, bankaccount) => {
        if (error != null) {
            res.status(400).send(error);
        } else {
            res.status(200).send(bankaccount);
        }
    })
})

ruta.post('/getOne', (req, res) => {
    bankAccountController.list(req, body, (error, list) => {
        if (error != null) {
            res.status(400).send(error);
        } else {
            res.status(200).send(list);
        }
    })
})