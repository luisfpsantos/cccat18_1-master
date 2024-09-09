"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_promise_1 = __importDefault(require("pg-promise"));
const AccountService_1 = __importDefault(require("./services/AccountService"));
const AccountRepository_1 = __importDefault(require("./repositories/AccountRepository"));
class Program {
    constructor(accountService) {
        this.app = (0, express_1.default)();
        this.accountService = accountService;
    }
    addServerRoutes() {
        this.app.post('/signup', (req, res) => this.accountService.signup(req, res));
    }
    serverInitialize() {
        this.app.use(express_1.default.json());
        this.addServerRoutes();
        this.app.listen(3000);
    }
}
const dbConnection = (0, pg_promise_1.default)()("postgres://postgres:123456@localhost:5432/app");
const accountRepository = new AccountRepository_1.default(dbConnection);
const accountService = new AccountService_1.default(accountRepository);
const program = new Program(accountService);
program.serverInitialize();
//# sourceMappingURL=Program.js.map