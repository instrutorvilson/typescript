console.log('hello world')
let nome: string | number | boolean
nome = 'maria'
nome = 10
nome = true

/*function soma(n1:number,n2:number):number | string {
    return n1 + n2
}

let retorno: string
retorno = soma(10,20).toString()

let ret: number | string
ret = soma(25,50)
*/
let nomes:string[] = []
let idade: string | number

nomes.push("maria")

/**tipo tupla */
let item:[number,string,number,number]
item=[10,'milho',10,1]
console.log(item)

/**tipo objeto */
let contato:{
    nome:string, 
    email:string, 
    fone:string
} = {
    nome:'Maria',
    email:'maria@gmail.com',
    fone:'123'
}
contato.nome = 'Maria das dores'
console.log(contato)

let produto:{
    descricao:string,
    preco:number,
    estoque?:number
} = {
    descricao:'milho',
    preco:20
}

