import React from 'react'

import heroImage from "../assets/working.png"

const Hero = () => {
  return (
    <section id='home' className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8'>
        
        {/* left col*/}
        <div className='w-full md:w-1/2 space-y-8'>
        
            <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-grey-100 transition-colors cursor-pointer group'>
                <span className='text-blue-500 group-hover:scale-130 transition-transform'>👽</span>
                <span className='text-sm font-medium'>Hellooooo Internet! </span>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text6xl font-bold leading-tight'>
                Hi, my name's <span className='text-blue-500 relative inline-block'> Yohanes Reynaldi.
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60'></span>
                </span> I'm working as an <span className='text-gray-400 relative inline-block'> IT Auditor,
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-gray-200/60'></span>
                </span> Please Welcome<span className='inline-block ml-2 animate-bounce'>!</span>
            </h1>
            <br /><br /><br /><br /><br />
            <p className='text-grey-500 text-lg md:text-xl max-w-xl'>I'd like to take You <span className='text-blue-400 relative inline-block italic'>Deeper</span> as my audience here, so let's Start!</p>


            <p className='text-grey-500 text-md md:text-md max-w-md'>Or would You rather check my <span className='text-gray-400 relative inline-block'>Curriculum vitae (CV)</span>? I can send it straight to Your Email.</p>

            <div className='flex gap-3 max-w-md'>
                <input type="email"
                placeholder='Your Email Address'
                className='flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 trasition-all'>
                </input>
                <button className='bg-blue-500 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-blue-300'>Request</button>
            </div>


            <p className='text-gray-300'>If you wonder ask me why would you made this website? <br/> Well, I'd like to explore new things, thats why I made this Website.</p>

        </div>

        {/* right col */}

        <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
            <div className='relative'>
                <img src={heroImage} alt="hero image" className="rounded-lg relative z-10 hover:scale-[1.02]
                transition-transform duration-300"/>
            </div>
        </div>

    </section>
  )
}

export default Hero
