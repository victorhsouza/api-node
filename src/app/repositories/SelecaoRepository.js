import { response } from "express"
import {consult} from "../database/conexao.js"
class SelecaoRepository{
    //CRUD
    create(selecao){
        const sql = "insert into selecoes set ?"
        return consult(sql,selecao,"Nao foi possivel cadastrar")
    }

    findAll(){
        const sql = "select * from selecoes"
        return consult(sql,"Nao foi possivel localizar")
    }

    findById(id){
        const sql = "select * from selecoes where id=?"
        return consult(sql,id,"Nao foi possivel localizar")
    }

    update(selecao,id){
        const sql = "update selecoes set ? where id=?"
        return consult(sql,selecao,id,"Nao foi possivel atualizar")
        
    }
    delete(id){
        const sql = "delete from selecoes where id=?"
       
        return consult(sql,id,"Nao foi possivel excluir")
    }

}

export default new SelecaoRepository()