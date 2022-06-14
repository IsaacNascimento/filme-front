import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill, RiPencilFill } from "react-icons/ri";
import FilmeClienteService from "../../../services/crud/FlimeClinteService";
import FilmeService from "../../../services/crud/FilmeService";

export const FilmeClientes = () => {
  const [movies, setMovies] = useState([]);
  const [filmeCliente, setFilmeCliente] = useState([]);
  console.log(filmeCliente);

  const renderAll = async () => {
    await FilmeService.getAll().then((result) => {
      setMovies(result.data.data);
    });
  };

  const getAllFilmeCliente = () => {
    FilmeClienteService.getAll().then((results) => {
      setFilmeCliente(results.data.data);
    });
  };

  useEffect(() => {
    getAllFilmeCliente();
    renderAll();
  }, []);

  const remove = async (id) => {
    if (window.confirm("Tem certeza que você quer apagar?")) {
      try {
        await FilmeClienteService.delete(id);
        getAllFilmeCliente();
      } catch (e) {
        console.info(e);
      }
    }
  };

  return (
    <div>
      <h1>Filmes & Clientes</h1>
      <Link className="btn btn-info mb-3" to="/create/filmes/clientes">
        {" "}
        Novo Filme & Cliente
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Filme id</th>
            <th>Cliente id</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {filmeCliente.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.filme_id}</td>
              <td>{item.cliente_id}</td>
              <td>
                <Link to={"/filmes/clientes/" + item.id}>
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
