/**desestruturação */
import { ICrudEscrita } from "../interfaces/icrud";
import Produto from "./produto";

class CrudProdutoEscrita implements ICrudEscrita<Produto>{
    salvar(obj: Produto): boolean {
        throw new Error("Method not implemented.");
    }
    alterar(obj: Produto): boolean {
        throw new Error("Method not implemented.");
    }
    excluir(id: number): void {
        throw new Error("Method not implemented.");
    }

}
