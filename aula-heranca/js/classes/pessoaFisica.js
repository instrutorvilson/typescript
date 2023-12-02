"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaFisica = void 0;
const pessoa_1 = require("./pessoa");
class PessoaFisica extends pessoa_1.Pessoa {
    constructor(cpf, rg) {
        super(1, 'maria', 'maria@gmail');
        this.cpf = cpf;
        this.rg = rg;
    }
}
exports.PessoaFisica = PessoaFisica;
