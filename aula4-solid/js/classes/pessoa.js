"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(id, nome) {
        this._id = id;
        this._nome = nome;
    }
    getId() {
        return this._id;
    }
    getNome() {
        return this._nome;
    }
    setId(id) {
        this._id = id;
    }
    setNome(nome) {
        this._nome = nome;
    }
    toString() {
        return `Id:${this._id} Nome:${this._nome}`;
    }
}
exports.default = Pessoa;
