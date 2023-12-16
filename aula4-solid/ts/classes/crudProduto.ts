import ICrud from "../interfaces/icrud";
import Produto from "./produto";

export default class CrudProduto implements ICrud<Produto>{
    salvar(obj: Produto): boolean {
        throw new Error("Method not implemented.");
    }
    alterar(obj: Produto): boolean {
        throw new Error("Method not implemented.");
    }
    consultar(): [] {
        throw new Error("Method not implemented.");
    }
    consultarPorId(id: number): Produto {
        throw new Error("Method not implemented.");
    }
    excluir(id: number): void {
        throw new Error("Method not implemented.");
    }
    

}