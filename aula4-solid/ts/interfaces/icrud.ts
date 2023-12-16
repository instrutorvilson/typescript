
export default interface ICrud<T>{
    salvar(obj:T):boolean
    alterar(obj:T):boolean
    consultar():[]
    consultarPorId(id:number):T
    excluir(id:number):void
}

interface ICrudEscrita<T>{
    salvar(obj:T):boolean
    alterar(obj:T):boolean
    excluir(id:number):void
}

interface ICrudLeitura<T>{
    consultar():[]
    consultarPorId(id:number):T   
}

export {ICrudEscrita , ICrudLeitura}