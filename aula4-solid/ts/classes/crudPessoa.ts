import ICrud from "../interfaces/icrud"
import Pessoa from "./pessoa"

export default class CrudPessoa implements ICrud<Pessoa>{
    alterar(obj: Pessoa): boolean {
        throw new Error("Method not implemented.")
    }
    consultar(): [] {
        throw new Error("Method not implemented.")
    }
    consultarPorId(id: number): Pessoa {
        throw new Error("Method not implemented.")
    }
    excluir(id: number): void {
        throw new Error("Method not implemented.")
    }
    
    public salvar(pessoa:Pessoa):boolean{
        console.log(`Gravando ${pessoa.getNome()} no banco`)
        return true
     }
}