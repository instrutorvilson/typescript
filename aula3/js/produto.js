"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(descricao, preco, estoque) {
        this.descricao = descricao;
        this.preco = preco;
        this.estoque = estoque;
    }
    setId(id) {
        this.id = id;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    setEstoque(estoque) {
        this.estoque = estoque;
    }
    getId() {
        return this.id;
    }
}
exports.default = Produto;
