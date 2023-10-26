import express from 'express'
import cors from 'cors'
import conexao from './app/database/conexao.js'

import SelecaoController from './app/controllers/SelecaoController.js'
const app = express()

// app.param('id',(request,response,next,id)=>{
//     const sql = "select * from selecoes where id=?"
//     conexao.query(sql,id,(error,result)=>{
//         if(result.length == 0){
//             response.status(404).json({'erro': error})
//         }
//         next()
//     })
// })

app.use(cors())
app.use(express.json())

app.get('/selecoes',SelecaoController.index)
app.get('/selecoes/:id', SelecaoController.show)
app.post('/selecoes',SelecaoController.store)
app.delete('/selecoes/:id',SelecaoController.delete)
app.put('/selecoes/:id',SelecaoController.update)

export default app