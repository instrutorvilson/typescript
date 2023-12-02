"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quadrado = void 0;
class Quadrado {
    constructor(lado) {
        this.lado = lado;
    }
    getArea() {
        return this.lado * this.lado;
    }
}
exports.Quadrado = Quadrado;
