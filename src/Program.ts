import express, {Express} from "express";
import pgp from "pg-promise";
import IAccountService from "./services/IAccountService";
import AccountService from "./services/AccountService";
import AccountRepository from "./repositories/AccountRepository";

class Program{
  private readonly app:Express;
  private readonly accountService:IAccountService;
  constructor(accountService:IAccountService){
    this.app = express();
    this.accountService = accountService;
  }
  addServerRoutes():void {
    this.app.post('/signup', (req, res) => this.accountService.signup(req, res));
  }
  serverInitialize():void {
    this.app.use(express.json());
    this.addServerRoutes();
    this.app.listen(3000);
  }
}

const dbConnection = pgp()("postgres://postgres:123456@localhost:5432/app");
const accountRepository = new AccountRepository(dbConnection);
const accountService = new AccountService(accountRepository);
const program = new Program(accountService);
program.serverInitialize();