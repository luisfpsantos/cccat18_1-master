"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DriverAccount_1 = __importDefault(require("./DriverAccount"));
const PassengerAccount_1 = __importDefault(require("./PassengerAccount"));
class AccountFactory {
    static Create(name, email, cpf, isDriver, password, carPlate) {
        if (isDriver)
            return DriverAccount_1.default.Create(name, email, cpf, password, carPlate);
        return PassengerAccount_1.default.Create(name, email, cpf, password);
    }
}
exports.default = AccountFactory;
//# sourceMappingURL=AccountFactory.js.map