import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faPinterest, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PicofMe from '../img/Picofme2.png';

export default function Contact() {

return (
    <div style={{margin:'auto'}}>
      {/* <!-- Contact Forum, edited placeholders and redid a couple sections--> */}
      <div class="container my-5 contact-form ">
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
          <div style={{display:'flex', justifyContent:'center', height:'auto', minWidth:'100%'}}>
            <hr style={{height: '10px', width: '100%'}}/> 
          </div>
          <div class="col-d-flex justify-content-center form-col">
            <div class="row d-flex flex-column follow-me">
              <div class="col d-flex justify-content-center align-items-center">
                <p style={{fontSize: '50px'}}>Follow me at:</p>
              </div>
              <div class="col d-flex justify-content-center align-items-center">
                <a href="https://github.com/OceanSkys" target="_blank"><FontAwesomeIcon icon={faGithub} className="p-1 fa-3x" style={{textDecoration: 'none', color: 'black', height:'50px', width:'50px'}}/></a>
                <a href="https://www.linkedin.com/in/jeremy-thornton-7aa1b9248/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="p-1 fa-3x" style={{textDecoration: 'none', color: '0077b5', height:'50px', width:'50px'}}/></a>
                <a href="https://www.instagram.com/jeremyyzz/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="p-1 fa-3x" style={{textDecoration: 'none', color: 'red', height:'50px', width:'50px'}}/></a>
                <a href="https://www.facebook.com/profile.php?id=100009856054876" target="_blank"><FontAwesomeIcon icon={faFacebook} className="p-1 fa-3x" style={{textDecoration: 'none', color: 'blue', height:'50px', width:'50px'}}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  }