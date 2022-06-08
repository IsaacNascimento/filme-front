import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import FilmeService from '../../../services/crud/FilmeService';

export const DetalhesFilmes = () => {

  const params = useParams();
  const navigate = useNavigate();

  
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState('');

  const getDetails = async () => {
      await FilmeService.get(params.id).then((result) => {
          setMovies(result.data)
      })
      console.log(movies);
  }

  const handleNameEvent = (event) => {
    setName(event.target.value)
  }


  const res = {
    nome: name,
  }

  const handleStoreOrUpdate = async (res) => {
   try{
     if(params.id) {
       await FilmeService.update(params.id, res)
      }  else {
        await FilmeService.create(res);
      }
      navigate('/')
    } catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {
      getDetails();
  }, [])



  return (
    <div>
        <p>
        {movies.nome}
        </p>
        <div>
          <input placeholder='Edite o nome do filme aqui' onChange={handleNameEvent} value={name}></input>
          <button onClick={() => handleStoreOrUpdate(res)}>Salvar</button>
        </div>
        <img src={movies.ulrFoto}/>
    </div>
  )
}
