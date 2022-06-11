import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Suppport from './components/Suppport';
import AllInOne from './components/AllInOne';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <>
  {/* <h1 className='text-4xl text-blue-400'>God</h1> */}
  <Navbar/>
  <Hero/>
  <About/>
  <Suppport/>
  <AllInOne/>
  <Pricing/>
  <Footer/>

    </>
  )
}

export default App