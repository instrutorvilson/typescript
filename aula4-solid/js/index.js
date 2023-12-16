"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./classes/pessoa"));
const pessoaFisica_1 = __importDefault(require("./classes/pessoaFisica"));
const pessoa = new pessoa_1.default(1, 'Maria');
/*const crud: CrudPessoa = new CrudPessoa()
crud.salvar(pessoa)*/
console.log(pessoa.toString());
const pf = new pessoaFisica_1.default(2, 'joão', '123');
console.log(pf.toString());
