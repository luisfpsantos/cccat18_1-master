import { Account } from "./Account";

export default class PassengerAccount extends Account {
  private constructor(name: string, email:string, cpf: string, password:string){
    super(name,email,cpf,password);
  }
  static Create(name: string, email: string, cpf: string, password: string): PassengerAccount {
    return new PassengerAccount(name,email,cpf,password);
  }
}