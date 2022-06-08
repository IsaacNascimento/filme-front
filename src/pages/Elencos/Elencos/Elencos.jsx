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
      <Row className="mb-5 mt-5">
        {elenco?.map((item) => (
          <Col key={item.id} sm={6} md={4} lg={3} className="mb-3 mr-3">
            <Card
              className="h-100 my-5 mr-2 text-decoration-none"
              style={{ heigh: "18rem", width: "18rem" }}
            >
              <Link to={"/elencos/" + item.id}>
                {item.urlFoto && (
                  <Card.Img
                    className="h-100"
                    variant="top"
                    src={item.urlFoto}
                  />
                )}
              </Link>
              <Card.Body>
                <Card.Title>{item.nome}
             
                  {" "}
                  <RiDeleteBin6Fill
                    className="text-danger"
                    onClick={() => remove(item.id)}
                    />
                    </Card.Title>
             
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
