import React from "react";
import logo from '../image/food.png'
import '../footer/footer.css'
function Footer(){
    return(
        <div className="footer">
              <img src={logo} className='flogo'></img>
              <div className="footer-main">
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li>About us</li>
                        <li>Team</li>
                        <li>Help & Support</li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li>About us</li>
                        <li>Team</li>
                        <li>Help & Support</li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li>About us</li>
                        <li>Team</li>
                        <li>Help & Support</li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li>About us</li>
                        <li>Team</li>
                        <li>Help & Support</li>
                    </ul>
                </div>
              </div>
              <p>Copyrights@2023</p>
        </div>
    )
}

export default Footer