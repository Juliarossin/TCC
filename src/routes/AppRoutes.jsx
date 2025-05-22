import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Cadastro from "../pages/Cadastro";


export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Login</Link>
        <Link to="/detalhes">Cadastro</Link>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/detalhes/:id" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
