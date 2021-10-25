const openP = require('../model/openPay');
const customerModel = require('../model/customerModel');
const addressController = require('../controller/addressController');
const get = (fn) => {
    openP.customers.list((error, list) => {
        fn(error, list);
    });
}

const getOne = (data, fn) => {
    openP.customers.get(data, (error, customer) => {
        console.log(customer.id, "aaaaaaaaaaaaaaaaaaaaa");
        fn(error, customer);
    })
}

const create = (data, fn) => {
    console.log(data);
    openP.customers.create(createCustomer(data), (error, body) => {
        fn(error, body);
    })
}

const createCustomer = (data) => {
    var newAddress = addressController.create(data);
    return newCustomer = new customerModel.customer(data.name, data.lastName, data.email, data.phone_number, newAddress, data.account);
}

const deleteCustomer = (data, fn) => {
    openP.customers.delete(data.ID, (error) => {
        fn(error);
    })
}


exports.get = get;
exports.create = create;
exports.delete = deleteCustomer;
exports.createC = createCustomer;
exports.getO = getOne;
