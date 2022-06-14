import { ApiFilme } from "../ApiFilme";

class ElencoFilme {
    getAll() {
        return ApiFilme.get('clientes');
    }
    get(id){
        return ApiFilme.get('clientes/' + id);
    }
    create(dados){
        return ApiFilme.post('clientes', dados);
    }
    update(id, dados){
        return ApiFilme.put('clientes/' + id, dados)
    }
    delete(id){
        return ApiFilme.delete('/clientes/' + id);
    }
}   
export default new ElencoFilme();