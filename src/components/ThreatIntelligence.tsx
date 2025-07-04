import React from 'react';
import { AlertTriangle, CheckCircle, Clock, Users } from 'lucide-react';

const ThreatIntelligence = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real-Time <span className="gradient-text-red">Threat</span>
              <br />Detection System
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our intelligent security system monitors your Discord server 24/7, processing thousands of 
              events per second to identify and neutralize threats before they can harm your community.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Instant threat detection and response</h3>
                  <p className="text-gray-400">Lightning-fast analysis with immediate threat neutralization</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Advanced user behavior monitoring</h3>
                  <p className="text-gray-400">AI identifies suspicious patterns and potential threats</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Comprehensive threat intelligence database</h3>
                  <p className="text-gray-400">Global threat database with continuous updates</p>
                </div>
              </div>
            </div>

            <button className="btn-primary mt-8">
              Learn More About Protection
            </button>
          </div>

          {/* Right Content - Threat Alert Card */}
          <div className="relative">
            <div className="premium-card bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                  <span className="text-red-400 font-semibold text-sm">SECURITY ALERT</span>
                </div>
                <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  ACTIVE
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Raid Attempt Detected & Blocked
              </h3>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-400">Coordinated attack detected • Threat Level: </span>
                  <span className="text-red-400 font-semibold">HIGH</span>
                </div>
                
                <div>
                  <span className="text-gray-400">Source: </span>
                  <span className="text-white font-mono">Multiple suspicious accounts</span>
                </div>
                
                <div>
                  <span className="text-gray-400">Attack Type: </span>
                  <span className="text-white">Mass join + spam flood</span>
                </div>
                
                <div>
                  <span className="text-gray-400">Action Taken: </span>
                  <span className="text-white">12 accounts banned, server locked</span>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">✓ Threat neutralized in 0.8 seconds</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">✓ Server security restored</span>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">✓ Incident report generated</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse-slow opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-500 rounded-full animate-pulse-slow opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreatIntelligence;