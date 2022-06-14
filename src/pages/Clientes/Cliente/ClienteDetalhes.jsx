import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClienteService from "../../../services/crud/ClienteService";
import { ClienteValidator } from "../../../services/validators/clienteValidator";
import { mask } from 'remask';

export const ClienteDetalhes = () => {
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
      ClienteService.get(params.id).then((result) => {
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
      ClienteService.update(params.id, dados);
    } else {
      ClienteService.create(dados);
    }
    navigate("/clientes");
  };


  const handleChange = () => {
    const mascara = event.target.getAttribute('mask')
    setValue(event.target.name, mask(event.target.value, mascara))
  }
  return (
    <div>
      <h1>Cliente Detalhes</h1>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text"
            {...register("nome", ClienteValidator.nome)}
          />
          {errors.nome && (
            <span className="text-danger">{errors.nome.message}</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="email"
            {...register("email", ClienteValidator.email)}
          />
          {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control
            type="text"
            {...register("telefone", ClienteValidator.telefone)}
            mask="(99)99999-9999" onChange={handleChange}
          />
          {errors.telefone && (
            <span className="text-danger">{errors.telefone.message}</span>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Senha: </Form.Label>
          <Form.Control
            type="password"
            {...register("senha", ClienteValidator.senha)}
          />
          {errors.senha && (
            <span className="text-danger">{errors.senha.message}</span>
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
