import { ApiFilme } from "../ApiFilme";

class FilmeService {
    getAll() {
        return ApiFilme.get('filmes');
    }

    get(id){
        return ApiFilme.get('filmes/' + id);
    }
    
    create(dados){
        return ApiFilme.post('filmes', dados);
    }

    update(id, dados){
        return ApiFilme.put('filmes/' + id, dados); 
    }

    delete(id){
        console.log(id);
        return ApiFilme.delete("/filmes/" + id)
    }
}

export default new FilmeService();