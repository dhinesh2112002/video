import React from "react";
import video from "../assets/21.mp4";
import vivanata from"../assets/VIVANATA.png";
import i2023 from "../assets/2023.png" 
const Bgvideo = () =>
{
    return (
        <div className="bgContainer">
            
            <div className="overlay"></div>
            <nav class="shift">
    <ul>
      <li><a href="#">ABOUT US</a></li>
      <li><a href="#">EVENTS</a></li>
      <li><a href="#">SIGN IN</a></li>
    </ul>
  </nav>
                <video src={video} autoPlay loop muted/>
                <div className="container">
                    
                <img src={vivanata} id="logo" alt=""/>
                <img src={i2023} id="year" alt="" />
                </div>
        </div>
    )
}
export default Bgvideo;