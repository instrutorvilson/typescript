import Produto from "./produto"

export default class DaoProduto {
   
    public getAll(): void{
      fetch('http://localhost:3000/produtos')
      .then(data => data.json())
      .then(response => console.log(response))
   }

   public save(prod: Produto):boolean{      
      fetch('http://localhost:3000/produtos',
      {
        method: 'POST',
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(prod)
      })            
      return true
   }

   public update(prod: Produto):boolean{      
      fetch(`http://localhost:3000/produtos/${prod.getId()}`,
      {
        method: 'PUT',
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(prod)
      })            
      return true
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

   public async getById(id:number):Promise<Produto>{
      let prod: Produto = new Produto('',0,0) 
    
      var dados = await  fetch(`http://localhost:3000/produtos/${id}`)
      var response = await dados.json()
      prod.setId(response.id)
      prod.setDescricao(response.descricao)
      prod.setPreco(response.preco)
      prod.setEstoque(response.estoque)   
      return prod      
   }
}