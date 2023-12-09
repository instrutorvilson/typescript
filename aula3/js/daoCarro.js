"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class DaoCarro {
    save(carro) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var car = yield fetch('http://localhost:3000/carros', {
                    method: 'POST',
                    headers: { "Content-type": "application/json; charset=UTF-8" },
                    body: JSON.stringify(carro)
                });
                return yield car.json();
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const carros = yield fetch('http://localhost:3000/carros');
            return carros.json();
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const carro = yield fetch(`http://localhost:3000/carros/${id}`);
            if (carro.status == 404)
                return undefined;
            return carro.json();
        });
    }
    update(carro) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                var car = yield fetch(`http://localhost:3000/carros/${carro.getId()}`, {
                    method: 'PUT',
                    headers: { "Content-type": "application/json; charset=UTF-8" },
                    body: JSON.stringify(carro)
                });
                return yield car.json();
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.default = DaoCarro;
