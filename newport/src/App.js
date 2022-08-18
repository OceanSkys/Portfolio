import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import HeaderFooter from './components/HeaderFooter';

function App() {
  return (
  <HashRouter>
    <Routes>
      <Route path='/' element={<HeaderFooter />} >
        <Route index element={<Home/>} />
        <Route path='MyProjects' element={<MyProjects />} />
        <Route path='Contact' element={<Contact/>} />
      </Route>
    </Routes>  
  </HashRouter>
  );
}

export default App;
