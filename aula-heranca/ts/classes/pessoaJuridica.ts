import { Pessoa } from "./pessoa"

export class PessoaJuridica extends Pessoa{
    private cnpj:string
    private ie:string

    public constructor(id:number, nome:string, email:string, cnpj:string, ie:string){
        super(id, nome, email)
        this.cnpj = cnpj
        this.ie = ie
    }
}