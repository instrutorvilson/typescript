export class Jogador {
   private id:number
   private nome:string
   private idade:number

   public constructor(id:number,nome:string, idade?:number){
      this.id = id
      this.nome = nome
      if(idade != undefined)
        this.idade = idade
      else
        this.idade = 0  
   }

   public getCategoria():string{
     if(this.idade > 17 ){
        return 'Adulto'
     }

    if(this.idade > 11 && this.idade < 17){
         return 'Juvenil'
     }
     return  'Infantil'
   }

   public setIdade(idade:number){
      if(idade < 0){
        throw 'Idade deve ser um numero positivo'
      }
      else{
        this.idade = idade
      }
   }
}