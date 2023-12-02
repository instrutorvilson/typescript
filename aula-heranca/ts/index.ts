import { Moto } from "./classes/moto";
import { PessoaFisica } from "./classes/pessoaFisica";
import { PessoaJuridica } from "./classes/pessoaJuridica";
import { Veiculo } from "./classes/veiculo";

/*const veiculo = new Veiculo('abc-1234','Toyota')
console.log(veiculo)

const moto = new Moto('def-1234','honda',300)
console.log(moto)*/

const pf = new PessoaFisica('789.098.787-09','123-445-67');
console.log(pf)

const pj = new PessoaJuridica(2,'m&m','mm@mm.com','78.890.908.0001-90','nhjhh');
console.log(pj)