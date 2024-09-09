"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const validateCpf_1 = require("../validateCpf");
class Account {
    constructor(name, email, cpf, password) {
        if (!name.match(/[a-zA-Z] [a-zA-Z]+/))
            throw new TypeError(JSON.stringify({ message: 'Nome invalido', errorCode: -3 }));
        if (!email.match(/^(.+)@(.+)$/))
            throw new TypeError(JSON.stringify({ message: 'Email invalido', errorCode: -2 }));
        if (!(0, validateCpf_1.validateCpf)(cpf))
            throw new TypeError(JSON.stringify({ message: 'CPF invalido', errorCode: -1 }));
        this.id = crypto.randomUUID();
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.password = password;
    }
}
exports.Account = Account;
//# sourceMappingURL=Account.js.map