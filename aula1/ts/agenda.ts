import { SignatureHelpRetriggeredReason } from "typescript";

/*let ct:IContato
ct = {
    id:1,
    nome: 'maria',
    email: 'maria@gmail.com'
}

let ct1:IContato
ct1 = {
    id:2,
    nome: 'joao',
    email: 'joao@gmail.com',
    fone:'123'
}

console.log(ct)
console.log(ct1)*/
interface IEndereco {
    id:number,
    rua:string,
    numero?:number | string,
    bairro?: string,
    cidade?: string,
    uf?: string
}

async function getEndereco(cep:string):Promise<IEndereco>{
    let endereco: IEndereco = {id:0, rua:""}
    let dados:Response
    dados = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
    let x = await dados.json()   
    endereco.rua = x.logradouro 
    endereco.cidade = x.localidade
    endereco.bairro = x.bairro
    endereco.uf = x.uf
    return endereco
}



