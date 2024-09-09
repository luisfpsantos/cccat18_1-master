"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = require("./Account");
class PassengerAccount extends Account_1.Account {
    constructor(name, email, cpf, password) {
        super(name, email, cpf, password);
    }
    static Create(name, email, cpf, password) {
        return new PassengerAccount(name, email, cpf, password);
    }
}
exports.default = PassengerAccount;
//# sourceMappingURL=PassengerAccount.js.map