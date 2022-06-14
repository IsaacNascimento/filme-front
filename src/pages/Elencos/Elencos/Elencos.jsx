import React, { useEffect, useState } from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import ElencoService from "../../../services/crud/ElencoService";
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill, RiPencilFill } from "react-icons/ri";

export const Elencos = () => {
  const [elenco, setElenco] = useState([]);
  console.log(elenco);

  const getAllElenco = () => {
    ElencoService.getAll().then((results) => {
      setElenco(results.data.data);
    });
  };

  const remove = async (id) => {
    if (window.confirm("Tem certeza que você quer apagar?")) {
      try {
        await ElencoService.delete(id);
        getAllElenco();
      } catch (e) {
        console.info(e);
      }
    }
  };

  useEffect(() => {
    getAllElenco();
  }, []);

  return (
    <div>
      <h1>Elencos</h1>
      <Link className='btn btn-info mb-3' to="/create/elenco"> Novo elenco</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Filme</th>
            <th>Biografia</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {elenco.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.biografia}</td>
              <td>
                <Link to={"/elencos/" + item.id}>
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
