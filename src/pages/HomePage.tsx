import React from 'react';
import Hero from '../components/Hero';
import BotCommands from '../components/BotCommands';
import ProtectionFeatures from '../components/ProtectionFeatures';
import Testimonials from '../components/Testimonials';
import Support from '../components/Support';

const HomePage = () => (
  <>
    <Hero />
    <BotCommands />
    <ProtectionFeatures />
    <Testimonials />
    <Support />
  </>
);

export default HomePage;