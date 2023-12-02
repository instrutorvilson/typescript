"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogador = void 0;
class Jogador {
    constructor(id, nome, idade) {
        this.id = id;
        this.nome = nome;
        if (idade != undefined)
            this.idade = idade;
        else
            this.idade = 0;
    }
    getCategoria() {
        if (this.idade > 17) {
            return 'Adulto';
        }
        if (this.idade > 11 && this.idade < 17) {
            return 'Juvenil';
        }
        return 'Infantil';
    }
    setIdade(idade) {
        if (idade < 0) {
            throw 'Idade deve ser um numero positivo';
        }
        else {
            this.idade = idade;
        }
    }
}
exports.Jogador = Jogador;
