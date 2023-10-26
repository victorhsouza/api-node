import express from 'express'
import cors from 'cors'
import routes from './routes.js'


const app = express()
//usar o router



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

app.use(routes)



export default app