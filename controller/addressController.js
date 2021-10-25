const addressModel = require('../model/addressModel');

const createAddress = (data) => {
    return newAddress = new addressModel.address(data.line1, data.line2, data.line3, data.postalCode, data.state, data.city, data.countryCode)
}

exports.create = createAddress;

