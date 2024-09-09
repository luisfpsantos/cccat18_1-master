import { validateCpf } from "../validateCpf";

export abstract class Account {
  id:string;
  name:string;
  email:string;
  cpf:string;
  password:string;
  constructor(name: string, email:string, cpf: string, password:string) {
    if(!name.match(/[a-zA-Z] [a-zA-Z]+/))
      throw new TypeError(JSON.stringify({message: 'Nome invalido', errorCode: -3}));
    if(!email.match(/^(.+)@(.+)$/))
      throw new TypeError(JSON.stringify({message: 'Email invalido', errorCode: -2}));
    if(!validateCpf(cpf))
      throw new TypeError(JSON.stringify({message: 'CPF invalido', errorCode: -1}));
    this.id = crypto.randomUUID();
    this.name = name;
    this.email = email;
    this.cpf = cpf;
    this.password = password;
  }
}