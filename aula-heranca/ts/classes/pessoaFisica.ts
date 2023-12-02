import { Pessoa } from "./pessoa"

export class PessoaFisica extends Pessoa{
    private cpf:string
    private rg:string

    public constructor(cpf:string, rg:string){
        super(1,'maria','maria@gmail')
        this.cpf = cpf
        this.rg = rg
    }
}