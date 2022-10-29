import React from 'react'
import Databiz from '../images/client-databiz.svg'
import AudioPhle from '../images/client-audiophile.svg'
import Meet from '../images/client-meet.svg'
import Maker from '../images/client-maker.svg'
import HeroImage from '../images/image-hero-desktop.png'

const Hero = () => {
  return (
    <div className='flex justify-around'>
      <div className=''>
        <h1 className='text-7xl font-semibold '  >Make <br /> remote work</h1>
        <p className='text-gray-500 py-8 text-2xl'>Get your team in sync, no matter your location. <br/> Streamline processes, create team rituals, and <br />watch productivity soar.</p>
 <button className='bg-black hover:bg-white hover:text-black border border-black text-white px-8 mt-12 mb-16 py-4 rounded-xl'>Learn More</button>
 <div className='flex mt-8'>
    <img src={Databiz} alt="data" className='mr-4 w-24 h-12' />
    <img src={AudioPhle} alt=""  className='mr-4 w-24 h-12'/>
    <img src={Meet} alt="" className='mr-4 w-24 h-12'/>
    <img src={Maker} alt="" className='mr-4 w-24 h-12'/>
 </div>
      </div>
      <div>
        <img src={HeroImage} alt="hero" className='w-[540px] h-[580px]'  />
      </div>
    </div>
  )
}

export default Hero
