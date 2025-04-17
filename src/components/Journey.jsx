import { section } from 'framer-motion/client'


import heroImage from "../assets/tangan.png"
import React from 'react'

const Journey = () => {
  return (
    <section id='about' className='container mx-auto flex flex-col md:flex-row justify-between items-center pt-10 pb-6 px-4 sm:px-6 lg:px-8'>
          
        <div className='w-full md:w-1/2 space-y-8'>
        
        <h1 className='text-4xl md:text-5xl lg:text6xl font-bold leading-tight text-center'>
            - Education -
        </h1>

        <h1 className='text-4xl md:text-5xl lg:text6xl font-bold leading-tight bg-white-100 rounded-xl'> 
            <span className='text-blue-500 relative inline-block'> Bachelor of Science (B.S).
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60'></span>
            </span> <br />
            <span className='text-gray-400 text-lg-3 relative inline-block'> Bina Nusantara University <br />(BINUS) <span className='text-base'>(2018-2022)</span>
            </span> <br />
            <span className='text-gray-300 text-lg-3 relative inline-block'> Computer Science: Databases
            </span> <br /> <br /><br /><br /><br />
        </h1>
        <br /><br /><br /><br /><br />
    

    </div>

    <div className='w-full md:w-1/2 space-y-8'>
    <h1 className='text-4xl md:text-5xl lg:text6xl font-bold leading-tight text-center'>
            - Experience -
        </h1>

        <h1 className='text-4xl md:text-5xl lg:text6xl font-bold leading-tight bg-white-100 rounded-xl'> 
            <span className='text-blue-500 relative inline-block'> - IT Auditor <span className='text-base'>(currently)</span>
            <span className='absolute bottom-0 left-0 w-full h-0.5 bg-blue-200/60'></span>
            </span> <br />
            <span className='text-gray-400 text-lg-3 relative inline-block'> - IT & Operation Auditor <span className='text-base'>(2022-2024)</span>
            </span> <br />
            <span className='text-gray-300 text-lg-3 relative inline-block'> - Application Developer <span className='text-base'>(2022-2022)</span>
            </span> <br />
            
            
            <br /><br /><br /><br /><br />
        </h1>
        <br /><br /><br /><br /><br />
           </div>
    
        </section>
  )
}

export default Journey
