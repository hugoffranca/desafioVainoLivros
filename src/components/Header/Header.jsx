import logoLivro from "../../assets/logoLivro.png";
import lupaHeader from "../../assets/lupaHeader.png";
import Inicio from "../../pages/inicio/Inicio.jsx";
import QueroDoar from "../../pages/livrosDoados/livrosDoados.jsx";
import LivrosDoados from "../../pages/queroDoar/queroDoar.jsx";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <BrowserRouter>
      <header>
        <section>
          <img
            src={logoLivro}
            alt="Imagem de um livro azul aberto, com as paginas sendo trocadas, logo do projeto"
          />

          <h1>Livros Vai Na Web</h1>
        </section>

        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/livrosDoados">Livros Doados</Link>
            </li>
            <li>
              <Link to="/queroDoar">Quero Doar</Link>
            </li>
          </ul>
        </nav>

        <section>
          <input
            type="search"
            name=""
            id=""
            placeholder="O que você procura?"
          />
          <button>
            <img
              src={lupaHeader}
              alt="Imagem de uma lupa branca com serventia de ser um botão para pesquisa"
            />
          </button>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/livrosDoados" element={<LivrosDoados />} />
        <Route path="/queroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
