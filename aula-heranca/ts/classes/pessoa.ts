export class Pessoa{
    private id:number
    private nome:string
    private email:string

    public constructor(id:number, nome:string, email:string){
        this.id = id
        this.nome = nome
        this.email = email
    }
}