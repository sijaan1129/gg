import React, { useState } from 'react';
import { X, ExternalLink, Shield, Users, MessageCircle } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleJoinDiscord = () => {
    const supportServerUrl = 'https://discord.gg/QZqmjsbgUJ';
    window.open(supportServerUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleAddBot = () => {
    const botInviteUrl = 'https://discord.com/oauth2/authorize?client_id=1311163553763426427';
    window.open(botInviteUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gray-900 border border-white/20 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Join NexuSec Community</h2>
          <p className="text-gray-400">Connect with our Discord community or add the bot to your server</p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <button
            onClick={handleJoinDiscord}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Join Discord Server
            <ExternalLink className="h-4 w-4" />
          </button>

          <button
            onClick={handleAddBot}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-3 hover:scale-105"
          >
            <Users className="h-5 w-5" />
            Add Bot to Server
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>

        {/* Info */}
        <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-lg">
          <p className="text-sm text-gray-300 text-center">
            Join our Discord community for support, updates, and to connect with other server owners using NexuSec.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;