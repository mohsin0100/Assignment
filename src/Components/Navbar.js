import React from "react";
import img1 from './images/Header1.png';
import img2 from './images/location.png'
import img3 from './images/email.png'
import img4 from './images/ux-designer-web-designer.png'
import img5 from './images/Component.png'
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Research from "./Pages/Research";

import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes

}from "react-router-dom"

function Navbar () {
    return (
         
        <Router>
            <div className="Main">
               <div className="header">
                   <a className="text"><img className="img5" src={img2}/>1600 Amphiteatre pakway,CA 94043</a>
                   <a><img className="img4" src={img3}/>vctung@outlook.com</a>
               </div>
                <nav className="logo">
                   <Link><img src={img1}/></Link>
                   <Link to="/Home">Home</Link>
                   <Link to="/About">About</Link>
                   <Link>Courses</Link>
                   <Link to="/Contact">Contact</Link>
                   <Link><button className="Sign">SignUP</button></Link>
                   <Link><button>Search</button></Link>

                </nav>
                <div className="details">
                    <p className="yo">Course Details</p>
                    <h1 className="yoo">Web Development</h1>
                </div>
                <div>
                    <Link to="/Research" className="real"><img src={img4}/></Link>
                    <Link to="/Research" className="real"><img src={img5}/></Link>
                </div>

           </div>

           <Routes>
               <Route path="/Home" element={<Home/>}/>
               <Route path="/About" element={<About/>}/>
               <Route path="/Contact" element={<Contact/>}/>
               <Route path="/Research" element={<Research/>} />
           </Routes>

        </Router>
        
    
        // <nav className="Main-Navbar">
        //     <nav className="header">
        //         <div>
        //             <a>
        //                 <img className="img5" src={img2}/>1600 Amphiteatre pakway,CA 94043
        //             </a>
        //             <a>
        //                 <img className="img4" src={img3}/>vctung@outlook.com
        //             </a>

        //         </div>
        //     </nav>
        //     <div className="logo">
        //         <a href=""><img src={img1}/></a>
        //         <a href="#">Home</a>
        //         <a>About</a>
        //         <a href="#">Courses</a>
        //         <a href="#">Contact</a>
        //         <a href="#">
        //             <button className="Sign">SignUp</button>
        //         </a>
        //         <a>
        //             <button >Search</button>
        //         </a>
        //     </div>
        //     <Para/>
        //     <Images/>
        //     <Footer/>
           
        // </nav> 
        
        // <Router>
        //         <nav className="Main-Navbar">
        //             <nav className="header">
        //                 <div>
        //                     <a><img className="img5" src={img2}/>1600 Amphiteatre pakway,CA 94043</a>
        //                     <a><img className="img4" src={img3}/>vctung@outlook.com</a>

        //                 </div>

        //                 <div className="logo">
        //                     <a href="#"><img src={img1}/></a>
        //                     <Link to="/Home">Home</Link>
        //                     <Link to="/About">About</Link>
        //                     <a>Courses</a>
        //                     <a>Contact</a>
        //                     <a><button className="Sign">SignUp</button></a>
        //                     <a><button>Search</button></a>
        //                 </div>

        //             </nav>

        //         </nav>
        //         <Para/>
        //         <Images/>
        //         <Footer/>

        //     <Routes>
        //         <Route path="/Home" element={<Home/>}/>
        //         <Route path="About" element={<About/>}/>
                

        //     </Routes>

        // </Router>
        
        
        // <div className="Main">
        //     <div className="header">
        //         <a className="text"><img className="img5" src={img2}/>1600 Amphiteatre pakway,CA 94043</a>
        //         <a><img className="img4" src={img3}/>vctung@outlook.com</a>
        //     </div>
        //     <nav className="logo">
        //         <a href="#"><img src={img1}/></a>
        //         <a href="#">Home</a>
        //         <a href="#">About</a>
        //         <a href="#">Courses</a>
        //         <a href="#">Contact</a>
        //         <a><button className="Sign">SignUP</button></a>
        //         <a><button>Search</button></a>

        //     </nav>
        //     <Para/>
        //     <Images/>
        //     <Footer/>
        // </div>
        
        

    )
}

export default Navbar;