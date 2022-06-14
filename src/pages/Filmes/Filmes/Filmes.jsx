import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, Col, Row, Table } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RiDeleteBin6Fill, RiPencilFill } from "react-icons/ri";
import FilmeService from "../../../services/crud/FilmeService";

export const Filmes = () => {
  const [movies, setMovies] = useState([]);

  const renderAll = async () => {
    await FilmeService.getAll().then((result) => {
      setMovies(result.data.data);
    });
  };

  const remove = async (id) => {
    if (window.confirm("Tem certeza que você quer apagar?")) {
      try {
        await FilmeService.delete(id);
        renderAll();
      } catch (e) {
        console.info(e);
      }
    }
  };

  useEffect(() => {
    renderAll();
  }, []);

  return (
    <div>
      <h1>Filmes</h1>

      <Link to="/create/filmes" >Novo filme</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Filme</th>
            <th>Descrição</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item?.descricao}</td>
              <td>
                <Link to={"/filmes/" + item.id}>
                  {" "}
                  <RiPencilFill className="text-dark" />
                </Link>
                <RiDeleteBin6Fill
                  className="text-danger"
                  onClick={() => remove(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    
    </div>
  );
};
