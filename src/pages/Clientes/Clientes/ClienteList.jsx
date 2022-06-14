import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill, RiPencilFill } from "react-icons/ri";
import ClienteService from '../../../services/crud/ClienteService';

export const Clientes= () => {
 const [cliente, setcliente] = useState([]);
 console.log(cliente);

 const getAllCliente = () => {
    ClienteService.getAll().then((results) => {
      setcliente(results.data.data);
    });
  };

  const remove = async (id) => {
    if (window.confirm("Tem certeza que você quer apagar?")) {
      try {
        await ClienteService.delete(id);
        getAllCliente();
      } catch (e) {
        console.info(e);
      }
    }
  };

  useEffect(() => {
    getAllCliente();
  }, []);

  return (
    <div>
        <h1>
        Clientes
        </h1>
        <Link className='btn btn-info mb-3' to="/create/cliente"> Novo Cliente</Link>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {cliente.map((item) => (
            <tr key={item.id}>
              <td>{item.email}</td>
              <td>{item.nome}</td>
              <td>{item.telefone}</td>
              <td>
                <Link to={"/cliente/" + item.id}>
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
  )
}
