import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Footer from './components/Footer'
import Nav from './components/Nav'

import Home from './routes/Home'
import Error from './routes/Error'
import Cadastrar from './routes/Cadastrar'
import Sobre from './routes/Sobre'
import Login from './routes/Login'
import Solucao from './routes/Solucao'
import Contato from './routes/Contato'

const App = () => {
  return (
    // Container flex vertical que ocupa 100vh (altura da tela)
    <div className="flex flex-col min-h-screen">
      <Router>
        <Nav />
        {/* Conteúdo que cresce para ocupar o espaço disponível */}
        <main className="flex-grow">
          <Routes>
            <Route path='*' element={<Error />} />
            <Route path='/' element={<Home />} />
            <Route path='/cadastro' element={<Cadastrar />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/login' element={<Login />} />
            <Route path="/solucao" element={<Solucao />} />
            <Route path='/contato' element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
