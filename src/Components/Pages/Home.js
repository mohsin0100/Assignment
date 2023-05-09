import React from "react";
import Images from "../Images";
import Footer from "../Footer";
import img4 from './Images/ux-designer-web-designer.png'
import img5 from './Images/Component.png'
import { Link } from "react-router-dom";

function Home(){
    return (
        <div>
                <div className="details">
                    <p className="yo">Course Details</p>
                    <h1 className="yoo">Web Development</h1>
                </div>
                <div>
                    <Link to="/Research" className="real"><img src={img4}/></Link>
                    <Link to="/Research" className="real"><img src={img5}/></Link>
                </div>
            <Images/>
            <Footer/>
        </div>

    )
}
export default Home;