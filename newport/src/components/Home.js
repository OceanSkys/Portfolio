import Picofme2 from '../img/Picofme2.png'
import Beach from '../img/Beach.jpg'
import Laptop from '../img/Laptop 1.JPG'
import Bridge from '../img/Bridge.JPG'
import Img14 from '../img/IMG_1411.JPG'
import Carousel from 'react-bootstrap/Carousel'

export default function Home() {

    return (
    <div>
        {/* <!-- Hero/parallax/welcome --> */}
        <div class="container-fluid d-flex justify-content-center  py-5 px-5 text-center parallax" id="background1">
        <div class="row d-flex justify-content-center text-center">
            <div class= "flex-wrap font2">
            <p >Welcome</p>
            </div>
        </div>
        </div>
        {/* <!-- Section#2 Info about me --> */}
        <section>
        <div class="container-fluid py-5 mt-5 colum d-flex justify-content-center">
            <div class="row d-flex justify-content-center align-items-center border-4 aboutme">
            <div class="col-5 d-flex justify-content-center py-4 picdiv">
                <div class=" d-flex">
                <img src={Picofme2} class=" d-flex align-self-center justify-self-center aboutmepic " alt="Picture of Jeremy"/> 
                </div>
            </div>
            <div class="col-7 d-flex justify-content-center py-4 aboutme">
                <div class="text-left d-flex justify-content-center col-11 flex-column aboutme">
                <h1 class="h1 d-flex align-items-center justify-content-center font1">About Me</h1>
                <p class="opacity-75 fs-4 font d-flex d-flex justify-self-center"><br/> Hello! My name is Jeremy Thornton, and welcome to my website! I was born and raised in Fresno/Clovis, and I am currently taking courses at Clovis Community College. I love learning about computers, science, and the tech industry. I also love what BitWise is doing and how they really care about people, and it is where I see the future of science and technology is going. One interesting fact about me is that I am an identical twin! I am also a very creative person, and love photography, poetry, music, and creating things. </p>
                </div>
            </div>
            </div>
        </div>
        </section>
        {/* <!-- Carousel/Music --> */}
        <section>
        <div class="container-fluid justify-content-center flex-wrap my-4 pt-5 pb-5">
            <row class="d-flex align-items-center justify-content-between carousel-section ">
            <div class="col-5 d-flex justify-content-center align-items-center aboutme left_bottom">
                <p class="font fs-4 col-8 aboutmetxt"><span class="h1 d-flex align-items-center justify-content-center font1">My Hobbies</span><br/>When I am not coding or working on college coursework, I love listening to music! Some of my favorite artists include Bon Iver, Kid Cudi, Phoebe Bridgers, and Coldplay. I also really enjoy playing videos games, and you can find me playing Rocket League, Minecraft, or Fortnite with my little brother. When I have more free time, I love to travel. Hiking is a great passion of mine as well. Photography is another great hobby that I would love to continue when I am able to afford a nice camera. </p>
            </div>
            <Carousel className='right_top' fade>
                <Carousel.Item>
                <img src={Beach} class="d-block carry fit-object2"  alt="Jeremy at the Beach"/>
                </Carousel.Item>
                <Carousel.Item>
                <img src={Laptop} class="d-block carry fit-object2"  alt="Picture of a Gaming Laptop"/>
                </Carousel.Item>
                <Carousel.Item>
                <img src={Bridge} class="d-block carry fit-object2"  alt="Bridge at Carmel, CA"/>
                </Carousel.Item>
                <Carousel.Item>
                <img src={Img14} class="d-block carry fit-object2"  alt="Picture near Mammoth, CA"/>  
                </Carousel.Item>
            </Carousel>
            </row>
        </div>
        </section>
        {/* <Carousel>
            <Carousel.Item>
            <img src={Beach} class="d-block carry fit-object"  alt="Jeremy at the Beach"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={Laptop} class="d-block carry fit-object"  alt="Picture of a Gaming Laptop"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={Bridge} class="d-block carry fit-object"  alt="Bridge at Carmel, CA"/>
            </Carousel.Item>
            <Carousel.Item>
            <img src={Img14} class="d-block carry fit-object"  alt="Picture near Mammoth, CA"/>  
            </Carousel.Item>
        </Carousel> */}
        {/* <!-- <a class="top-link hide" href="" id="js-top"></a> --> */}
        {/* <!-- Footer Section--> */}
        {/* <footer class="container-fluid footer1 bg-light mt-3">
            <div class="col-6 d-flex flex-shrink-2 align-items-center fa-3x mx-1 footer1 footerdiv"> */}
                {/* <!-- Tried using stylesheet to edit these font icons, no luck, so used inline style --> */}
                {/* <a href="https://github.com/OceanSkys" target="_blank"><FontAwesomeIcon icon={faGithub} style={{textDecoration: 'none', color: 'black', height:'50px', width:'50px'}}/></a>
                <a href="https://www.instagram.com/jeremyyzz/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{textDecoration: 'none', color: 'red', height:'50px', width:'50px'}}/></a>
                <a href="https://www.facebook.com/profile.php?id=100009856054876" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{textDecoration: 'none', color: 'blue', height:'50px', width:'50px'}}/></a>
                <a href="https://www.pinterest.com/" target="_blank"><FontAwesomeIcon icon={faPinterest} style={{textDecoration: 'none', color: 'red', height:'50px', width:'50px'}}/></a>
                <h5 class="px-3">Give me a Follow!</h5>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-center px-3 footerdiv">
                <p class="font1 fs-3 footerdiv">Jeremy Thornton</p>
            </div>
        </footer> */}
    </div>
    );
};