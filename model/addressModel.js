function address() {
}
function address(line1, line2, line3, postal_code, state, city, country_code) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.postal_code = postal_code;
    this.state = state;
    this.city = city;
    this.country_code = country_code;
}

exports.address = address;