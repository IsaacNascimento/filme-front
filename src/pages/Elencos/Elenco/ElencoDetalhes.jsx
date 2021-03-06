import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import ElencoService from "../../../services/crud/ElencoService";
import { ElencoValidator } from "../../../services/validators/elencoValidator";

export const ElencoDetalhes = () => {
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
      ElencoService.get(params.id).then((result) => {
        const elenco = result.data;
      for (let campo in elenco) {
        setValue(campo, elenco[campo]);
      }
    });
    }
  }, []);

  const salvar = (dados) => {
    if (params.id) {
      ElencoService.update(params.id, dados);
    } else {
      ElencoService.create(dados);
    }
    navigate("/elencos");
  };

  return (
    <div>
      <h1>ElencoDetalhes</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text"
            {...register("nome", ElencoValidator.nome)}
          />
          {errors.nome && (
            <span className="text-danger">{errors.nome.message}</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Biografia: </Form.Label>
          <Form.Control
            type="text"
            {...register("biografia", ElencoValidator.biografia)}
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
