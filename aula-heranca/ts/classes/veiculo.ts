export class Veiculo{
    private placa:string
    private marca:string

    public constructor(placa:string,marca:string){
        this.placa = placa
        this.marca = marca
    }

    public getPlaca():string{
        return this.placa
    }

    public getMarca():string{
        return this.marca
    }
}