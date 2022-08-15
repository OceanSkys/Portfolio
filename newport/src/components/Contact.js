import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faPinterest, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";
import PicofMe from '../img/Picofme2.png';

export default function Contact() {

return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fs-5">
    {/* <!-- Added google font --> */}
    <div style={{textDecoration: 'none', width: '300px', height: 'auto'}}>
      <NavLink style={{textDecoration: 'none', width: '200px', height: 'auto', color: 'black'}} className='fs-2 mx-5 py-2 font1' to='/'>Jeremy T.</NavLink>
    </div>
    <button class="navbar-toggler mx-4" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse nav1 mx-1 my-1 fs-4" id="navbarNav">
      {/* <ul class="navbar-nav mx-4"> */}
        {/* <li class="nav-item active px-2">
          <a class="nav-link" href="/index.html">Home</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link" href="/my-projects.html">My Projects</a>
        </li>
        <li class="nav-item px-2">
          <a class="nav-link" href="/contact.html">Contact</a>
        </li> */}
      {/* </ul> */}
      <div style={{display: 'flex', justifyContent:'space-between', width: '350px', marginRight: '25px'}}>
        <NavLink style={{textDecoration: 'none'}} to='/'>Home</NavLink>
        <NavLink style={{textDecoration: 'none'}} to='/MyProjects'>My Projects</NavLink>
        <NavLink style={{textDecoration: 'none'}} to='/Contact'>Contact</NavLink>
      </div>
    </div>
  </nav>
  {/* <!-- Contact Forum, edited placeholders and redid a couple sections--> */}
  <div class="container border-5 border border-color-secondary my-5 contact-form ">
    <div class="row row-form">
      <div class="col d-flex justify-content-center form-col">
        <div class="row d-flex flex-column follow-me">
          <div class="col p-2 d-flex pic-col justify-content-center align-content-center">
            <img src={PicofMe} class=" d-flex align-content-center justify-content-center aboutmepic2 " alt="Picture of Jeremy"/> 
          </div>
          <div class="col d-flex email-col justify-content-center align-items-center">
            <p class="fontEmail">Email me: <span style={{fontWeight: 'bold'}}>jeremythornton59@gmail.com</span></p>
          </div>
        </div>       
      </div>
      <div class="d-flex col form-col2">
      </div>
      <div class="col d-flex justify-content-center form-col">
        <div class="row d-flex flex-column follow-me">
          <div class="col d-flex justify-content-center align-items-center">
            <p style={{fontSize: '50px'}}>Follow me at:</p>
          </div>
          <div class="col d-flex justify-content-center align-items-center">
            <FontAwesomeIcon icon={faGithub} className="p-1 fa-5x" style={{textDecoration: 'none', color: 'black', height:'50px', width:'50px'}}/>
            <FontAwesomeIcon icon={faInstagram} className="p-1 fa-5x" style={{textDecoration: 'none', color: 'red', height:'50px', width:'50px'}}/>
            <FontAwesomeIcon icon={faFacebook} className="p-1 fa-5x" style={{textDecoration: 'none', color: 'blue', height:'50px', width:'50px'}}/>
            <FontAwesomeIcon icon={faPinterest} className="p-1 fa-5x" style={{textDecoration: 'none', color: 'red', height:'50px', width:'50px'}}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Footer Section, need to fix footer for contact page, put fixed bottom for now--> */}
  <footer class="container-fluid footer1 bg-light mt-3">
    <div class="col-6 d-flex flex-shrink-2 align-items-center fa-3x mx-1 footer1 footerdiv">
        {/* <!-- Tried using stylesheet to edit these font icons, no luck, so used inline style --> */}
        <FontAwesomeIcon icon={faGithub} style={{textDecoration: 'none', color: 'black', height:'50px', width:'50px'}}/>
        <FontAwesomeIcon icon={faInstagram} style={{textDecoration: 'none', color: 'red', height:'50px', width:'50px'}}/>
        <FontAwesomeIcon icon={faFacebook} style={{textDecoration: 'none', color: 'blue', height:'50px', width:'50px'}}/>
        <FontAwesomeIcon icon={faPinterest} style={{textDecoration: 'none', color: 'red', height:'50px', width:'50px'}}/>
        <h5 class="px-3 font">Give me a Follow!</h5>
    </div>
    <div class="col-6 d-flex justify-content-end align-items-center px-3 footerdiv">
        <p class="font1 fs-3 footerdiv">Jeremy Thornton</p>
    </div>
  </footer>
  </div>
  )
  }