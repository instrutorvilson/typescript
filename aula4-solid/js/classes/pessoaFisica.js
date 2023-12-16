"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa_1 = __importDefault(require("./pessoa"));
class PessoaFisica extends pessoa_1.default {
    constructor(id, nome, cpf) {
        super(id, nome);
        this._cpf = cpf;
    }
    toString() {
        let msg = super.toString();
        msg += ` Cpf: ${this._cpf}`;
        return msg;
    }
}
exports.default = PessoaFisica;
