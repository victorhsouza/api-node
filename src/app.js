import express from 'express'
import cors from 'cors'
import routes from './routes.js'
import conexao, { verificaId } from './app/database/conexao.js'

const app = express()
app.use(express.json())
app.use(cors())
app.param(verificaId)

//usar o router
app.use(routes)



export default app