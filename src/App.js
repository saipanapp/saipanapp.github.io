import React from 'react';
import Services from './components/Cards';
import Footer from './components/Footer';
import Home from './components/Hero';
import Navbar from './components/Navbar';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className='overflow-x-hidden	'>

      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="contact">
        {/* <Contact /> */}
      </Element>
      <Footer />
    </div>
  );
}

export default App;
