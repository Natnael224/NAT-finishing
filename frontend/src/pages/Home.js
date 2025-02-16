import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import Joke from '../components/Joke';

const Home = () => (
  <div>
    <Hero />
    <Projects />
    <Services />
    <Testimonials />
    <ContactUs />
    <Joke />
  </div>
);

export default Home;
