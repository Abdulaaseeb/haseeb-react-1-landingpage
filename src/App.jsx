import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import online from './images/online-world.svg'
import people1 from './images/people1.jpg'
import people2 from './images/people2.jpg'
import people3 from './images/people3.jpg'
import people4 from './images/people4.jpg'
import user1 from './images/user-1.jpg'
import user2 from './images/user-2.jpg'
import user3 from './images/user-3.jpg'
import blog1 from './images/blog1.jpg'
import blog2 from './images/blog2.jpg'
import blog3 from './images/blog3.jpg'
import payment from './images/payment1.png'
function App() {
  return (
    <div className="App">

      {/* Navbar */}

      <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div class="container ">
          <a class="navbar-brand px-5" href="#">DORSIN</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link  px-3" aria-current="page" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#services">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#">Pricing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#">Team</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link px-3" href="#">Contact</a>
              </li>

            </ul>
            <form class="d-flex" role="search">
              <button className=" btn-1 rounded-pill  px-3 py-2 mx-5" type="submit">Try it Free</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Home */}

      <section className='bg-img1' id='home'>
        <div className='bg-color text-center'>
          <h1 className='text-white header-h1 '>We help startups launch their products</h1>
          <h6 className='text-white mt-3 '>Etiam sed.Interdum consequat proin vestibulum class at.</h6>
          <i className="fa-regular icon-1 fa-circle-play fa-beat-fade"></i>
        </div>
      </section>

      {/* Service */}

      <section id='services'>

        <div className='container'>
          <div className='row mt-5'>
            <div className='col-12 text-center'>
              <h1>OUR SERVICES</h1>
              <div className='emptyDiv'></div>
              <h5 className='mt-3  text-secondary' style={{ fontSize: 14, }}>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients</h5>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row mt-5'>
            <div className='col-md-4 col-12'>
              <div className='text-center mt-5 hover-effect'>
                <i className="fa-solid fa-gem  bg-tertiary shadow-lg p-3 iconServices"></i>
                <h4 className='mt-3'>Digital Design</h4>
                <p className='text-secondary mt-3'>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
              </div>
            </div>
            <div className='col-md-4 col-12'>
              <div className='text-center mt-5'>
                <i className="fa-solid fa-display  bg-tertiary shadow-lg p-3 iconServices"></i>
                <h4 className='mt-3'>Unlimited Colors</h4>
                <p className='text-secondary mt-3'>Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.</p>
              </div>
            </div>
            <div className='col-md-4 col-12'>
              <div className='text-center mt-5'>
                <i className="fa-solid fa-piggy-bank bg-tertiary shadow-lg p-3 iconServices"></i>
                <h4 className='mt-3'>Strategy Solutions</h4>
                <p className='text-secondary mt-3'>
                  Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
              </div>
            </div>
            <div className='col-md-4 col-12'>
              <div className='text-center mt-5'>
                <i className="fa-brands fa-react  bg-tertiary shadow-lg p-3 iconServices"></i>
                <h4 className='mt-3'>Awesome Support</h4>
                <p className='text-secondary mt-3'>It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.</p>
              </div>
            </div>
            <div className='col-md-4 col-12'>
              <div className='text-center mt-5'>
                <i className="fa-solid fa-newspaper  bg-tertiary shadow-lg p-3 iconServices"></i>
                <h4 className='mt-3'>Truly Multipurpose</h4>
                <p className='text-secondary mt-3'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>
            <div className='col-md-4 col-12'>
              <div className='text-center mt-5'>
                <i className="fa-solid fa-plane bg-tertiary shadow-lg p-3 iconServices"></i>
                <h4 className='mt-3'>Easy to customize</h4>
                <p className='text-secondary mt-3'>Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}

      <section className='featuretext bg-light'>
        <div className='container text-left  '>
          <div className='row '>
            <div className='col-md-6 col-12  mt-5 text-left'>
              <h3>A digital web design studio creating modern & engaging online experiences</h3>
              <p className='mt-5 text-secondary'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p className='text-secondary mt-5'><i class="fa-solid fa-circle iconfeatures me-2"></i>We put a lot of effort in design.</p>
              <p className='text-secondary'><i class="fa-solid fa-circle iconfeatures me-2"></i>The most important ingredient of successful website.</p>
              <p className='text-secondary'><i class="fa-solid fa-circle iconfeatures me-2"></i>Sed ut perspiciatis unde omnis iste natus error sit.</p>
              <p className='text-secondary'><i class="fa-solid fa-circle iconfeatures me-2"></i>Submit Your Organization.</p>
              <button className=" mb-2 btn btn-warning rounded mt-3  px-4 py-2 " type="submit">Learn More<i class="fa-solid fa-arrow-right ms-3 mt-1"></i></button>

            </div>
            <div className="col-md-6 col-12">
              <img src={online} className='w-100  imgFeature' alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* dream website */}

      <section className="bg-img2 mt-5">
        <div className="bg-color2 text-center text-white">
          <h1 className='header1-h1'>Build your dream website today</h1>
          <h5 className='pt-2'>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</h5>
          <button className='btn btn-light mt-2'>View Plan & Pricing</button>
        </div>
      </section>

      {/* Pricing */}

      <section>

        <div className='container'>
          <div className='row mt-5'>
            <div className='col-12 text-center'>
              <h1>OUR PRICING</h1>
              <div className='emptyDiv'></div>
              <h5 className='mt-3  text-secondary ' style={{ fontSize: 14, }}>Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</h5>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="text-center border rounded shadow-lg mt-5">
                <h6 className='mt-5'>ECONOMY</h6>
                <h1 className='mt-3'>$9.90</h1>
                <p className='text-secondary'>BILLING PER MONTH</p>
                <p className='mt-5'></p><hr />
                <p className='pricingPara'><span>Bandwidth:</span><span className='textRed'> 1GB</span></p>
                <p><span>Onlinespace:</span><span className='textRed'> 50MB</span></p>
                <p><span>Support:</span><span className='textRed'> No</span></p>
                <p><span className='textRed'>1</span><span> Domain</span></p>
                <p><span className='textRed'>No</span><span> Hidden Fees</span></p>
                <button className='mt-3 btn btn-warning mb-2'>Join Now</button>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="text-center border rounded shadow-lg mt-5">
                <h6 className='mt-5'>DELUXE</h6>
                <h1 className='mt-3'>$19.90</h1>
                <p className='text-secondary '>BILLING PER MONTH</p>
                <p className='mt-5'></p><hr />
                <p className='pricingPara'><span>Bandwidth:</span><span className='textRed'> 10GB</span></p>
                <p><span>Onlinespace:</span><span className='textRed'> 500MB</span></p>
                <p><span>Support:</span><span className='textRed'> Yes</span></p>
                <p><span className='textRed'>10</span><span> Domain</span></p>
                <p><span className='textRed'>No</span><span> Hidden Fees</span></p>
                <button className='mt-3 btn btn-warning mb-2'>Join Now</button>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="text-center border rounded shadow-lg mt-5">
                <h6 className='mt-5'>ULTIMATE</h6>
                <h1 className='mt-3'>$29.90</h1>
                <p className='text-secondary '>BILLING PER MONTH</p>
                <p className='mt-5'></p><hr />
                <p className='pricingPara'><span>Bandwidth:</span><span className='textRed'> 100GB</span></p>
                <p><span>Onlinespace:</span><span className='textRed'> 2GB</span></p>
                <p><span>Support:</span><span className='textRed'> Yes</span></p>
                <p><span className='textRed'>Unlimited</span><span> Domain</span></p>
                <p><span className='textRed'>No</span><span> Hidden Fees</span></p>
                <button className='mt-3 btn btn-warning mb-2'>Join Now</button>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Profile */}

      <section>
        <div className='container'>
          <div className='row mt-5'>
            <div className='col-12 text-center'>
              <h1>BEHIND THE PEOPLE</h1>
              <div className='emptyDiv'></div>
              <h5 className='mt-3  text-secondary ' style={{ fontSize: 14, }}>It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout.</h5>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row text-center people">
            <div className="col-md-3 col-12 mt-5">
              <img src={people1} className='w-100 border rounded' alt="" />
              <h6 className='mt-3'>Frank Johnson</h6>
              <p className='text-secondary'>CEO</p><hr />
            </div>
            <div className="col-md-3 col-12 mt-5">
              <img src={people2} alt="" className='w-100 border rounded' />
              <h6 className='mt-3'>Elaine Stclair</h6>
              <p className='text-secondary'>DESIGNER</p><hr />
            </div>
            <div className="col-md-3 col-12 mt-5">
              <img src={people3} alt="" className='w-100 border rounded' />
              <h6 className='mt-3'>Wanda Arthur</h6>
              <p className='text-secondary'>DEVELOPER</p><hr />
            </div>
            <div className="col-md-3 col-12 mt-5">
              <img src={people4} alt="" className='w-100 border rounded' />
              <h6 className='mt-3'>Joshua Stemple</h6>
              <p className='text-secondary'>MANAGER</p><hr />
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}

      <section className="bg-light">
        <div className='container mt-5'>
          <div className='row mt-5'>
            <div className='col-12 text-center mt-5'>
              <h1>Work Process</h1>
              <div className='emptyDiv'></div>
              <h5 className='mt-3  text-secondary ' style={{ fontSize: 14, }}>In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the Proin vitae ipsum vel ex finibus semper design starts.</h5>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12 mt-5 text-center">
              <i class="fa-solid fa-pen-fancy textRed fs-1 "></i>
              <h5 className='mt-3'>Tell us what you need</h5>
              <p className='mt-1 text-secondary'>The Big Oxmox advised her not to do so.</p>
            </div>
            <div className="col-md-4 col-12 mt-5 text-center">
              <i class="fa-solid fa-address-card textRed fs-1"></i>
              <h5 className='mt-3'>Get free quotes</h5>
              <p className='mt-1 text-secondary'>Little Blind Text didn’t listen.</p>
            </div>
            <div className="col-md-4 col-12 mt-5 text-center">
              <i class="fa-solid fa-bullseye fs-1 textRed"></i>
              <h5 className='mt-3'>Deliver high quality product</h5>
              <p className='mt-1 text-secondary'>When she reached the first hills.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <button className=' mb-5 btn btn-warning rounded mt-5  px-4 py-2'>Get Started<i class="fa-solid fa-arrow-right ms-3 mt-1"></i> </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What they */}

      <section>
        <div className='container mt-5'>
          <div className='row mt-5'>
            <div className='col-12 text-center mt-5'>
              <h1>WHAT THEY'VE SAID</h1>
              <div className='emptyDiv'></div>
              <h5 className='mt-3  text-secondary ' style={{ fontSize: 14, }}>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious pulvinar metus molestie sed Semikoli.</h5>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4 col-12 text-center">
              <div className="text-center shadow-lg border rounded mt-5 h-75">
                <img src={user1} alt="" className=' img-thumbnail  rounded-pill  user1' />
                <p className='text-secondary ps-3 pe-3' style={
                  {
                    fontSize: "15px"
                  }}><i>“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.”</i></p>
              </div>
              <p className='mt-3'><span >RUBEN REED</span>  - <span className='text-secondary'>Charleston</span></p>

            </div>
            <div className="col-md-4 col-12 text-center">
              <div className="text-center shadow-lg border rounded mt-5 h-75">
                <img src={user2} alt="" className=' img-thumbnail  rounded-pill  user1' />
                <p className='text-secondary ps-3 pe-3' style={
                  {
                    fontSize: "15px"
                  }}><i>“Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures Integer varius lacus non magna tempor congue natuasre the whole its beauty.”</i></p>
              </div>
              <p className='mt-3'><span >MICHAEL P. HOWLETT</span>  - <span className='text-secondary'>Worcester</span></p>

            </div>
            <div className="col-md-4 col-12 text-center">
              <div className="text-center shadow-lg border rounded mt-5 h-75">
                <img src={user3} alt="" className=' img-thumbnail  rounded-pill  user1' />
                <p className='text-secondary ps-3 pe-3' style={
                  {
                    fontSize: "15px"
                  }}><i>“I've learned that people will forget what you said, people will forget what you did, but people will never aliquam in nunc quis tincidunt forget how you vestibulum egestas them feel.”</i></p>
              </div>
              <p className='mt-3'><span >THERESA D. SINCLAIR</span>  - <span className='text-secondary'>Lynchburg</span></p>

            </div>
          </div>
        </div>
      </section>

      {/* Get started */}

      <section className='bg-img3 mt-5'>
        <div className='bg-color3'>
          <div className='container mt-5 text-white'>
            <div className='row mt-5'>
              <div className='col-12 text-center mt-5  '>
                <h1 className='header-h1'>Let's Get Started</h1>
                <div className='emptyDiv'></div>
                <h5 className='mt-3 ' style={{ fontSize: 14, }}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h5>
                <button className='btn btn-light mt-3 py-2'>Get Started<i class="fa-solid fa-arrow-right ms-3 mt-1"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* blog */}

      <section>
        <div className='container mt-5'>
          <div className='row mt-5'>
            <div className='col-12 text-center mt-5  '>
              <h1 className=''>BLOG</h1>
              <div className='emptyDiv'></div>
              <h5 className='mt-3 text-secondary' style={{ fontSize: 14, }}>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus ipsum vel ex finibus semper luctus quam.</h5>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <div className="mt-5">
                <img src={blog1} className='w-100' alt="" />
                <h6 className='text-secondary mt-3'>UI & UX Design</h6>
                <h5 className='mt-3 h4Blog'>Doing a cross country road trip</h5>
                <p className='mt-3 text-secondary'>She packed her seven versalia, put her initial into the belt and made herself on the way..</p>
                <p className="textRed readBlog">Read More<i class="fa-solid fa-arrow-right ms-3 mt-1"></i></p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="mt-5">
                <img src={blog2} className='w-100' alt="" />
                <h6 className='text-secondary mt-3'>Digital Marketing</h6>
                <h5 className='mt-3 h4Blog'>New exhibition at our Museum</h5>
                <p className='mt-3 text-secondary'>Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                <p className="textRed readBlog">Read More<i class="fa-solid fa-arrow-right ms-3 mt-1"></i></p>
              </div>
            </div>
            <div className="col-md-4 col-12">
              <div className="mt-5">
                <img src={blog3} className='w-100' alt="" />
                <h6 className='text-secondary mt-3'>Travelling</h6>
                <h5 className='mt-3 h4Blog'>Why are so many people..</h5>
                <p className='mt-3 text-secondary'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia..</p>
                <p className="textRed readBlog">Read More<i class="fa-solid fa-arrow-right ms-3 mt-1"></i></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact */}

      <section className="bg-light">
        <div className='container mt-5'>
          <div className='row mt-5'>
            <div className='col-12 text-center mt-5  '>
              <h1>GET IN TOUCH</h1>
              <div className='emptyDiv'></div>
              <h5 className='mt-3 text-secondary' style={{ fontSize: 14, }}>We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with faucibus sapien odio measurable results.</h5>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4 col-12 mt-5">
              <h6>Office Address 1:</h6>
              <p className='text-secondary mt-2'>4461 Cedar Street Moro, AR 72368</p>
              <h6 className='mt-4'>Office Address 2:</h6>
              <p className='text-secondary mt-2'>2467 Swick Hill Street <br /> New Orleans, LA 70171</p>
              <h6 className='mt-4'>Working Hours:</h6>
              <p className='text-secondary mt-2'>9:00AM To 6:00PM</p>
            </div>
            <div className="col-md-8 col-12 mt-3 ">
              <div className="row mt-3">
                <div className="col-md-6 col-12">
                  <input type="text" placeholder='Your name*' className='w-100 border rounded p-3 bg-light mt-3' />
                </div>
                <div className="col-md-6 col-12">
                  <input type="email" placeholder='Your email*' className='w-100 border rounded p-3 bg-light mt-3' />
                </div>
              </div>
              <div className="col-12">
                <input type="text" placeholder='Your Subject..' className='w-100 border rounded p-3 bg-light mt-3' />
              </div>
              <div className="col-12">
                <textarea name="comment" placeholder='Your message...' id="" cols="82" rows="3" className='w-100 border rounded p-3 bg-light mt-3'></textarea>
              </div>
              <div className="col-12 text-end mt-2 mb-3">
                <button className='btn btn-warning'>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* footer */}

