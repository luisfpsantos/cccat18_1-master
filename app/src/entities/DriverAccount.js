"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = require("./Account");
class DriverAccount extends Account_1.Account {
    constructor(name, email, cpf, password, carPlate) {
        super(name, email, cpf, password);
        this.carPlate = carPlate;
    }
    static Create(name, email, cpf, password, carPlate) {
        if (!carPlate)
            throw new TypeError('Para criar uma conta motorista precisa informar o número da placa');
        if (!carPlate.match(/[A-Z]{3}[0-9]{4}/))
            throw new TypeError(JSON.stringify({ message: 'Placa invalida', errorCode: -5 }));
        return new DriverAccount(name, email, cpf, password, carPlate);
    }
}
exports.default = DriverAccount;
//# sourceMappingURL=DriverAccount.js.map