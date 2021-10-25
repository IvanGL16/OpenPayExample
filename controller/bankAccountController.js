const openP = require('../model/openPay');
const bankAccountModel = require('../model/bankAccountModel');

const create = (data, fn) => {
    openP.customers.bankaccounts.create(data.ID, createBankAccount(data.clabe, data.alias, data.holder), (error, bankaccount) => {
        fn(error, bankaccount);
    });
}


const getOne = (data, fn) => {
    openP.customers.bankaccounts.get(data.ID, data.account, (error, bankaccount) => {
        fn(error, bankaccount);
    })
}

const get = (data, fn) => {
    openP.customers.bankaccounts.list(data.ID, (error, list) => {
        fn(error, list);
    })
}


const createBankAccount = (clabe, alias, holder) => {
    return new bankAccount = new bankAccountModel.bankAccount(clabe, alias, holder);
}

exports.create = create;
exports.get = getOne;
exports.list = get;