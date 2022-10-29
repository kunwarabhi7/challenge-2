import React from 'react'
import Databiz from '../images/client-databiz.svg'
import AudioPhle from '../images/client-audiophile.svg'
import Meet from '../images/client-meet.svg'
import Maker from '../images/client-maker.svg'
import HeroImage from '../images/image-hero-desktop.png'

const Hero = () => {
  return (
    <div className='flex'>
      <div className='ml-40'>
        <h1 className='text-7xl font-semibold '  >Make <br /> remote work</h1>
        <p>Get your team in sync, no matter your location. <br/> Streamline processes, create team rituals, and <br />watch productivity soar.</p>
 <button className='bg-black text-white px-3 py-2 rounded-xl'>Learn More</button>
 <div className='flex'>
    <img src={Databiz} alt="" />
    <img src={AudioPhle} alt="" />
    <img src={Meet} alt="" />
    <img src={Maker} alt="" />
 </div>
      </div>
      <div>
        <img src={HeroImage} alt="" />
      </div>
    </div>
  )
}

export default Hero
