import axios from "axios"

test("nao deve inserir uma conta que ja existe", async () =>  {
  let account = {
    name: 'Luis Fernando',
    email: 'teste@teste.com',
    cpf: '44699349846',
    carPlate: 'fjt2345',
    isDriver: false,
    password: 'teste'
  };
  let errorCode;
  let statusCode;
  try{
    await axios.post('http://localhost:3000/signup', account);
  } catch(error: any){
    let response = error.response;
    let {errorCode: outputMessage} = response.data;
    errorCode = outputMessage;
    statusCode = response.status;
  }
  expect(errorCode).toBe(-4);
  expect(statusCode).toBe(422);
})

test("nao deve inserir um nome único", async () =>  {
  let account = {
    name: 'Luis',
    email: 'teste1@teste.com',
    cpf: '44699349846',
    carPlate: 'fjt2345',
    isDriver: false,
    password: 'teste'
  };
  let errorCode;
  let statusCode;
  try{
    await axios.post('http://localhost:3000/signup', account);
  } catch(error: any){
    let response = error.response;
    let {errorCode: outputMessage} = response.data;
    errorCode = outputMessage;
    statusCode = response.status;
  }
  expect(errorCode).toBe(-3);
  expect(statusCode).toBe(422);
})

test("nao deve inserir um nome com numeros", async () =>  {
  let account = {
    name: 'Luis 123',
    email: 'teste1@teste.com',
    cpf: '44699349846',
    carPlate: 'fjt2345',
    isDriver: false,
    password: 'teste'
  };
  let errorCode;
  let statusCode;
  try{
    await axios.post('http://localhost:3000/signup', account);
  } catch(error: any){
    let response = error.response;
    let {errorCode: outputMessage} = response.data;
    errorCode = outputMessage;
    statusCode = response.status;
  }
  expect(errorCode).toBe(-3);
  expect(statusCode).toBe(422);
})


test("nao deve inserir email invalido", async () =>  {
  let account = {
    name: 'Luis Fernando',
    email: 'te.com',
    cpf: '44699349846',
    carPlate: 'fjt2345',
    isDriver: false,
    password: 'teste'
  };
  let errorCode;
  let statusCode;
  try{
    await axios.post('http://localhost:3000/signup', account);
  } catch(error: any){
    let response = error.response;
    let {errorCode: outputMessage} = response.data;
    errorCode = outputMessage;
    statusCode = response.status;
  }
  expect(errorCode).toBe(-2);
  expect(statusCode).toBe(422);
})

test("nao deve inserir um cpf invalido", async () =>  {
  let account = {
    name: 'Luis Fernando',
    email: 'teste1@teste.com',
    cpf: '123456',
    carPlate: 'fjt2345',
    isDriver: false,
    password: 'teste'
  };
  let errorCode;
  let statusCode;
  try{
    await axios.post('http://localhost:3000/signup', account);
  } catch(error: any){
    let response = error.response;
    let {errorCode: outputMessage} = response.data;
    errorCode = outputMessage;
    statusCode = response.status;
  }
  expect(errorCode).toBe(-1);
  expect(statusCode).toBe(422);
})

test("nao deve inserir placa invalida se for um motorista", async () =>  {
  let account = {
    name: 'Luis Fernando',
    email: 'teste1@teste.com',
    cpf: '44699349846',
    carPlate: 'fjt234',
    isDriver: true,
    password: 'teste'
  };
  let errorCode;
  let statusCode;
  try{
    await axios.post('http://localhost:3000/signup', account);
  } catch(error: any){
    let response = error.response;
    let {errorCode: outputMessage} = response.data;
    errorCode = outputMessage;
    statusCode = response.status;
  }
  expect(errorCode).toBe(-5);
  expect(statusCode).toBe(422);
})
