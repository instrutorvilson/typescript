import CrudPessoa from "./classes/crudPessoa"
import Pessoa from "./classes/pessoa"
import PessoaFisica from "./classes/pessoaFisica"

const pessoa:Pessoa = new Pessoa(1,'Maria')

/*const crud: CrudPessoa = new CrudPessoa()
crud.salvar(pessoa)*/
 console.log(pessoa.toString())

 const pf = new PessoaFisica(2,'joão','123')
 console.log(pf.toString())