import React from "react";
import img8 from './images/Footer.png'

function Footer (){

    return (
        <div className="Footer">
            <table>
                <tr>
                    <td>
                        <img src={img8} className="end"/> <p className="white">1600 Amphiteatre pakway,CA 94043</p><p className="white">vctung@outlook.com</p>
                        <p className="white">1-800-800-29 (Support)</p>
                    </td>
                
                
                    <table className="center">
                        <tr className="r-one">
                            <th>Community</th>
                            <th>Informations</th>
                            <th>More</th>
                        </tr>
                        <tr className="r-two">
                            <td><a href="#">Learners</a></td>
                            <td><a href="#">About</a></td>
                            <td><a href="#">Press</a></td>
                        </tr>
                        <tr className="r-two">
                            <td><a href="#">Partners</a></td>
                            <td><a href="#">Pricing</a></td>
                            <td><a href="#">Investors</a></td>
                        </tr>
                        <tr className="r-two">
                            <td><a href="#">Developers</a></td>
                            <td><a href="#">Blog</a></td>
                            <td><a href="#">Terms</a></td>
                       </tr>
                            <tr className="r-two">
                                <td><a href="#">Translators</a></td>
                                <td><a href="#">Careers</a></td>
                                <td><a href="#">Privacy</a></td>
                         </tr>
                    </table>
                </tr>
             </table>

            <div className="hi">
                <p className="a">Copyright 2021 Tung Chi Vo</p>
            </div>

        </div>
    )
}
export default Footer;