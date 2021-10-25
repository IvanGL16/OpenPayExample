function customer() {
}

function customer(id, name, last_name, email, phone_number, address, creation_date, external_id, reference, barcode_url, clabe) {
    this.id = id;
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.phone_number = phone_number;
    this.address = address;
    this.creation_date = creation_date;
    this.external_id = external_id;
    store: {
        this.reference = reference;
        this.barcode_url = barcode_url;
    }
    this.clabe = clabe;
}

function customer(name, last_name, email, phone_number, address, account) {
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.phone_number = phone_number;
    this.address = address;
    this.account = account;
}

function customer(name, last_name, email, phone_number, address) {
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.phone_number = phone_number;
    this.address = address;
}
function customer(name, last_name, email, phone_number, address) {
    this.name = name;
    this.last_name = last_name;
    this.email = email;
    this.phone_number = phone_number;
}
exports.customer = customer;