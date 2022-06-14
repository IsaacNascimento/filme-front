import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import FilmeService from "../../../services/crud/FilmeService";
import { useForm } from "react-hook-form";
import { FilmeValidator } from "../../../services/validators/filmesValidator";

export const DetalhesFilmes = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [movies, setMovies] = useState([]);

  const getDetails = async () => {
    await FilmeService.get(params.id).then((result) => {
      setMovies(result.data);
    });
  };

  const handleStoreOrUpdate = async (dados) => {
    try {
      if (params.id) {
        await FilmeService.update(params.id, dados);
      } else {
        await FilmeService.create(dados);
      }
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  useEffect(() => {
    if (params.id) {
      FilmeService.get(params.id).then((result) => {
        const filmes = result.data;
        for (let field in filmes) {
          setValue(field, filmes[field]);
        }
      });
    }
  }, []);

  return (
    <div>
      <p>{movies.nome}</p>
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Nome do Filme</Form.Label>
            <Form.Control
              type="text"
              isInvalid={errors.nome}
              placeholder="Insira o nome do filme"
              {...register("nome", FilmeValidator.nome)}
            />
            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Descrição do Filme</Form.Label>
            <Form.Control
              type="text"
              placeholder="Edite a descricao do filme aqui"
              {...register("descricao", FilmeValidator.descricao)}
            ></Form.Control>
          </Form.Group>
        </Form>
        <div className="text-center">
          <Button onClick={handleSubmit(handleStoreOrUpdate)}>
            <FaCheck />
            Salvar
          </Button>
          <Link to={-1} className="btn btn-danger">
            <BsArrowLeft /> Voltar
          </Link>
        </div>
      </div>
    </div>
  );
};
