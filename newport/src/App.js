import './App.css';
import { Routes, Route, HashRouter as Router} from "react-router-dom";
import Home from './components/Home';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import HeaderFooter from './components/HeaderFooter';

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<HeaderFooter />} >
        <Route index element={<Home/>} />
        <Route path='MyProjects' element={<MyProjects />} />
        <Route path='Contact' element={<Contact/>} />
      </Route>
    </Routes>  
  </Router>
  );
}

export default App;
