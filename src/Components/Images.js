import React from "react";
import img6 from './images/Repeat Grid 2.png'
import img7 from './images/Componentg.png'

function Images (){
  return (
    <div>
        <div className="grid">
              <a href="#"><img src={img6}/></a>
        </div>
        <div>
            <table>
                <tr> 
                    <th><a className="Girl"><img src={img7}/></a></th>
                    <th>
                    <p className="yellow">Subscribe now</p>
                    <h2 className="blue">Get every single update you will get</h2>
                    <input className="text" placeholder="Enter email address"/><button className="Sign">Subscribe Now</button>
                    </th>
                </tr>
            </table>

           
        </div>
    </div>
    


  )
   
}

export default Images; 