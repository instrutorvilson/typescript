"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaJuridica = void 0;
const pessoa_1 = require("./pessoa");
class PessoaJuridica extends pessoa_1.Pessoa {
    constructor(id, nome, email, cnpj, ie) {
        super(id, nome, email);
        this.cnpj = cnpj;
        this.ie = ie;
    }
}
exports.PessoaJuridica = PessoaJuridica;
