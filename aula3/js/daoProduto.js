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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = __importDefault(require("./produto"));
class DaoProduto {
    getAll() {
        fetch('http://localhost:3000/produtos')
            .then(data => data.json())
            .then(response => console.log(response));
    }
    save(prod) {
        fetch('http://localhost:3000/produtos', {
            method: 'POST',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(prod)
        });
        return true;
    }
    update(prod) {
        fetch(`http://localhost:3000/produtos/${prod.getId()}`, {
            method: 'PUT',
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(prod)
        });
        return true;
    }
    /* public getById(id:number):Produto{
        let prod: Produto = new Produto('',0,0)
        fetch(`http://localhost:3000/produtos/${id}`)
        .then(data => data.json())
        .then(response => {
            prod.setId(response.id)
            prod.setDescricao(response.descricao)
            prod.setPreco(response.preco)
            prod.setEstoque(response.estoque)
            console.log(response)
                
        })
        return prod
     }*/
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let prod = new produto_1.default('', 0, 0);
            var dados = yield fetch(`http://localhost:3000/produtos/${id}`);
            var response = yield dados.json();
            prod.setId(response.id);
            prod.setDescricao(response.descricao);
            prod.setPreco(response.preco);
            prod.setEstoque(response.estoque);
            return prod;
        });
    }
}
exports.default = DaoProduto;
