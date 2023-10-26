import express from 'express'
import cors from 'cors'
import conexao from '../infra/conexao.js'
const app = express()

app.param('id',(request,response,next,id)=>{
    const sql = "select * from selecoes where id=?"
    conexao.query(sql,id,(error,result)=>{
        if(result.length == 0){
            response.status(404).json({'erro': error})
        }
        next()
    })

   
})

//aceitar qualquer origem para acessar a rota
app.use(cors())

//indicar para o express ler o body como um json na requisção de post
app.use(express.json())


//mock
// const selecoes = [
//     {id: 1, selecao: "Brasil", grupo:"G"},
//     {id: 2, selecao: "Suiça", grupo:"G"},
//     {id: 3, selecao: "Servia", grupo:"G"},
//     {id: 4, selecao: "Camarões", grupo:"G"},
// ]

function buscarSelecaoPorId(id){
    return selecoes.filter((selecao)=>selecao.id == id)
}

//pegar a posição do elemento no array
function buscarIndexSelecao(id){
    return selecoes.findIndex((selecao)=>selecao.id == id)
}

//rotas

app.get('/selecoes',(request,response)=>{
    // response.status(200).send(selecoes)
    const sql = "select * from selecoes"
    conexao.query(sql,(error, result)=>{
        if(error){
            console.log(error)
            response.status(404).json({'erro': error})
        } else{
            response.status(200).json(result)
        }
    })
})

app.get('/selecoes/:id', (request,response)=>{
    let id = request.params.id
    const sql = "select * from selecoes where id=?"
    conexao.query(sql,id,(error, result)=>{
        const query = result[0]
        if(!query){
            response.status(404).json({'erro': 'Time nao encontrado'})
        } else{
            response.status(200).json(query)
        }
    })
    // response.json(buscarSelecaoPorId(index))
})

app.post('/selecoes',(request,response)=>{
    // selecoes.push(request.body)
    // response.status(201).send('Seleção cadastrada com sucesso!')

    const selecao = request.body
    const sql = "insert into selecoes set ?"
    conexao.query(sql,selecao,(erro,result)=>{
        if(erro){
            response.status(400).json('Nao foi possivel cadastrar a seleção')
        } else{
            response.status(201).json(result)
        }

    })
})

app.delete('/selecoes/:id',(request,response)=>{
    const id = request.params.id
    const sql = "delete from selecoes where id=?"
   
    conexao.query(sql,id,(error, result)=>{
        if(error){
            response.status(400).json({'erro':error})
        } 
        response.status(200).json(result)
        
        })
    
    // let index = buscarIndexSelecao(request.params.id)
    // selecoes.splice(index,1)
    // response.send(`Seleção de id ${request.params.id} excluido com sucesso!`)
})

app.put('/selecoes/:id',(request,response)=>{

    const id = request.params.id
    const selecao = request.body

    const sql = "update selecoes set ? where id=?"

    conexao.query(sql,[selecao,id],(error,result)=>{
        if(error){
            response.status(400).json({'erro': error})
        } else{
            response.status(200).json(result)
        }
    })

    // let index = buscarIndexSelecao(request.params.id)
    // selecoes[index].selecao = request.body.selecao
    // selecoes[index].grupo = request.body.grupo
    // response.json(selecoes)
})

export default app
