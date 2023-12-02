"use strict";
console.log('hello world');
let nome;
nome = 'maria';
nome = 10;
nome = true;
/*function soma(n1:number,n2:number):number | string {
    return n1 + n2
}

let retorno: string
retorno = soma(10,20).toString()

let ret: number | string
ret = soma(25,50)
*/
let nomes = [];
let idade;
nomes.push("maria");
/**tipo tupla */
let item;
item = [10, 'milho', 10, 1];
console.log(item);
/**tipo objeto */
let contato = {
    nome: 'Maria',
    email: 'maria@gmail.com',
    fone: '123'
};
contato.nome = 'Maria das dores';
console.log(contato);
let produto = {
    descricao: 'milho',
    preco: 20
};
