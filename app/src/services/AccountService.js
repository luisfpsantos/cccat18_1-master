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
class AccountService {
    constructor(accountRepository) {
        this.accountRepository = accountRepository;
    }
    signup(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const input = req.body;
                const accountExists = yield this.accountRepository.verifyAccount(input.email);
                if (accountExists)
                    return res.status(422).json({ errorCode: -4 });
                const account = AccountFactory_1.default.Create(input.name, input.email, input.cpf, input.isDriver, input.password, input.carPlate);
                yield this.accountRepository.insertAccount(account);
                return res.json(account.id);
            }
            catch (error) {
                if (error instanceof TypeError)
                    return res.status(422).send(error.message);
            }
        });
    }
    getAccount(req, res) {
        throw new Error("Method not implemented.");
    }
}
exports.default = AccountService;
//# sourceMappingURL=AccountService.js.map