"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoaFisica_1 = require("./classes/pessoaFisica");
const pessoaJuridica_1 = require("./classes/pessoaJuridica");
/*const veiculo = new Veiculo('abc-1234','Toyota')
console.log(veiculo)

const moto = new Moto('def-1234','honda',300)
console.log(moto)*/
const pf = new pessoaFisica_1.PessoaFisica('789.098.787-09', '123-445-67');
console.log(pf);
const pj = new pessoaJuridica_1.PessoaJuridica(2, 'm&m', 'mm@mm.com', '78.890.908.0001-90', 'nhjhh');
console.log(pj);
