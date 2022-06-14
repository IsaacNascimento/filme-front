import { ApiFilme } from "../ApiFilme";

class FilmeClienteService {
    getAll() {
        return ApiFilme.get('filmeclientes');
    }

    get(id){
        return ApiFilme.get('filmeclientes/' + id);
    }
    
    create(dados){
        return ApiFilme.post('filmeclientes', dados);
    }

    update(id, dados){
        return ApiFilme.put('filmeclientes/' + id, dados); 
    }

    delete(id){
        console.log(id);
        return ApiFilme.delete("/filmeclientes/" + id)
    }
}

export default new FilmeClienteService();