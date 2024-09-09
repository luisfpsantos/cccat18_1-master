import { Account } from "./Account";

export default class DriverAccount extends Account {
  carPlate:string;
  private constructor(name: string, email:string, cpf: string, password:string, carPlate:string) {
    super(name,email,cpf,password);
    this.carPlate = carPlate
  }
  static Create(name: string, email: string, cpf: string, password: string, carPlate?: string | undefined): DriverAccount {
    if(!carPlate)
      throw new TypeError('Para criar uma conta motorista precisa informar o número da placa');
    if(!carPlate.match(/[A-Z]{3}[0-9]{4}/))
      throw new TypeError(JSON.stringify({message: 'Placa invalida', errorCode: -5}));
    return new DriverAccount(name,email,cpf,password,carPlate);
  }
}