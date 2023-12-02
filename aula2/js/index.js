"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const quadrado_1 = require("./classes/quadrado");
const triangulo_1 = require("./classes/triangulo");
/*console.log("ola")
const ob1 = new Person()
ob1.name = 'maria'
ob1.idade = 45

console.log(ob1)
console.log(ob1.name)
console.log(ob1.idade)*/
/*const prod = new Produto(1,'milho',1.75)
console.log(prod)
console.log(prod.getDescricao())

prod.setDescricao('Mi')
console.log(prod.getDescricao())

const prod2 = new Produto(2,'cafe',3.50)
console.log(prod2)**/
/*const j1 = new Jogador(1,'jose',18)
console.log(j1.getCategoria())

const j2 = new Jogador(2,'maria',13)
console.log(j2.getCategoria())

const j3 = new Jogador(3,'joao',9)
console.log(j3.getCategoria())
const j4 = new Jogador(4, 'pedro')
try{
    j4.setIdade(-1)
    console.log(j4)
}catch(error:any){
    console.log(error)
    console.log(j4)
}*/
const r1 = new quadrado_1.Quadrado(10);
console.log(r1.getArea());
const r2 = new quadrado_1.Quadrado(5);
console.log(r2.getArea());
const r3 = new triangulo_1.triangulo(8, 15);
console.log(r3.getArea());
