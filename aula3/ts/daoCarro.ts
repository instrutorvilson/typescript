import Carro from "./carro"

export default class DaoCarro {
    public async save(carro: Carro): Promise<Carro | undefined> {
        try {
            var car = await fetch('http://localhost:3000/carros',
                {
                    method: 'POST',
                    headers: { "Content-type": "application/json; charset=UTF-8" },
                    body: JSON.stringify(carro)
                })            
            return await car.json()
        }
        catch (err) {
            console.log(err)            
        }
    }

    public async getAll():Promise<Carro[]>{
      const carros = await fetch('http://localhost:3000/carros') 
      return carros.json()      
    }

    public async getById(id:number):Promise<Carro | undefined>{
        const carro = await fetch(`http://localhost:3000/carros/${id}`)
        if(carro.status == 404)
          return undefined
        return  carro.json()
    }

    public async update(carro: Carro): Promise<Carro | undefined> {
        try {
            var car = await fetch(`http://localhost:3000/carros/${carro.getId()}`,
                {
                    method: 'PUT',
                    headers: { "Content-type": "application/json; charset=UTF-8" },
                    body: JSON.stringify(carro)
                })            
            return await car.json()
        }
        catch (err) {
            console.log(err)            
        }
    }

}