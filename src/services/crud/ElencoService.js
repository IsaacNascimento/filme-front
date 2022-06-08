import { ApiFilme } from "../ApiFilme";

class ElencoFilme {
    getAll() {
        return ApiFilme.get('elencos');
    }
    get(id){
        return ApiFilme.get('elencos/' + id);
    }
    create(dados){
        return ApiFilme.post('elencos', dados);
    }
    update(id, dados){
        return ApiFilme.update('elencos/' + id, dados)
    }
    delete(id){
        return ApiFilme.delete('/elencos/' + id);
    }
}   
export default new ElencoFilme();