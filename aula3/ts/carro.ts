export default class Carro{
    private id?:number
    constructor(private placa:string, private marca:string, private modelo:string){
        this.placa = placa
        this.marca = marca
        this.modelo = modelo
    }

    public getPlaca():string{
        return this.placa
    }

    public getId():number | undefined{
        return this.id
    }

    public setId(id:number):void{
        this.id = id
    }
}