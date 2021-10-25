function redirect() {

}
function redirect(method, amount, description, order_id, customer, send_email, confirm, redirect_url) {
    this.method = method;
    this.amount = amount;
    this.description = description;
    this.order_id = order_id;
    this.customer = customer
    this.send_email = send_email;
    this.confirm = confirm;
    this.redirect_url = redirect_url;
}
function redirect(method, amount, description, order_id, send_email, confirm) {
    this.method = method;
    this.amount = amount;
    this.description = description;
    this.order_id = order_id;
    this.send_email = send_email;
    this.confirm = confirm;
    this.redirect_url = 'http://www.openpay.mx/index.html';
}

function redirect(method, amount, description, order_id) {
    this.method = method;
    this.amount = amount;
    this.description = description;
    this.order_id = order_id;
}

function redirect(method, amount, description, order_id, date) {
    this.method = method;
    this.amount = amount;
    this.description = description;
    this.order_id = order_id;
    this.due_date = date;
}


exports.redirect = redirect;