<section className='bg-light mt-5'>
  <div className="container">
     <div className="row mt-5">
      <div className="col-md-6 col-12">
      <i class="fa-brands fa-facebook iconsFooter1 mx-2 p-3 my-5 h4Blog"></i>
      <i class="fa-brands fa-twitter iconsFooter1 mx-2 p-3 my-5 h4Blog"></i>
      <i class="fa-brands fa-linkedin iconsFooter1 mx-2 p-3 my-5 h4Blog"></i>
      <i class="fa-brands fa-google-plus-g iconsFooter1 mx-2 p-3 my-5 h4Blog"></i>
      </div>
      <div className="col-md-3 col-12">
      <p><i class="fa-solid fa-phone my-5 iconsFooter2 p-3"></i>+91 333 2319920</p>
      </div>
      <div className="col-md-3 col-12">
      <p><i class="fa-regular fa-envelope-open iconsFooter2 p-3 my-5"></i>haseebharoon147.com</p>
      </div>
     </div>
  </div>
</section>
<section style={{backgroundColor:"#2e313a",}}>
  <div className="container">
    <div className="row">
      <div className="col-md-3 col-12 my-5">
        <h4 className='text-white '>DORSIN</h4>
        <p className='text-secondary mt-5'>Home</p> 
        <p className='text-secondary'>Contact us</p>
        <p className='text-secondary'>About us</p>
        <p className='text-secondary'>Careers</p>
      </div>
      <div className="col-md-3 col-12 my-5">
      <h4 className='text-white '>Information</h4>
        <p className='text-secondary mt-5'>Terms & Condition</p> 
        <p className='text-secondary'>About us </p>
        <p className='text-secondary'>Jobs</p>
        <p className='text-secondary'>Bookmarks</p>
      </div>
      <div className="col-md-3 col-12 my-5">
      <h4 className='text-white '>Support</h4>
        <p className='text-secondary mt-5'>FAQ</p> 
        <p className='text-secondary'>Contact</p>
        <p className='text-secondary'>Disscusion</p>
      </div>
      <div className="col-md-3 col-12 my-5 Subscribe">
      <h4 className='text-white '>Subscribe</h4>
      <p className='text-secondary mt-5'>In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p> 
      <input type="email" name="" id="" placeholder='Email' style={{backgroundColor:"black", color:'white',border:"none",}} className='rounded p-2 w-100'/>
      </div>
    </div>
  </div>
</section>
<footer className='bg-dark'>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-12 text-start">
      <p className='my-3 text-secondary'>2019 - 2023 © Dorsin - Themesbrand</p>
      </div>
      <div className="col-md-6 col-12 text-end">
       <img src={payment} className='w-25 my-3' alt="" />
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}

export default App;
