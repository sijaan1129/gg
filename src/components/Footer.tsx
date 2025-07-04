import React from 'react';
import { Shield, Github, Twitter, MessageCircle, Mail, Bot } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSupportServer = () => {
    window.open('https://discord.gg/QZqmjsbgUJ', '_blank', 'noopener,noreferrer');
  };

  const handleInviteBot = () => {
    const botInviteUrl = 'https://discord.com/oauth2/authorize?client_id=1311163553763426427';
    window.open(botInviteUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="border-t border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">NexuSec</span>
                <div className="text-xs text-red-400 font-semibold">SECURITY BOT</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Advanced AI-powered Discord security bot protecting 40+ servers with 
              military-grade threat detection and instant response protocols.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-link">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="social-link">
                <Twitter className="h-5 w-5" />
              </a>
              <button onClick={handleSupportServer} className="social-link">
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('dashboard')} className="footer-link">Dashboard</button></li>
              <li><button onClick={() => scrollToSection('commands')} className="footer-link">Commands</button></li>
              <li><button onClick={() => scrollToSection('protection')} className="footer-link">Protection</button></li>
              <li><button onClick={() => scrollToSection('support')} className="footer-link">Support</button></li>
            </ul>
          </div>

          {/* Security Features */}
          <div>
            <h3 className="text-white font-bold mb-6">Security Features</h3>
            <ul className="space-y-3">
              <li><span className="footer-link">Anti-Raid Protection</span></li>
              <li><span className="footer-link">AI Automoderation</span></li>
              <li><span className="footer-link">Silent Monitoring</span></li>
              <li><span className="footer-link">Instant Response</span></li>
              <li><span className="footer-link">User Verification</span></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:nexusec.bot@gmail.com" className="footer-link flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  nexusec.bot@gmail.com
                </a>
              </li>
              <li>
                <button onClick={handleSupportServer} className="footer-link flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Support Server
                </button>
              </li>
              <li>
                <button onClick={handleInviteBot} className="footer-link flex items-center gap-2">
                  <Bot className="h-4 w-4" />
                  Add to Discord
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-center md:text-left">
              © 2025 NexuSec Development. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Status</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;