import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faPinterest, faGithub } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';
import WeatherImg from '../img/WeatherImg.png';
import FirstWebsite from '../img/Screenshot (388).png';
import Magic8  from '../img/magic8ball.png';
import React1  from '../img/react1.png';
import Viola from '../img/Sunlit Viola.JPG';
import Image2 from '../img/Image2.JPG';
import Image18 from '../img/IMG_1018.JPG';
import BroJumping from '../img/brojumping.jpg';

export default function MyProjects() {

    return(
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
            <h1 class="d-flex fs-1 justify-content-center mt-5 font1">My Websites</h1> 
            {/* <!-- Hero Image/Weather App --> */}
            <section class="container my-5 d-flex justify-content-center">
              <row class="row picRow3 footercolumn2 hero-width">
                <div class="col-6 d-flex align-content-center justify-content-center width1 flex-column">
                  <h1 class="fs-1 d-flex align-content-center justify-content-center font2 contact_first_website">Weather App Website</h1>
                  <p class="fs-4 "><br/> This is a side project I've worked on outside of BitWise! It is a simple Weather App that will give you up-to-date information about the weather and conditions in the city you type in!</p>
                </div>
                <div class="col-6 d-flex align-items-center width2">
                  <a href="https://oceanskys.github.io/WeatherApp/" target="_blank"><img src={WeatherImg} class="img-fluid border border-5 web"  style={{height: '100%', width: '100%', display: 'block'}} id="jer" alt="My Website"/></a>
                </div>
              </row>
            </section>
            {/* <!-- Hero Image/First Website --> */}
            <section class="container my-5 d-flex justify-content-center">
              <row class="row picRow3 footercolumn2 hero-width">
                <div class="col-6 d-flex align-items-center justify-items-center width1">
                  <p class="fs-4 "><span class="fs-1 d-flex align-items-center justify-content-center font2 contact_first_website">My First Ever Website!</span><br/> This is my first website in my first BitWise class, Websites For Beginners. I have always been fascinated with coding and how to build websites, and I am so excited to have taken the leap. My first website was kind of clunky, but I learned a lot in the process. I am so excited to keep learning more!</p>
                </div>
                <div class="col-6 d-flex align-items-center width2">
                  <a href="https://oceanskys.github.io/OceanSkyss.github.io/" target="_blank"><img src={FirstWebsite} class="img-fluid border border-5 web"  style={{height: '100%', width: '100%', display: 'block'}} id="jer" alt="My Website"/></a>
                </div>
              </row>
            </section>
            {/* <!-- 2nd/JavaScript Website --> */}
            <section class="container my-5 d-flex justify-content-center">
              <row class="row picRow3 footercolumn2 hero-width">
                <div class="col-6 d-flex align-items-center justify-items-center width1">
                  <p class="fs-4 "><span class="fs-1 d-flex align-items-center justify-content-center font2 contact_first_website">My Second Website</span><br/> This is my second ever website! After learning html, css, and mobile-responsiveness, we were tasking in making a Magic 8 Ball project! It is completely functional and full of animations. Give it a try!</p>
                </div>
                <div class="col-6 d-flex align-items-center width2">
                  <a href="https://oceanskys.github.io/magic8ball/" target="_blank"><img src={Magic8} class="img-fluid border border-5 web"  style={{height: '100%', width: '100%', display: 'block'}} id="jer" alt="My Website"/></a>
                </div>
              </row>
            </section>
            {/* <!-- 3rd Website/React Store --> */}
            <section class="container my-3 d-flex justify-content-center">
              <row class="row picRow3 footercolumn2 hero-width">
                <div class="col-6 d-flex align-items-center justify-items-center width1">
                  <p class="fs-4"><span class="fs-1 d-flex align-items-center justify-content-center font2 contact_first_website">My Third Website</span><br/> This is my last website that I've worked on! It is a fully functional replica of what it would be like using an E-Commerce Website, with a fully working Cart and Checkout!</p>
                </div>
                <div class="col-6 d-flex align-items-center width2">
                  <a href="https://oceanskys.github.io/finalProject/" target="_blank"><img src={React1} class="img-fluid border border-5 web"  style={{height: '100%', width: '100%', display: 'block'}} id="jer" alt="My Website"/></a>
                </div>
              </row>
            </section>
            {/* <!-- Photography Header --> */}
            <h1 class="d-flex fs-1 justify-content-center mt-5 font1">My Photography</h1> 
            {/* <!-- Photography Section with Columns --> */}
            <div class="container my-2 d-flex justify-content-center">
              <row class="d-flex mx-2 d-flex justify-content-center hobbies2 hero-width">
                <div class="col-6 margin1 d-flex justify-content-start hobbies2">
                  <div class="picCol d-flex flex-wrap hobbies2">
                    <img src={Viola} class="img-fluid border border-5"   id="jer" alt="Picture of a girl playing Viola"/>
                    <img src={Image2} class="img-fluid border border-5"   id="jer" alt="Picture of a Hi"/>
                  </div>
                </div>
                <div class="col-6 margin2 d-flex justify-content-end con2 hobbies2">
                  <div class="picCol d-flex flex-wrap hobbies2">
                    <img src={Image18} class="img-fluid border border-5"  style={{height: '50%', width: '100%', display: 'block'}} id="jer" alt="Picture of a sunlit car"/>
                    <img src={BroJumping} class="img-fluid border border-5"  style={{height: '50%', width: '100%', display: 'block'}} id="jer" alt="Picture of my brother jumping"/>
                  </div>
                </div>
              </row>
            </div>
            {/* <!-- Lua/Youtube Section  -->
            <div class="container my-5 d-flex justify-content-center">
              <div class="row picrow4 flex-row justify-content-center align-items-center hero-width">
                <div class="ytflip col-6">
                  <div class="row ytflip d-flex">
                    <div class="col-6 ytflip2">
                      <p class="fs-4 font2"><span class="fs-1 font1 d-flex justify-content-center">Experience with Video Editing</span><br/>I do happen to have a YouTube channel about gaming and have a little experience with video editing using Davinci Resolve. Film and video have always been fascinating to me and I would love to continue exploring it more.</p>
                    </div>
                    <div class="col-6 d-flex align-self-center justify-content-center embed-responsive embed-responsive-16by9 ytflip2">
                      <iframe width="400" height="300" class="border border-dark"
                      src="https://www.youtube.com/embed/nUm-BhwC7P8">
                      </iframe>
                    </div>
                  </div>
                </div>
                  <div class="ytflip col-6">
                    <div class="row ytflip">
                      <div class="col-6 d-flex ytflip2">
                        <p class="fs-4 font2"><span class="fs-1 font1 d-flex justify-content-center">Experience with Lua</span><br/>Lua is a programming language that I have tinkered with in a video game called Roblox. While I am still not great at it, I can see similarities between it and html/css/javascript.</p>
                      </div>
                      <div class="col-6 d-flex ytflip3">
                        <img src="./img/rblxcode.png" class='border border-dark' alt="Roblox Lua Code" height="auto" width="100%"/> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <!-- Footer Section--> */}
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