import Pessoa from "./pessoa"

export default class PessoaFisica extends Pessoa{
    private _cpf:string
    
    constructor(id:number, nome:string, cpf:string){
       super(id,nome)
       this._cpf = cpf
    }

    public toString():string{
        let msg: string = super.toString()
        msg += ` Cpf: ${this._cpf}`
        return msg
    }
}