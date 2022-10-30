import React from 'react'
import Databiz from '../images/client-databiz.svg'
import AudioPhle from '../images/client-audiophile.svg'
import Meet from '../images/client-meet.svg'
import Maker from '../images/client-maker.svg'
import HeroImage from '../images/image-hero-desktop.png'
import HeroMobileImage from '../images/image-hero-mobile.png'
 
const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-around'>
      <div className='flex md:hidden'>
        <img src={HeroMobileImage}  alt="mb" className='w-full h-40' />
      </div>

      <div>

        <h1 className='text-7xl hidden md:flex font-semibold '  >Make <br /> remote work</h1>
        <h1 className='text-4xl flex md:hidden mt-8  font-bold ml-8'  >Make  remote work</h1>
        <p className='text-gray-500 py-8 ml-10 md:ml-0 text-2xl'>Get your team in sync, no matter your location. <br/> Streamline processes, create team rituals, and <br />watch productivity soar.</p>
 <button className='bg-black hover:bg-white hover:text-black border  border-black text-white px-8 mt-4  md:mt-12  md:4 ml-24 md:ml-0 md:mb-16 py-4 rounded-xl'>Learn More</button>
 <div className='flex mt-8'>
    <img src={Databiz} alt="data" className='mr-4 md:w-24 md:h-12 w-14 h-7 ml-6 md:ml-0' />
    <img src={AudioPhle} alt=""  className='mr-4 md:w-24 md:h-12 w-14 h-7 ml-6 md:ml-0'/>
    <img src={Meet} alt="" className='mr-4 md:w-24 md:h-12 w-14 h-7 ml-6 md:ml-0'/>
    <img src={Maker} alt="" className='mr-4  md:w-24 md:h-12 w-16 h-7 ml-4 pr-3 md:ml-0 '/>
 </div>
      </div>
      <div>
        <img src={HeroImage} alt="hero" className='w-[540px] h-[580px] hidden md:flex '  />
      </div>
    </div>
  )
}

export default Hero
