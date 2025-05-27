import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cadastro from './pages/Cadastro'
import LoginCard from './pages/login'

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginCard />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
