import logo from './logo.svg';
import './App.css';
import { About } from './components/About';
import { Vans } from './components/Vans';
import { Main } from './components/Main';
import { BrowserRouter, Route , Routes, Link } from 'react-router-dom';
import { VanDetail } from './components/VanDetail';

function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="/vans" element={<Vans />} />
      <Route path="/vans/:id" element={<VanDetail/>}/>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
