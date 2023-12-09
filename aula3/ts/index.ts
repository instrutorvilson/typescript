import DaoProduto from "./daoProduto";
import Produto from "./produto";
import DaoCarro from "./daoCarro";
import Carro from './carro'

const daoProduto = new DaoProduto()
const objProd: Produto = new Produto('maça',13.50, 5)
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

async function salvar(){
    const carro:Carro = new Carro('abc-1234','volks','fusca')
    const retorno = await new DaoCarro().save(carro);
    console.log(retorno)
}

//salvar()

/*new DaoCarro().getAll().then(data => console.log(data))*/
/*new DaoCarro().getById(3).then(data => console.log(data))*/

async function alterar(id:number, carro:Carro){
const daoCarro = new DaoCarro()
   const carroAntigo = await daoCarro.getById(id)
   if( carroAntigo != undefined){
     const novoCarro =  await daoCarro.update(carro)
     console.log(novoCarro)
   }
   else{
     throw "Carro informado não existe"
   }
}

const carro = new Carro('def-2560','ford','sapao')
carro.setId(4)

alterar(4, carro)


