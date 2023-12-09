import DaoProduto from "./daoProduto";
import Produto from "./produto";

const daoProduto = new DaoProduto()
const objProd: Produto = new Produto('maça',13.50, 5)
//daoProduto.save(objProd)
//daoProduto.getAll()

daoProduto.getById(5).then(data => {
    data.setDescricao('Uva branca')
    data.setPreco(19.90)
    data.setEstoque(190)
    daoProduto.update(data)
})


