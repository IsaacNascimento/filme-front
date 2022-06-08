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
      <Row className="mb-5 mt-5">
        {movies.map((item) => (
          <Col key={item.id} sm={6} md={4} lg={3} className="mb-3 mr-3">
            <Card
              className="h-100 my-5 mr-2 text-decoration-none"
              style={{ heigh: "18rem", width: "18rem" }}
            >
              <Link to={"/filmes/" + item.id}>
                {item.ulrFoto && (
                  <Card.Img
                    className="h-100"
                    variant="top"
                    src={item.ulrFoto}
                  />
                )}
              </Link>
              <Card.Body>
                <Card.Title>
                  {item.nome}
                  
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
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
      <Link to="/create/filmes">Novo filme</Link>
    </div>
  );
};
