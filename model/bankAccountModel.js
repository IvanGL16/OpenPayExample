function bankAccount() {
}

function bankAccount(id, clabe, bank_code, bank_name, alias, holder_name, creation_date,) {
    this.id = id;
    this.clabe = clabe;
    this.bank_code = bank_code;
    this.bank_name = bank_name;
    this.alias = alias;
    this.holder_name = holder_name;
    this.creation_date = creation_date;
}

function bankAccount(clabe, bank_code, bank_name, alias, holder_name) {
    this.clabe = clabe;
    this.bank_code = bank_code;
    this.bank_name = bank_name;
    this.alias = alias;
    this.holder_name = holder_name;
}

function bankAccount(clabe, alias, holder_name) {
    this.clabe = clabe;
    this.bank_code = bank_code;
    this.bank_name = bank_name;
    this.alias = alias;
    this.holder_name = holder_name;
}


exports.bankAccount = bankAccount;