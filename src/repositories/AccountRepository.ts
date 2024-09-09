import { IDatabase } from "pg-promise";
import { Account } from "../entities/Account";
import AccountFactory from "../entities/AccountFactory";
import DriverAccount from "../entities/DriverAccount";
import PassengerAccount from "../entities/PassengerAccount";
import pg from "pg-promise/typescript/pg-subset";

export default class AccountRepository {
  private readonly db:IDatabase<{}, pg.IClient>;
  constructor(db:IDatabase<{}, pg.IClient>){
    this.db = db
  }
  async verifyAccount(email:string) : Promise<boolean> {
    const query = await this.db.query("select * from ccca.account where email = $1", [email])
    if(query.length == 0) return false;
    return true;
  }
  async getAccountByEmail(email:string) : Promise<Account> {
    const query = await this.db.query<Record<string, any>>("select * from ccca.account where email = $1", [email])
    if(!query) throw new Error('Nenhum usuário encontrado');
    const result = query.rows[0];
    return AccountFactory.Create(
      result['name'], 
      result['email'],
      result['cpf'],
      result['is_driver'],
      result['password'],
    );
  }
  async insertAccount(account:Account) : Promise<void> {
    const carPlate = account instanceof DriverAccount ? account.carPlate : null
    const isDriver = account instanceof DriverAccount
    const isPassanger = account instanceof PassengerAccount
    await this.db.query("insert into ccca.account (account_id, name, email, cpf, car_plate, is_passenger, is_driver, password) values ($1, $2, $3, $4, $5, $6, $7, $8)", [account.id, account.name, account.email, account.cpf, carPlate, isPassanger, isDriver, account.password]);
  }
}