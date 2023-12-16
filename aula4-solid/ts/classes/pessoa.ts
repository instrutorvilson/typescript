export default class Pessoa{
    private _id:number
    private _nome:string

    constructor(id:number, nome:string){
        this._id = id
        this._nome = nome
    }

    public getId():number{
        return this._id
    }

    public getNome():string{
        return this._nome
    }

    public setId(id:number):void{
       this._id = id
    }

    public setNome(nome:string):void{
        this._nome = nome
     } 
     
    public toString():string{
       return `Id:${this._id} Nome:${this._nome}`
    }
}