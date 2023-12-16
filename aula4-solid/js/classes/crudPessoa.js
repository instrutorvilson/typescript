"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CrudPessoa {
    alterar(obj) {
        throw new Error("Method not implemented.");
    }
    consultar() {
        throw new Error("Method not implemented.");
    }
    consultarPorId(id) {
        throw new Error("Method not implemented.");
    }
    excluir(id) {
        throw new Error("Method not implemented.");
    }
    salvar(pessoa) {
        console.log(`Gravando ${pessoa.getNome()} no banco`);
        return true;
    }
}
exports.default = CrudPessoa;
