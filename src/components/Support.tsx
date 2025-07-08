import React from 'react';
import { MessageCircle, Mail, Clock, Users, Shield, Bot, ExternalLink } from 'lucide-react';

const Support = () => {
  const handleSupportServer = () => {
    const supportUrl = 'https://discord.gg/QZqmjsbgUJ';
    window.open(supportUrl, '_blank', 'noopener,noreferrer');
  };

  const handleInviteBot = () => {
    const botInviteUrl = 'https://discord.com/oauth2/authorize?client_id=1311163553763426427';
    window.open(botInviteUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="support" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
            <MessageCircle className="h-4 w-4" />
            24/7 Support
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-white">Get Help &</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Support</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Need assistance with NexuSec? Our dedicated support team is here to help you 
            secure your Discord community effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Support Server Card */}
          <div className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">NexuSec Support</h3>
                <p className="text-blue-400">Official Discord Server</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Join our official Discord server for instant support, community discussions, 
              and the latest updates about NexuSec security features.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Active community support</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">Fast response times</span>
              </div>
              <div className="flex items-center gap-3">
                <Bot className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">Direct developer access</span>
              </div>
            </div>

            <button 
              onClick={handleSupportServer}
              className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Join Support Server
            </button>
          </div>

          {/* Contact Information Card */}
          <div className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Direct Contact</h3>
                <p className="text-purple-400">Email & Resources</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              For technical issues, business inquiries, or detailed support requests, 
              reach out to us directly via email.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:nexusec.bot@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  nexusec.bot@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-red-400" />
                <span className="text-gray-300">Priority support available</span>
              </div>
            </div>

            <button 
              onClick={handleInviteBot}
              className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Bot className="h-5 w-5" />
              Add Bot to Server
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;