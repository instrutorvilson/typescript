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
const daoProduto_1 = __importDefault(require("./daoProduto"));
const produto_1 = __importDefault(require("./produto"));
const daoCarro_1 = __importDefault(require("./daoCarro"));
const carro_1 = __importDefault(require("./carro"));
const daoProduto = new daoProduto_1.default();
const objProd = new produto_1.default('maça', 13.50, 5);
//daoProduto.save(objProd)
//daoProduto.getAll()
/*
daoProduto.getById(5).then(data => {
    data.setDescricao('Uva branca')
    data.setPreco(19.90)
    data.setEstoque(190)
    daoProduto.update(data)
})
*/
/*const daoCarro = new DaoCarro()
const carro = new Carro('abc-1234','volks','fusca')
daoCarro.save(carro).then(data => console.log(data))*/
function salvar() {
    return __awaiter(this, void 0, void 0, function* () {
        const carro = new carro_1.default('abc-1234', 'volks', 'fusca');
        const retorno = yield new daoCarro_1.default().save(carro);
        console.log(retorno);
    });
}
//salvar()
/*new DaoCarro().getAll().then(data => console.log(data))*/
/*new DaoCarro().getById(3).then(data => console.log(data))*/
function alterar(id, carro) {
    return __awaiter(this, void 0, void 0, function* () {
        const daoCarro = new daoCarro_1.default();
        const carroAntigo = yield daoCarro.getById(id);
        if (carroAntigo != undefined) {
            const novoCarro = yield daoCarro.update(carro);
            console.log(novoCarro);
        }
        else {
            throw "Carro informado não existe";
        }
    });
}
const carro = new carro_1.default('def-2560', 'ford', 'sapao');
carro.setId(4);
alterar(4, carro);
