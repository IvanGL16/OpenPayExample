const openP = require('../model/openPay');
const redirectModel = require('../model/redirectModel');
const customerModel = require('../model/customerModel');
const addressModel = require('../model/addressModel');
const customerController = require('../controller/customerController');

const chargeRedirect = (data, fn) => {
    createChargeRedirect(data, newCharge => {
        openP.customers.charges.create(data.ID, newCharge, (error, charge) => {
            fn(error, charge);
        })
    });
}

const chargeBank = (data, fn) => {
    var chargeCBank = createChargeB(data)
    openP.customers.charges.create(data.ID, chargeCBank, (error, bank) => {
        fn(error, bank);
    })
}

const chargeShop = (data, fn) => {
    var charge = createChargeS(data);
    console.log(charge);
    openP.customers.charges.create(data.ID, charge, (error, shop) => {
        fn(error, shop);
    })
}

const createChargeB = (data) => {
    return chargeCBank = new redirectModel.redirect(data.method, data.amount, data.description, data.order);
}

const createChargeS = (data) => {
    return chargeCShop = new redirectModel.redirect(data.method, data.amount, data.description, data.order, data.date)
}

const createChargeR = (data) => {
    return newCharge = new redirectModel.redirect(data.method, data.amount, data.description, data.order, data.send, data.confirm)
}

const createChargeRedirect = (data, fn) => {
    var newCharge = createChargeR(data);
    fn(newCharge);
}

const clean = (data) => {
    delete data['id'];
    delete data['clabe'];
    delete data['external_id'];
    delete data['creation_date'];
    delete data['address'];
    return data;
}


exports.chargeR = chargeRedirect;
exports.chargB = chargeBank;
exports.chargeS = chargeShop;