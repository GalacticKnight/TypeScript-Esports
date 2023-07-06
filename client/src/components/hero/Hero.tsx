import React from 'react';
import './Hero.css';
import Header from "../header/Header"
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
const Hero = () =>{
    return(
        <div className="background-image">
            <div className='hero'>
                <div className='left-h'>
                    <Header/>
                    <div className="the-best-ad">
                        <div></div>
                        <span>Welcome to the Esports Club</span>
                    </div>
                    {/* Hero Heading */}
                    <div className='hero-text'>
                        <div>
                            <span className='stroke-text'>score </span>
                            {/* stroke test came from app.css */}
                            
                            <span>LIKE A CHAMPION</span>
                        </div>
                        {/* <div>
                            <span>play with the best</span>
                        </div> */}
                        <div>
                            <span>play </span>
                            <span className='stroke-text'>with the best</span>
                        </div>
                    </div>
                    <div className="figures">
                        {/* <div>
                            <span>+140</span>
                            <span>expert coaches</span>
                        </div> */}
                        <div>
                            <span>+978</span>
                            <span>members joined</span>
                        </div>
                        <div>
                            <span>+50</span>
                            <span>Coaching programs</span>
                        </div>
                    </div>
                    {/* hero buttons */}
                    <div className="hero-buttons">
                        <button className="btn">Get Started</button>
                        <button className="btn">Learn More</button>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div className='right-h'>
                    <button className='btn'>Join Now</button>
                    {/* <div className="heart-rate">
                        <img src={Heart} alt=""/>
                        <span>Heart Rate</span>
                        <span>116 bpm</span>
                    </div> */}
                    
                    {/* <img src={hero_image} alt="" className='hero-image'/> */}
                    <img src={hero_image_back} alt="" className='hero-image-back'/>
                    <div className="calories">
                        <img src={Calories} alt=""/>
                        <div>
                            <span>130+</span>
                            <span>Diamond+ Players</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;