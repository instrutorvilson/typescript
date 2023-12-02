import { Veiculo } from "./veiculo"

export class Moto extends Veiculo{
    private cilindradas:number

    public constructor(placa:string,marca:string,cilindradas:number){
        super(placa,marca)
        this.cilindradas = cilindradas
    }

    public getCilindradas(){
        return this.cilindradas
    }
}