import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import ServicosNovos from './pages/ServicosNovos';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import NovoOrcamento from './pages/NovoOrcamento';

function App() {
  return (
    <div className="App">
        
        < Router>
        <NavBar/>
          <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/servicos' element={<Servicos />} />
              <Route path='/novosservicos' element={<ServicosNovos />} />
              <Route path='/novoorcamento' element={<NovoOrcamento />} />
          </Routes>
          < Footer />
        </Router>
    </div>
    
  );
}

export default App;
