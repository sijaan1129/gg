import React from 'react';
import { Shield, Eye, Lock, Database, Users, Globe } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6">
            <Shield className="h-4 w-4" />
            Privacy & Security
          </div>
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-white">Privacy</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className="text-xl text-gray-300">
            Your privacy and data security are our top priorities
          </p>
          <div className="text-sm text-gray-400 mt-4">
            Last updated: January 2025
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Information We Collect */}
          <section className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <Database className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                NexuSec collects minimal data necessary to provide security services for your Discord server:
              </p>
              
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Server Information:</strong> Server ID, channel IDs, role configurations for security setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">User Data:</strong> User IDs, usernames, and message metadata for threat detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Security Logs:</strong> Threat detection events, moderation actions, and security incidents</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Usage Analytics:</strong> Command usage statistics and performance metrics</span>
                </li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Data */}
          <section className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">How We Use Your Data</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Your data is used exclusively for providing and improving our security services:
              </p>
              
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Threat Detection:</strong> Analyzing patterns to identify and prevent security threats</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Service Improvement:</strong> Enhancing our AI algorithms and security features</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Support Services:</strong> Providing technical support and troubleshooting</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Security Research:</strong> Developing better protection against emerging threats</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Data Protection & Security</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                We implement industry-leading security measures to protect your data:
              </p>
              
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Encryption:</strong> All data is encrypted in transit and at rest using AES-256</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Access Control:</strong> Strict access controls and authentication for all systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Data Minimization:</strong> We only collect data necessary for security functions</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Regular Audits:</strong> Continuous security assessments and vulnerability testing</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Data Sharing & Third Parties</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p className="text-white font-semibold">
                We do NOT sell, rent, or share your personal data with third parties.
              </p>
              
              <p>
                Limited data sharing only occurs in these specific circumstances:
              </p>
              
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Legal Requirements:</strong> When required by law or legal process</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Security Threats:</strong> Sharing threat intelligence with Discord for platform security</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Service Providers:</strong> Trusted partners who help operate our infrastructure</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Your Rights & Control</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                You have full control over your data and privacy:
              </p>
              
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Data Access:</strong> Request a copy of all data we have about your server</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Data Deletion:</strong> Request complete removal of your server's data</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Data Correction:</strong> Update or correct any inaccurate information</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Opt-Out:</strong> Disable specific data collection features</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="protection-card">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us About Privacy</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                If you have questions about this Privacy Policy or want to exercise your rights, contact us:
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="text-white font-semibold mb-2">Privacy Officer</div>
                <div className="text-blue-400">nexusec.bot@gmail.com</div>
                <div className="text-gray-400 text-sm mt-1">Response within 48 hours</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;