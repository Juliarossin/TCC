import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

import Cadastro from './pages/Cadastro';
import Login from './pages/login';
import Home from './pages/Home/home';

function Sidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">FaceRec</h1>
      <nav className="flex flex-col space-y-4">
        <Link to="/home" className="hover:text-gray-300">🏠 Home</Link>
        <Link to="/dashboard" className="hover:text-gray-300">📊 Dashboard</Link>
        <Link to="/alunos" className="hover:text-gray-300">📋 Lista de Alunos</Link>
        <Link to="/configuracoes" className="hover:text-gray-300">⚙️ Configurações</Link>
      </nav>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  // Verifica se a página atual é login ou cadastro
  const isPublicPage = location.pathname === '/' || location.pathname === '/cadastro';

  return (
    <div className="flex min-h-screen">
      {/* Só mostra a sidebar se NÃO estiver em login ou cadastro */}
      {!isPublicPage && <Sidebar />}

      <div className="flex-1 bg-gray-50">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
          {/* Rotas futuras:
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/alunos" element={<ListaAlunos />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
          */}
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
