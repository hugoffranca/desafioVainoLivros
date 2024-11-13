import logoLivro from "../../assets/logoLivro.png";
import lupaHeader from "../../assets/lupaHeader.png";
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
              <Link>Início</Link>
            </li>
            <li>
              <Link>Livros Doados</Link>
            </li>
            <li>
              <Link>Quero Doar</Link>
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
        <Route />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}
