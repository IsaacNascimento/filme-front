import "./App.css";
import { Menu } from "./components/Menu";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Filmes } from "./pages/Filmes";
import { CreateFilme } from "./pages/Filmes";
import { DetalhesFilmes } from "./pages/Filmes";
import { Elencos, ElencoDetalhes } from "./pages/Elencos/";
import { NotFound } from "./pages/404NotFound/404";

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
            <Route path="/elencos/:id" element={<ElencoDetalhes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
