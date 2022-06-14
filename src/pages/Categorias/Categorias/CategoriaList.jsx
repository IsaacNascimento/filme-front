import React, { useEffect, useState } from 'react';
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill, RiPencilFill } from "react-icons/ri";
import CategoriaService from '../../../services/crud/CategoriaService';

export const Categorias = () => {

    const [categoria, setCategoria] = useState([]);
 console.log(categoria);

 const getAllCategoria = () => {
    CategoriaService.getAll().then((results) => {
      setCategoria(results.data.data);
    });
  };

  useEffect(() => {
    getAllCategoria();
}, [])

const remove = async (id) => {
    if (window.confirm("Tem certeza que você quer apagar?")) {
      try {
        await CategoriaService.delete(id);
        getAllCategoria();
      } catch (e) {
        console.info(e);
      }
    }
  };

  return (
    <div>
        <h1>
        Categorias
        </h1>
        <Link className='btn btn-info mb-3' to="/create/categorias"> Nova Categoria</Link>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>nome</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {categoria.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>
                <Link to={"/categorias/" + item.id}>
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
