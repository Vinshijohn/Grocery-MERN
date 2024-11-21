import React from 'react'
import "./Hero.css"
import hand_icon from "../../Assets/hand_icon.png"
import arrow_icon from "../../Assets/arrow_icon.png"
import hero_img from "../../Assets/hero-img_1.png"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>New launches</h2>
        <div>
            <div className="hero-hand-icon">
                <p>At VPS Grocery, we bring freshness and quality right to your doorstep. Save time,</p>
                <img src={hand_icon} alt='' width={1005}></img>
            </div>
            <p>shop with ease, and enjoy unbeatable prices on all your essentials.</p>
            <p>Experience convenience like never before – because your satisfaction is our priority!</p>
        </div>
        <div className="hero-latest-button">
            <div>Exclusive Grocery</div>
            <img src={arrow_icon} alt="" width={50}/>
        </div>
      </div>

      <div className='hero-right'>
        <img src={hero_img} alt='' width={300}></img>
      </div>
    </div>
  )
}

export default Hero
