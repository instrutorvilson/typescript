"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    constructor(placa, marca) {
        this.placa = placa;
        this.marca = marca;
    }
    getPlaca() {
        return this.placa;
    }
    getMarca() {
        return this.marca;
    }
}
exports.Veiculo = Veiculo;
