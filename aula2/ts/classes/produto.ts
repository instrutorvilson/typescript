export class Produto{
   private id:number
   private descricao:string=''
   private valorUnitario:number

    public constructor(id:number,descricao:string,valorUnitario:number){
        this.id = id
        //this.descricao = descricao
        this.setDescricao(descricao)
        this.valorUnitario = valorUnitario
    };
    

    public setDescricao(descricao:string):void{
        if(descricao.length < 3){
            console.log('Descrição deve ter no minimo 3 caracteres')
            return
        }
        this.descricao = descricao
    }

    public getDescricao():string{
        return this.descricao
    }
}