import React from 'react';
import "./App.css";
import Header from './components/header/Header'
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Project from './components/project/Project';
// import ScrollUp from './components/scrollup/ScrollUp';

const App = () => {
  return (
    <>
        <Header />
        <main className="main">
          <Home />
          <About />
          <Skills />
          <Qualification />
          <Project />
          <Testimonial />
          <Contact />
        </main>
        <Footer />
        {/* <ScrollUp /> */}
    </>
  )
}

export default App