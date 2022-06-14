import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import FilmeService from "../../../services/crud/FilmeService";
import { FaCheck } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";

export const CreateFilme = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [descricao, setDescricao] = useState("");

  const dados = {
    nome: name,
    descricao: descricao,
  };
  const handleEventName = (event) => {
    setName(event.target.value);
  };

  const handleEventDescricao = (event) => {
    setDescricao(event.target.value);
  };

  const store = async (dados) => {
    if (params.id) {
      await FilmeService.update(params.id, dados);
    } else {
      await FilmeService.create(dados);
    }
    navigate("/");
  };

  return (
    <>
      Crie um novo Filme!
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o nome do filme"
              onChange={handleEventName}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descrição:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Insira o descrição"
              onChange={handleEventDescricao}
              value={descricao}
            />
          </Form.Group>
        </Form>
        <div className="text-center">
          <Button onClick={() => store(dados)}>
            <FaCheck /> Salvar
          </Button>{" "}
          <Link to={-1} className="btn btn-danger">
            <BsArrowLeft /> Voltar
          </Link>
        </div>
      </div>
    </>
  );
};
