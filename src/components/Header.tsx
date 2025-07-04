import React, { useState } from 'react';
import { Shield, Menu, X, LogIn, Bot } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDiscordLogin = () => {
    const clientId = 'YOUR_DISCORD_CLIENT_ID';
    const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback');
    const scope = 'identify email guilds';
    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
    
    window.location.href = discordAuthUrl;
  };

  const handleInviteBot = () => {
    const botInviteUrl = 'https://discord.com/oauth2/authorize?client_id=1311163553763426427';
    window.open(botInviteUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-xl flex items-center justify-center rotate-12 hover:rotate-0 transition-transform duration-300">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-red-500 rounded-xl opacity-30 blur animate-pulse" />
            </div>
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">NexuSec</span>
              <div className="text-xs text-red-400 font-semibold">SECURITY BOT</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('dashboard')} className="nav-link">Dashboard</button>
            <button onClick={() => scrollToSection('commands')} className="nav-link">Commands</button>
            <button onClick={() => scrollToSection('protection')} className="nav-link">Protection</button>
            <button onClick={() => scrollToSection('reviews')} className="nav-link">Reviews</button>
            <button onClick={() => scrollToSection('support')} className="nav-link">Support</button>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={handleDiscordLogin}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <LogIn className="h-4 w-4" />
              Login
            </button>
            <button 
              onClick={handleInviteBot}
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <Bot className="h-4 w-4" />
              Add Bot
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-red-500/20">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('dashboard')} className="nav-link text-left">Dashboard</button>
              <button onClick={() => scrollToSection('commands')} className="nav-link text-left">Commands</button>
              <button onClick={() => scrollToSection('protection')} className="nav-link text-left">Protection</button>
              <button onClick={() => scrollToSection('reviews')} className="nav-link text-left">Reviews</button>
              <button onClick={() => scrollToSection('support')} className="nav-link text-left">Support</button>
              <div className="flex flex-col space-y-3 pt-4">
                <button 
                  onClick={handleDiscordLogin}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 justify-center"
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </button>
                <button 
                  onClick={handleInviteBot}
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold flex items-center gap-2 justify-center"
                >
                  <Bot className="h-4 w-4" />
                  Add Bot
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;