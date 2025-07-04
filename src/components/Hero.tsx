import React from 'react';
import { Bot, Shield, Zap, Users, Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleInviteBot = () => {
    const botInviteUrl = 'https://discord.com/oauth2/authorize?client_id=1311163553763426427';
    window.open(botInviteUrl, '_blank');
  };

  const scrollToCommands = () => {
    const element = document.getElementById('commands');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="dashboard" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-orb bg-blue-500/10 w-96 h-96 -top-48 -left-48" />
        <div className="floating-orb bg-red-500/10 w-80 h-80 -top-32 -right-32 animation-delay-1000" />
        <div className="floating-orb bg-blue-500/5 w-64 h-64 top-1/2 left-1/4 animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Bot Online • Protecting 40 Servers
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-white">Discord</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 bg-clip-text text-transparent animate-gradient">Security</span>
                <br />
                <span className="text-white">Revolution</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Advanced AI-powered Discord bot that automatically protects your server from raids, 
                spam, and malicious users with zero configuration required.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-blue-400">
                <Shield className="h-4 w-4" />
                <span>99.9% Threat Detection</span>
              </div>
              <div className="flex items-center gap-2 text-red-400">
                <Zap className="h-4 w-4" />
                <span>Instant Response</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Users className="h-4 w-4" />
                <span>40+ Protected Servers</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={handleInviteBot} className="cta-primary group">
                <Bot className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Add to Discord
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={scrollToCommands} className="cta-secondary">
                View Commands
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-300">5.0 • Trusted by server owners</span>
            </div>
          </div>

          {/* Right Content - Bot Preview */}
          <div className="relative">
            <div className="bot-preview-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white">NexuSec Bot</div>
                  <div className="text-sm text-green-400 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    Online
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="security-stat">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Threats Blocked Today</span>
                    <span className="text-red-400 font-bold">247</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-red-500" style={{width: '78%'}} />
                  </div>
                </div>

                <div className="security-stat">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Server Protection</span>
                    <span className="text-green-400 font-bold">100%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-green-500" style={{width: '100%'}} />
                  </div>
                </div>

                <div className="security-stat">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Response Time</span>
                    <span className="text-blue-400 font-bold">0.2s</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill bg-blue-500" style={{width: '95%'}} />
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="text-green-400 font-semibold text-sm mb-1">Latest Action</div>
                <div className="text-white text-sm">Blocked raid attempt • 12 users banned</div>
                <div className="text-gray-400 text-xs mt-1">2 minutes ago</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500/20 rounded-full animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-red-500/20 rounded-full animate-pulse animation-delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;