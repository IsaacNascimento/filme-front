import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import CategoriaService from "../../../services/crud/CategoriaService";
import { CategoriaValidator } from "../../../services/validators/CategoriaValidator";

export const CatagoriaDetalhes = () => {
  const params = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (params.id) {
      CategoriaService.get(params.id).then((result) => {
        const categoria = result.data;
        console.log(categoria);
        for (let campo in categoria) {
          setValue(campo, categoria[campo]);
        }
      });
    }
  }, []);

  const salvar = (dados) => {
    if (params.id) {
      CategoriaService.update(params.id, dados);
    } else {
      CategoriaService.create(dados);
    }
    navigate("/categorias");
  };

  return (
    <div>
      <h1>Categoria Detalhes</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text"
            {...register("nome", CategoriaValidator.nome)}
          />
           {errors.nome && (
            <span className="text-danger">{errors.nome.message}</span>
          )}
        </Form.Group>
        <div className="text-center">
          <Button onClick={handleSubmit(salvar)} className="btn btn-success">
            <FaCheck /> Salvar
          </Button>{" "}
          <Link className="btn btn-danger" to={-1}>
            <BsArrowLeft /> Voltar
          </Link>
        </div>
      </Form>
    </div>
  );
};
