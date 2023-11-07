import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port:'3306',
    user: 'root',
    password:'',
    database: 'bdcopa'
})
conexao.connect()

//JSDOC  - Serve para fazer a documentaçao e deixar claro o que esta acontecendo. Ela não é Typescript

/**
 * Executa um codigo SQL com ou sem valores
 * @param {string} sql Instrução SQL a ser executada
 * @param {string=id || [selecao,id]} valores  valores a serem passados para o sql
 * @param {string} mensagemReject mensagem para ser exibida
 * @returns objeto da promise
 */
export const consult = (sql,valores='',mensagemReject)=>{
    return new Promise((resolve, reject)=>{
        conexao.query(sql,valores,(erro, result)=>{
            if(erro) return reject(mensagemReject)

            //fazer o parse dos resultados
            const row = JSON.parse(JSON.stringify(result))

            return resolve(row)
        })
       })
}

export const verificaId = ('id',(request,response,next,id)=>{
    const sql = "select * from selecoes where id=?"
    conexao.query(sql,id,(error,result)=>{
        if(result.length == 0){
            response.status(404).json({'erro': error})
        }
        next()
    })
})

export default conexao