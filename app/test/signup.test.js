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
const axios_1 = __importDefault(require("axios"));
test("nao deve inserir uma conta que ja existe", () => __awaiter(void 0, void 0, void 0, function* () {
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
    try {
        yield axios_1.default.post('http://localhost:3000/signup', account);
    }
    catch (error) {
        let response = error.response;
        let { errorCode: outputMessage } = response.data;
        errorCode = outputMessage;
        statusCode = response.status;
    }
    expect(errorCode).toBe(-4);
    expect(statusCode).toBe(422);
}));
test("nao deve inserir um nome único", () => __awaiter(void 0, void 0, void 0, function* () {
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
    try {
        yield axios_1.default.post('http://localhost:3000/signup', account);
    }
    catch (error) {
        let response = error.response;
        let { errorCode: outputMessage } = response.data;
        errorCode = outputMessage;
        statusCode = response.status;
    }
    expect(errorCode).toBe(-3);
    expect(statusCode).toBe(422);
}));
test("nao deve inserir um nome com numeros", () => __awaiter(void 0, void 0, void 0, function* () {
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
    try {
        yield axios_1.default.post('http://localhost:3000/signup', account);
    }
    catch (error) {
        let response = error.response;
        let { errorCode: outputMessage } = response.data;
        errorCode = outputMessage;
        statusCode = response.status;
    }
    expect(errorCode).toBe(-3);
    expect(statusCode).toBe(422);
}));
test("nao deve inserir email invalido", () => __awaiter(void 0, void 0, void 0, function* () {
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
    try {
        yield axios_1.default.post('http://localhost:3000/signup', account);
    }
    catch (error) {
        let response = error.response;
        let { errorCode: outputMessage } = response.data;
        errorCode = outputMessage;
        statusCode = response.status;
    }
    expect(errorCode).toBe(-2);
    expect(statusCode).toBe(422);
}));
test("nao deve inserir um cpf invalido", () => __awaiter(void 0, void 0, void 0, function* () {
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
    try {
        yield axios_1.default.post('http://localhost:3000/signup', account);
    }
    catch (error) {
        let response = error.response;
        let { errorCode: outputMessage } = response.data;
        errorCode = outputMessage;
        statusCode = response.status;
    }
    expect(errorCode).toBe(-1);
    expect(statusCode).toBe(422);
}));
test("nao deve inserir placa invalida se for um motorista", () => __awaiter(void 0, void 0, void 0, function* () {
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
    try {
        yield axios_1.default.post('http://localhost:3000/signup', account);
    }
    catch (error) {
        let response = error.response;
        let { errorCode: outputMessage } = response.data;
        errorCode = outputMessage;
        statusCode = response.status;
    }
    expect(errorCode).toBe(-5);
    expect(statusCode).toBe(422);
}));
//# sourceMappingURL=signup.test.js.map