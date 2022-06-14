import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import FilmeClienteService from "../../../services/crud/FlimeClinteService";

export const FilmeClienteDetalhe = () => {
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
      FilmeClienteService.get(params.id).then((result) => {
        const cliente = result.data;
        console.log(cliente);
        for (let campo in cliente) {
          setValue(campo, cliente[campo]);
        }
      });
    }
  }, []);

  const salvar = (dados) => {
    if (params.id) {
      FilmeClienteService.update(params.id, dados);
    } else {
      FilmeClienteService.create(dados);
    }
    navigate("/filmes/clientes");
  };

  return (
    <div>
      <h1>Filme && Cliente Detalhes</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Filme id: </Form.Label>
          <Form.Control
            type="text"
            {...register("filme_id",)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Cliente id: </Form.Label>
          <Form.Control
            type="text"
            {...register("cliente_id",)}
          />
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
