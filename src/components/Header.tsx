import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Menu, X, LogIn, Bot } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleDiscordLogin = () => {
    // For a proper Discord OAuth login, you need to:
    // 1. Register your redirect URI in Discord Developer Portal
    // 2. Use a valid redirect URI that matches your application settings
    
    // For now, let's redirect to Discord's main page or your support server
    // You'll need to set up proper OAuth in Discord Developer Portal first
    const supportServerUrl = 'https://discord.gg/QZqmjsbgUJ';
    window.open(supportServerUrl, '_blank', 'noopener,noreferrer');
    
    // Alternative: If you want to implement proper OAuth later, use this structure:
    /*
    const clientId = '1311163553763426427';
    const redirectUri = encodeURIComponent('https://your-domain.com/auth/callback');
    const scope = 'identify email guilds';
    const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
    window.open(discordAuthUrl, '_blank', 'noopener,noreferrer');
    */
  };

  const handleInviteBot = () => {
    const botInviteUrl = 'https://discord.com/oauth2/authorize?client_id=1311163553763426427';
    window.open(botInviteUrl, '_blank', 'noopener,noreferrer');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/80 border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
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
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'text-blue-400' : ''}`}>Dashboard</Link>
            <Link to="/commands" className={`nav-link ${isActive('/commands') ? 'text-blue-400' : ''}`}>Commands</Link>
            <Link to="/protection" className={`nav-link ${isActive('/protection') ? 'text-blue-400' : ''}`}>Protection</Link>
            <Link to="/reviews" className={`nav-link ${isActive('/reviews') ? 'text-blue-400' : ''}`}>Reviews</Link>
            <Link to="/support" className={`nav-link ${isActive('/support') ? 'text-blue-400' : ''}`}>Support</Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={handleDiscordLogin}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 hover:scale-105"
              title="Join our Discord community"
            >
              <LogIn className="h-4 w-4" />
              Join Discord
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
              <Link to="/dashboard" className={`nav-link text-left ${isActive('/dashboard') ? 'text-blue-400' : ''}`} onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
              <Link to="/commands" className={`nav-link text-left ${isActive('/commands') ? 'text-blue-400' : ''}`} onClick={() => setIsMenuOpen(false)}>Commands</Link>
              <Link to="/protection" className={`nav-link text-left ${isActive('/protection') ? 'text-blue-400' : ''}`} onClick={() => setIsMenuOpen(false)}>Protection</Link>
              <Link to="/reviews" className={`nav-link text-left ${isActive('/reviews') ? 'text-blue-400' : ''}`} onClick={() => setIsMenuOpen(false)}>Reviews</Link>
              <Link to="/support" className={`nav-link text-left ${isActive('/support') ? 'text-blue-400' : ''}`} onClick={() => setIsMenuOpen(false)}>Support</Link>
              <div className="flex flex-col space-y-3 pt-4">
                <button 
                  onClick={handleDiscordLogin}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center gap-2 justify-center"
                >
                  <LogIn className="h-4 w-4" />
                  Join Discord
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