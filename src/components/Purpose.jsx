import React from 'react'

const Purpose = () => {

    const features = [
        {
          icon: "🟣", // Replace with your actual icon component or image
          title: "Built for impact",
          description: "We identify and nurture a truly diverse team of designers, developers and marketers"
        },
        {
          icon: "🔴", // Replace with your actual icon component or image
          title: "In sync with you",
          description: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless."
        }
      ];

  return (
    <section id='' className='w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid md:grid-cols-1 grid-cols-1 gap-8'>

        {/*Heading */}
            <div className=''>
                <h1 className='text-lg text-blue-500 font-bold md:text-4xl mb-2'>About Me</h1>
                <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-medium text-gray-800'>My Journey start from here!</h2>
            </div>

        {/*bulletin */}
            {/* <div className=''>
                <h1 className='text-lg text-purple-600 md:text-4xl mb-2'>About Me</h1>
                <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-800'>My Journey start from here!</h2>
            </div> */}

        <div>

        </div>


        </div>
      </div>
    </section>
    
  )
}

export default Purpose
