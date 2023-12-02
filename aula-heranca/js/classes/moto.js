"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const veiculo_1 = require("./veiculo");
class Moto extends veiculo_1.Veiculo {
    constructor(placa, marca, cilindradas) {
        super(placa, marca);
        this.cilindradas = cilindradas;
    }
    getCilindradas() {
        return this.cilindradas;
    }
}
exports.Moto = Moto;
