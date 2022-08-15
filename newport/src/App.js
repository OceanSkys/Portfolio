import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='MyProjects' element={<MyProjects />} />
      <Route path='Contact' element={<Contact/>} />
    </Routes>  
  </BrowserRouter>
  );
}

export default App;
