import { IShape } from "../interfaces/IShape"

export class triangulo implements IShape{
    public constructor(private base:number, private altura:number){
        this.base = base
        this.altura = altura
    }

    public getBase():number{
        return this.base
    }

    public getAltura():number{
        return this.altura
    }

    public getArea():number{
        return this.base * this.altura
    }
}