"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(id, descricao, valorUnitario) {
        this.descricao = '';
        this.id = id;
        //this.descricao = descricao
        this.setDescricao(descricao);
        this.valorUnitario = valorUnitario;
    }
    ;
    setDescricao(descricao) {
        if (descricao.length < 3) {
            console.log('Descrição deve ter no minimo 3 caracteres');
            return;
        }
        this.descricao = descricao;
    }
    getDescricao() {
        return this.descricao;
    }
}
exports.Produto = Produto;
