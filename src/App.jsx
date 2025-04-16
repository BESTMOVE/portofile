import { main } from 'framer-motion/client'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import CompanyLogos from './components/CompanyLogos'
import Purpose from './components/Purpose'
import Journey from './components/Journey'
import Footer from './components/Footer'

function App() {

  return (
    <main className='relative min-h-screen overflow-x-hidden'>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-grey-500/20 to-blue-500/20 rounded-full blur-[80px] -z-10'></div>
      {/* <div className='absolute -bottom-0 -right-28 w-[500px] h-[500px] bg-gradient-to-tr from-gray-500/20 to-blue-500/20 rounded-full blur-[80px] '></div> */}
      <div className='overflow-hidden'>
        <Navbar />
        <Hero />
        <CompanyLogos/>
        {/* <Purpose/> */}
        <Journey/>
        <Footer/>

      </div>
      
    </main>
    


    
  )
}

export default App
