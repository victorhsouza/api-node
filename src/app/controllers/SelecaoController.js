import SelecaoRepository from "../repositories/SelecaoRepository.js"

class SelecaoController{

    async index(request,response){
        const row = await SelecaoRepository.findAll()
        response.status(200).json(row)
    }
    async show(request,response){
        const id = request.params.id
        const row = await SelecaoRepository.findById(id)
        response.json(row)
       
    }
    async store(request,response){
        const selecao = request.body
        const row = await SelecaoRepository.create(selecao)
        response.json(row)
        
    }
    async update(request,response){
        const id = request.params.id
        const selecao = request.body

        const row = await SelecaoRepository.update(selecao,id)

        response.json(row)    
    }
    async delete(request,response){
        const id = request.params.id
        const row = await SelecaoRepository.delete(id)

        response.json(row)
       
    }
}

//padrão Singleton
export default new SelecaoController()