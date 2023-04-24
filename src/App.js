import React from 'react';
import Analytics from './components/Analytics';
import Services from './components/Cards';
import Footer from './components/Footer';
import Home from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import { Element } from 'react-scroll';

function App() {
  return (
    <div>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
       
      <Element name="services">
        <Services />
      </Element>
       
      <Footer />
    </div>
  );
}

export default App;
