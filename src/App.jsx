import "./App.css";
import { Menu } from "./components/Menu";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Filmes } from "./pages/Filmes";
import { CreateFilme } from "./pages/Filmes";
import { DetalhesFilmes } from "./pages/Filmes";
import { Elencos, ElencoDetalhes } from "./pages/Elencos/";
import { NotFound } from "./pages/404NotFound/404";
import { Clientes } from "./pages/Clientes/Clientes/ClienteList";
import { ClienteDetalhes } from "./pages/Clientes/Cliente/ClienteDetalhes";
import { FilmeClientes } from "./pages/FilmeCliente/FilmeClientes/FilmeClientesList";
import { FilmeClienteDetalhe } from "./pages/FilmeCliente/FilmeCliente/FilmeClienteDetalhe";
import { Categorias } from "./pages/Categorias/Categorias/CategoriaList";
import { CatagoriaDetalhes } from "./pages/Categorias/Categoria/CatagoriaDetalhes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Container>
          <Routes>
            <Route path="/" element={<Filmes />} />
            <Route path="/create/filmes" element={<CreateFilme />} />
            <Route path="/filmes/:id" element={<DetalhesFilmes />} />
            <Route path="/elencos" element={<Elencos />} />
            <Route path="/create/elenco" element={<ElencoDetalhes />} />
            <Route path="/elencos/:id" element={<ElencoDetalhes />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/create/cliente" element={<ClienteDetalhes />} />
            <Route path="cliente/:id" element={<ClienteDetalhes />} />
            <Route path="/filmes/clientes" element={<FilmeClientes />} />
            <Route path="/filmes/clientes/:id" element={<FilmeClienteDetalhe />} />
            <Route path="/create/filmes/clientes/" element={<FilmeClienteDetalhe />} />
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/categorias/:id" element={<CatagoriaDetalhes />} />
            <Route path="/create/categorias/" element={<CatagoriaDetalhes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
