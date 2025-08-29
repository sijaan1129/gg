import React from 'react';
import { FileText, Shield, AlertTriangle, Scale, Users, Bot } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold mb-6">
            <FileText className="h-4 w-4" />
            Legal Agreement
          </div>
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-white">Terms of</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="text-xl text-gray-300">
            Please read these terms carefully before using NexuSec
          </p>
          <div className="text-sm text-gray-400 mt-4">
            Last updated: January 2025
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Acceptance of Terms */}
          <section className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Acceptance of Terms</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                By inviting NexuSec to your Discord server or using our services, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our bot or services.
              </p>
              
              <p>
                These terms apply to all users, server owners, and administrators who interact with NexuSec in any capacity.
              </p>
            </div>
          </section>

          {/* Service Description */}
          <section className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Service Description</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                NexuSec is an AI-powered Discord security bot that provides:
              </p>
              
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Automated threat detection and prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Anti-raid and anti-spam protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Automated moderation and content filtering</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Server management and utility commands</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Real-time security monitoring and alerts</span>
                </li>
              </ul>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">User Responsibilities</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                By using NexuSec, you agree to:
              </p>
              
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Use the service in compliance with Discord's Terms of Service</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Not attempt to bypass, disable, or interfere with security features</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Not use the bot for illegal activities or harassment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Provide accurate information when configuring security settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Report any security vulnerabilities or bugs responsibly</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Limitations and Disclaimers */}
          <section className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Service Limitations</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                While we strive for excellence, please understand:
              </p>
              
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <span>No security system is 100% foolproof - we aim for 99.9% effectiveness</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Service availability depends on Discord's platform stability</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <span>We reserve the right to update features and security algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Emergency maintenance may temporarily affect service availability</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="protection-card">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                If you have questions about these Terms of Service, please contact us:
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-white font-semibold mb-2">Legal Department</div>
                <div className="text-blue-400">nexusec.bot@gmail.com</div>
                <div className="text-gray-400 text-sm mt-1">Subject: Terms of Service Inquiry</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;