import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home'
import Game from './components/pages/Game'
import About from './components/pages/About'
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />
        <div className = "App">
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/game" element={<Game/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
