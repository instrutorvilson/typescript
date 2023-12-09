export default class Produto{
    private id?:number
    public descricao:string
    private preco:number
    private estoque:number

    constructor(descricao:string, preco:number, estoque:number){
        this.descricao = descricao
        this.preco = preco
        this.estoque = estoque
    }

    public setId(id:number):void{
        this.id = id
    }

    public setDescricao(descricao:string):void{
        this.descricao = descricao
    }

    public setPreco(preco:number):void{
        this.preco = preco
    }

    public setEstoque(estoque:number):void{
        this.estoque = estoque
    }

    public getId():number | undefined{
        return this.id
    }
}