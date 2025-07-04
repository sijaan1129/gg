import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BotCommands from './components/BotCommands';
import ProtectionFeatures from './components/ProtectionFeatures';
import Testimonials from './components/Testimonials';
import Support from './components/Support';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 animate-grid-move" />
        
        {/* Floating Particles */}
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <BotCommands />
          <ProtectionFeatures />
          <Testimonials />
          <Support />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;