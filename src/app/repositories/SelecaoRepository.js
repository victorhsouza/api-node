import conexao from "../database/conexao.js"
class SelecaoRepository{
    //CRUD
    create(selecao){
        const sql = "insert into selecoes set ?"
        return new Promise((resolve, reject)=>{
            conexao.query(sql,selecao,(erro, result)=>{
                if(erro) return reject("Não foi possivel cadastrar")
    
                //fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result))
    
                return resolve(row)
            })
           })
    }

    findAll(){
        const sql = "select * from selecoes"
        return new Promise((resolve, reject)=>{
        conexao.query(sql,(erro, result)=>{
            if(erro) return reject("Não foi possivel localizar")

            //fazer o parse dos resultados
            const row = JSON.parse(JSON.stringify(result))

            return resolve(row)
        })
       })
    }

    findById(id){
        const sql = "select * from selecoes where id=?"
        return new Promise((resolve, reject)=>{
            conexao.query(sql,id,(erro, result)=>{
                if(erro) return reject("Não foi possivel localizar")
    
                //fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result))
    
                return resolve(row)
            })
           })
    }

    update(selecao,id){
        const sql = "update selecoes set ? where id=?"
        return new Promise((resolve, reject)=>{
            conexao.query(sql,[selecao,id],(erro, result)=>{
                if(erro) return reject("Não foi possivel alterar")
    
                //fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result))
    
                return resolve(row)
            })
           })
        
    }
    delete(id){
        const sql = "delete from selecoes where id=?"
       
        return new Promise((resolve, reject)=>{
            conexao.query(sql,id,(erro, result)=>{
                if(erro) return reject("Não foi possivel excluir")
    
                //fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result))
    
                return resolve(row)
            })
           })
    }

}

export default new SelecaoRepository()