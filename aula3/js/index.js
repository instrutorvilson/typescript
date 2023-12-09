"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const daoProduto_1 = __importDefault(require("./daoProduto"));
const produto_1 = __importDefault(require("./produto"));
const daoProduto = new daoProduto_1.default();
const objProd = new produto_1.default('maça', 13.50, 5);
//daoProduto.save(objProd)
//daoProduto.getAll()
daoProduto.getById(5).then(data => {
    data.setDescricao('Uva branca');
    data.setPreco(19.90);
    data.setEstoque(190);
    daoProduto.update(data);
});
