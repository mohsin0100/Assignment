import React from "react";
import img1 from './images/Header1.png';
import img2 from './images/location.png'
import img3 from './images/email.png'
import About from "./Pages/About";
import Home from "./Pages/Home";
import Para from "./Para";
import Images from "./Images";
import Footer from "./Footer";
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
                   <a href="#"><img src={img1}/></a>
                   <Link to="/Home">Home</Link>
                   <Link to="/About">About</Link>
                   <a href="#">Courses</a>
                   <a href="#">Contact</a>
                   <a><button className="Sign">SignUP</button></a>
                   <a><button>Search</button></a>

                </nav>
               <Para/>
               <Images/>
               <Footer/>
           </div>

           <Routes>
               <Route path="/Home" element={<Home/>}/>
               <Route path="/About" element={<About/>}/>
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