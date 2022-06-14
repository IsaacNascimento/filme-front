import { ApiFilme } from "../ApiFilme";

class CategoriaService {
    getAll() {
        return ApiFilme.get('categorias');
    }

    get(id){
        return ApiFilme.get('categorias/' + id);
    }
    
    create(dados){
        return ApiFilme.post('categorias', dados);
    }

    update(id, dados){
        return ApiFilme.put('categorias/' + id, dados); 
    }

    delete(id){
        console.log(id);
        return ApiFilme.delete("/categorias/" + id)
    }
}

export default new CategoriaService();