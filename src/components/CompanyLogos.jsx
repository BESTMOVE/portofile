import React from 'react'
import bca from '../assets/bca.png'
import victoria from '../assets/victoria.png'
import sinarmas from '../assets/sinarmas.png'
import bangkit from '../assets/bangkit.png'
import { img } from 'framer-motion/client'


const CompanyLogos = () => {
    const logos = [sinarmas, victoria, bca, bangkit]
  return (
    <div className='w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start'>
      <div className='w-[300] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base
      text-xl font-semibold text-left'>Recent Company at</div>


      <div className='flex animate-marquee whitespace-nowrap'>
        {logos.map((logos, index) => (
            <img key={index} src={logos} alt="company logo" className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 trasition-all'/>
        ))}


        {logos.map((logos, index) => (
            <img key={'duplicate-${index}'} src={logos} alt="company logo" className='mx-12 h-8 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 trasition-all'/>
        ))}
      </div>
    </div>
  )
}

export default CompanyLogos
