"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccountFactory_1 = __importDefault(require("../entities/AccountFactory"));
const DriverAccount_1 = __importDefault(require("../entities/DriverAccount"));
const PassengerAccount_1 = __importDefault(require("../entities/PassengerAccount"));
class AccountRepository {
    constructor(db) {
        this.db = db;
    }
    verifyAccount(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.db.query("select * from ccca.account where email = $1", [email]);
            if (query.length == 0)
                return false;
            return true;
        });
    }
    getAccountByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield this.db.query("select * from ccca.account where email = $1", [email]);
            if (!query)
                throw new Error('Nenhum usuário encontrado');
            const result = query.rows[0];
            return AccountFactory_1.default.Create(result['name'], result['email'], result['cpf'], result['is_driver'], result['password']);
        });
    }
    insertAccount(account) {
        return __awaiter(this, void 0, void 0, function* () {
            const carPlate = account instanceof DriverAccount_1.default ? account.carPlate : null;
            const isDriver = account instanceof DriverAccount_1.default;
            const isPassanger = account instanceof PassengerAccount_1.default;
            yield this.db.query("insert into ccca.account (account_id, name, email, cpf, car_plate, is_passenger, is_driver, password) values ($1, $2, $3, $4, $5, $6, $7, $8)", [account.id, account.name, account.email, account.cpf, carPlate, isPassanger, isDriver, account.password]);
        });
    }
}
exports.default = AccountRepository;
//# sourceMappingURL=AccountRepository.js.map