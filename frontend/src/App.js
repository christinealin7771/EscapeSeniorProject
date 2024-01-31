import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Header/>
    </div>
  );
}

export default App;
