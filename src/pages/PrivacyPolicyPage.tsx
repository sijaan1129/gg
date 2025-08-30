import React from 'react';
import { Shield, Eye, Lock, Database, Users, Globe, Mail, Clock } from 'lucide-react';

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
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Server Information:</span>
                    <span className="block text-gray-300">Server ID, channel IDs, role configurations, and permission settings needed for security setup and protection.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">User Data:</span>
                    <span className="block text-gray-300">User IDs, usernames, join dates, and message metadata for threat detection and security analysis.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Security Logs:</span>
                    <span className="block text-gray-300">Threat detection events, moderation actions, security incidents, and automated responses for analysis.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Usage Analytics:</span>
                    <span className="block text-gray-300">Command usage statistics, feature utilization, and performance metrics to improve our services.</span>
                  </div>
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
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Threat Detection:</span>
                    <span className="block text-gray-300">Analyzing user behavior patterns and message content to identify and prevent security threats, raids, and spam attacks.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Service Improvement:</span>
                    <span className="block text-gray-300">Enhancing our AI algorithms, security features, and detection capabilities based on real-world usage data.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Support Services:</span>
                    <span className="block text-gray-300">Providing technical support, troubleshooting issues, and helping with bot configuration and setup.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Security Research:</span>
                    <span className="block text-gray-300">Developing better protection mechanisms against emerging threats and attack vectors in Discord communities.</span>
                  </div>
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
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">End-to-End Encryption:</span>
                    <span className="block text-gray-300">All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption standards.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Access Control:</span>
                    <span className="block text-gray-300">Strict role-based access controls, multi-factor authentication, and regular security audits for all systems.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Data Minimization:</span>
                    <span className="block text-gray-300">We only collect and store data that is absolutely necessary for security functions and delete it when no longer needed.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Regular Security Audits:</span>
                    <span className="block text-gray-300">Continuous security assessments, penetration testing, and vulnerability scanning by third-party security firms.</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Retention */}
          <section className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Data Retention & Deletion</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                We maintain clear data retention policies to protect your privacy:
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Security Logs:</span>
                    <span className="block text-gray-300">Kept for 90 days for threat analysis, then automatically deleted unless required for ongoing investigations.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">User Data:</span>
                    <span className="block text-gray-300">Deleted within 30 days of bot removal from server or user leaving the protected server.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Configuration Data:</span>
                    <span className="block text-gray-300">Server settings and configurations are deleted immediately when the bot is removed from your server.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Analytics Data:</span>
                    <span className="block text-gray-300">Anonymized usage statistics are kept for 1 year to improve our services, then permanently deleted.</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Data Sharing */}
          <section className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Data Sharing & Third Parties</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-white font-semibold text-lg mb-2">
                  🔒 We do NOT sell, rent, or share your personal data with third parties for marketing purposes.
                </p>
              </div>
              
              <p>
                Limited data sharing only occurs in these specific, legally required circumstances:
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Legal Requirements:</span>
                    <span className="block text-gray-300">When required by valid legal process, court orders, or law enforcement requests with proper jurisdiction.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Platform Security:</span>
                    <span className="block text-gray-300">Sharing anonymized threat intelligence with Discord to improve platform-wide security for all users.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Service Providers:</span>
                    <span className="block text-gray-300">Trusted infrastructure partners (hosting, monitoring) who are bound by strict confidentiality agreements.</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Your Rights & Control</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                You have full control over your data and privacy. You can exercise these rights at any time:
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Data Access:</span>
                    <span className="block text-gray-300">Request a complete copy of all data we have collected about your server and users.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Data Deletion:</span>
                    <span className="block text-gray-300">Request immediate and complete removal of your server's data from our systems.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Data Correction:</span>
                    <span className="block text-gray-300">Update or correct any inaccurate information we may have stored.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Opt-Out Options:</span>
                    <span className="block text-gray-300">Disable specific data collection features while maintaining core security functionality.</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-xl flex items-center justify-center">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Cookies & Tracking</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                Our website and bot services use minimal tracking:
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Essential Cookies:</span>
                    <span className="block text-gray-300">Required for basic website functionality and user authentication. Cannot be disabled.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">Analytics Cookies:</span>
                    <span className="block text-gray-300">Help us understand how users interact with our website to improve the experience. Can be disabled.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-white font-semibold">No Third-Party Tracking:</span>
                    <span className="block text-gray-300">We do not use advertising cookies or allow third-party tracking on our website.</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* International Users */}
          <section className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">International Users & GDPR</h2>
            </div>
            
            <div className="space-y-4 text-gray-300">
              <p>
                We comply with international privacy laws including GDPR, CCPA, and other regional regulations:
              </p>
              
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">GDPR Compliance:</strong> Full compliance with European data protection regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Data Portability:</strong> Export your data in standard formats upon request</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Right to be Forgotten:</strong> Complete data deletion within 30 days of request</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                  <span><strong className="text-white">Consent Management:</strong> Clear opt-in/opt-out mechanisms for all data processing</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="protection-card">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-700 rounded-xl flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Us About Privacy</h2>
            </div>
            
            <div className="text-gray-300 space-y-4">
              <p>
                If you have questions about this Privacy Policy or want to exercise your rights, contact us:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="text-white font-semibold mb-2">Privacy Officer</div>
                  <div className="text-blue-400">nexusec.bot@gmail.com</div>
                  <div className="text-gray-400 text-sm mt-1">Response within 48 hours</div>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="text-white font-semibold mb-2">Data Protection</div>
                  <div className="text-blue-400">Subject: Privacy Request</div>
                  <div className="text-gray-400 text-sm mt-1">Include your server ID for faster processing</div>
                </div>
              </div>
            </div>
          </section>

          {/* Updates to Policy */}
          <section className="protection-card">
            <h2 className="text-2xl font-bold text-white mb-4">Policy Updates</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                When we make significant changes, we will:
              </p>
              
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Notify all server owners via Discord direct message</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Post announcements in our support server</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Update the "Last updated" date at the top of this page</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Provide a 30-day notice period for major changes</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;