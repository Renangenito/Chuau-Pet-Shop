import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Projetos from './pages/Projetos';
import NavBar from './layout/NavBar';
import Footer from './layout/Footer';
import NovoProjeto from './pages/NovoProjeto';


function App() {
  return (
    <div className="App">
        
        < Router>
        <NavBar/>
          <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/projetos' element={<Projetos />} />
              <Route path='/novo-projeto' element={<NovoProjeto />} />
          </Routes>
          < Footer />
        </Router>
    </div>
    
  );
}

export default App;
