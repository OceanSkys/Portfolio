import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faPinterest, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from 'react';

import { useState } from 'react';

export default function HeaderFooter() {

    function styleByActiveStatus(isActive) {
        return isActive 
        ? {fontWeight: 'bold', textDecoration: 'none'}
        : { fontWeight: 'normal', textDecoration: 'none'};
    }

    const [visible, setVisible ] = useState(false);

    const toggleVis = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 1000){
            setVisible(true)
        } else if (scrolled <= 1000) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVis);

  return (
    <div>
        <Navbar bg="light" expand="lg">
            <NavLink style={{textDecoration: 'none', width: '150px', height: 'auto', color: 'black'}} className='fs-1 mx-5 py-2 font1' to='/'>Jeremy T.</NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{marginRight: '20px'}}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto nav">
                    <div className='nav-div'>
                        <NavLink style={({isActive}) => styleByActiveStatus(isActive)} to='/'>Home</NavLink>
                        <NavLink style={({isActive}) => styleByActiveStatus(isActive)} to='/MyProjects'>My Projects</NavLink>
                        <NavLink style={({isActive}) => styleByActiveStatus(isActive)} to='/Contact'>Contact</NavLink>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div>
            <Outlet/>
        </div>
        <button
        onClick={scrollToTop}
        style={{
          display: visible ? 'inline' : 'none',
          zIndex: 2,
          position: 'fixed',
          padding: '1rem 1rem',
          fontSize: '20px',
          bottom: '80px',
          right: '40px',
          backgroundColor: '#0C9',
          color: '#fff',
          textAlign: 'center',
          borderRadius: '15%'
        }}
      >
        Top
      </button>
        <footer class="container-fluid footer1 bg-light mt-3">
            <div class="col-6 d-flex flex-shrink-2 align-items-center fa-3x mx-1 footer1 footerdiv">
                {/* <!-- Tried using stylesheet to edit these font icons, no luck, so used inline style --> */}
                <a href="https://github.com/OceanSkys" target="_blank"><FontAwesomeIcon icon={faGithub} style={{textDecoration: 'none', color: 'black', height:'50px', width:'50px'}}/></a>
                <a href="https://www.instagram.com/jeremyyzz/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{textDecoration: 'none', color: 'red', height:'50px', width:'50px'}}/></a>
                <a href="https://www.facebook.com/profile.php?id=100009856054876" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{textDecoration: 'none', color: 'blue', height:'50px', width:'50px'}}/></a>
                <a href="https://www.pinterest.com/" target="_blank"><FontAwesomeIcon icon={faPinterest} style={{textDecoration: 'none', color: 'red', height:'50px', width:'50px'}}/></a>
                <h5 class="px-3">Give me a Follow!</h5>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-center px-3 footerdiv">
                <p class="font1 fs-3 footerdiv">Jeremy Thornton</p>
            </div>
        </footer>
    </div>
  );
}

