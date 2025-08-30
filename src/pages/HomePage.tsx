import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Shield, Zap, Users, Star, ArrowRight, Activity, Clock } from 'lucide-react';

const HomePage = () => {
  const handleInviteBot = () => {
    const botInviteUrl = 'https://discord.com/oauth2/authorize?client_id=1311163553763426427';
    window.open(botInviteUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSupportServer = () => {
    window.open('https://discord.gg/QZqmjsbgUJ', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="floating-orb bg-blue-500/10 w-96 h-96 -top-48 -left-48" />
          <div className="floating-orb bg-red-500/10 w-80 h-80 -top-32 -right-32 animation-delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Bot Online • Protecting 40+ Servers
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-white">Discord</span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 bg-clip-text text-transparent animate-gradient">Security</span>
                <br />
                <span className="text-white">Bot</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Advanced AI-powered Discord security bot that automatically protects your server 
                from raids, spam, and malicious users with intelligent threat detection.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-white font-semibold">Anti-Raid</div>
                <div className="text-gray-400 text-sm">Instant Protection</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-red-400" />
                </div>
                <div className="text-white font-semibold">0.2s Response</div>
                <div className="text-gray-400 text-sm">Lightning Fast</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Activity className="h-6 w-6 text-green-400" />
                </div>
                <div className="text-white font-semibold">99.9% Uptime</div>
                <div className="text-gray-400 text-sm">Always Online</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-purple-400" />
                </div>
                <div className="text-white font-semibold">50k+ Users</div>
                <div className="text-gray-400 text-sm">Protected Daily</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleInviteBot} className="cta-primary group">
                <Bot className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                Add to Discord
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={handleSupportServer} className="cta-secondary">
                Join Support Server
              </button>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-300">5.0 • Trusted by 40+ server owners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-card">
              <div className="text-3xl font-bold text-blue-400 mb-2">247</div>
              <div className="text-gray-300">Threats Blocked Today</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold text-red-400 mb-2">15,000+</div>
              <div className="text-gray-300">Total Threats Stopped</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold text-green-400 mb-2">40+</div>
              <div className="text-gray-300">Servers Protected</div>
            </div>
            <div className="stat-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Active Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="px-4 sm:px-6 lg:px-8 mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Explore <span className="text-blue-400">NexuSec</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/commands" className="protection-card group hover:border-blue-500/30">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Bot className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Commands</h3>
              <p className="text-gray-300 mb-4">Explore 80+ powerful commands for security, moderation, and fun.</p>
              <div className="text-blue-400 font-semibold flex items-center gap-2">
                View All Commands
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/protection" className="protection-card group hover:border-red-500/30">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Protection</h3>
              <p className="text-gray-300 mb-4">Learn about our multi-layer defense system and security features.</p>
              <div className="text-red-400 font-semibold flex items-center gap-2">
                Security Details
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link to="/dashboard" className="protection-card group hover:border-green-500/30">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Activity className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dashboard</h3>
              <p className="text-gray-300 mb-4">Monitor your server's security status and view real-time analytics.</p>
              <div className="text-green-400 font-semibold flex items-center gap-2">
                View Dashboard
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;