import React from "react";
import Footer from "../Footer";

function Contact (){
    return (
        <div className="contact">
            <div>
                <h1 className="title">Contact</h1>
                <h3 className="a">For Queries you can contact us at:</h3>
                <h5 className="a">To visit:</h5>
                <p className="a">The adress is:</p>
                <p className="a">1600 Amphiteatre pakway,CA 94043</p>
                <h5 className="a">Email:</h5>
                <p className="a">You can also Email us at:</p>
                <p className="a">vctung@outlook.com</p>
                <h5 className="a">Phone:</h5>
                <p className="a">You can also contact us at:</p>
                <p className="a">1-800-800-29</p>
            </div>
            <Footer/>

        </div>
    )


}
export default Contact;