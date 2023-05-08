import React from "react";
import img9 from "./Images/Group 46.png"
import img10 from "./Images/Group 47.png"
import img11 from "./Images/Group 48.png"
import img12 from "./Images/Group 49.png"
import img13 from "./Images/Component 16.png"
import Footer from "../Footer";


function Research (){
    return(
        <div>

            <div className="">
                <h1 className="black">Description</h1>
                <p className="a">The online Master of Computer and Information Technology degree (MCIT Online) is an online masters degree in Computer Science tailored for non-Computer Science majors. Offered by the University of Pennsylvania, this new program brings the long-running, established on-campus MCIT degree online. The MCIT Online program empowers students without computer science backgrounds to succeed in computing and technology fields. MCIT Online students come from diverse academic backgrounds ranging from business and history to chemistry and medicine.</p><br></br>
                <p className="a">Computer science might not be in your past, but it will be in your future. Technology has an immense impact on our lives, and is creating fields and positions that didn’t exist five years ago. Equipped with a competitive computer science degree, MCIT Online graduates will be uniquely positioned to fill roles in finance, healthcare, education, and government, as well as in the core software development industry. Exposure to real-world projects throughout the program will prepare students to utilize skills that positively impact society.</p><br></br>
                
                <h1 className="black">What You'll Learn?</h1>
                <img src={img9} className="a"/>
                <img src={img10} className="a"/>
                <img src={img11} className="a"/>
                <img src={img12} className="a"/>
                <img src={img13} className="b"/>


            </div>
            <Footer/>
        </div>
    )
}
export default Research;