import { Account } from "./Account";
import DriverAccount from "./DriverAccount";
import PassengerAccount from "./PassengerAccount";

export default class AccountFactory {
  static Create(name: string, email: string, cpf: string, isDriver: boolean, password: string, carPlate?: string | undefined) : Account {
    if(isDriver) 
      return DriverAccount.Create(name,email,cpf,password,carPlate);
    return PassengerAccount.Create(name,email,cpf,password);
  }
}