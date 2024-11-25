import Header from "./components/Header/Header.jsx"
import "./GlobalStyle/globalStyle.scss";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      </BrowserRouter>
  );
}
