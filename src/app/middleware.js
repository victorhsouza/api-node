import app from "../app";

export const verificaId = app.param('id',(request,response,next,id)=>{
    const sql = "select * from selecoes where id=?"
    conexao.query(sql,id,(error,result)=>{
        if(result.length == 0){
            response.status(404).json({'erro': error})
        }
        next()
    })
})