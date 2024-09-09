import AccountFactory from "../entities/AccountFactory";
import AccountRepository from "../repositories/AccountRepository";
import IAccountService from "./IAccountService";

export default class AccountService implements IAccountService {
  private readonly accountRepository: AccountRepository;
  constructor(accountRepository:AccountRepository){
    this.accountRepository = accountRepository;
  }
  public async signup(req: any, res: any): Promise<void> {
    try{
      const input = req.body;
      const accountExists = await this.accountRepository.verifyAccount(input.email);
      if(accountExists)
        return res.status(422).json({ errorCode: -4})
      const account = AccountFactory.Create(
        input.name,
        input.email,
        input.cpf,
        input.isDriver,
        input.password,
        input.carPlate
      );
      await this.accountRepository.insertAccount(account);
      return res.json(account.id);
    } catch(error:any) {
      if(error instanceof TypeError)
        return res.status(422).send(error.message);
    }
  }
  public getAccount(req: any, res: any): Promise<void> {
    throw new Error("Method not implemented.");
  }
}