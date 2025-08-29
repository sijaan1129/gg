import React from 'react';
import { Bot, Shield, Activity, Users, AlertTriangle, CheckCircle, Clock, Zap } from 'lucide-react';

const DashboardPage = () => {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Bot Online • Real-Time Monitoring
          </div>
          <h1 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-white">Security</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time monitoring and analytics for your Discord server security
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="stat-card">
            <Shield className="h-8 w-8 text-blue-400 mb-3 mx-auto" />
            <div className="text-3xl font-bold text-white mb-1">247</div>
            <div className="text-gray-400">Threats Blocked Today</div>
          </div>
          <div className="stat-card">
            <Users className="h-8 w-8 text-green-400 mb-3 mx-auto" />
            <div className="text-3xl font-bold text-white mb-1">40+</div>
            <div className="text-gray-400">Protected Servers</div>
          </div>
          <div className="stat-card">
            <Zap className="h-8 w-8 text-yellow-400 mb-3 mx-auto" />
            <div className="text-3xl font-bold text-white mb-1">0.2s</div>
            <div className="text-gray-400">Average Response</div>
          </div>
          <div className="stat-card">
            <Activity className="h-8 w-8 text-red-400 mb-3 mx-auto" />
            <div className="text-3xl font-bold text-white mb-1">99.9%</div>
            <div className="text-gray-400">Uptime Record</div>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Bot Status Card */}
          <div className="lg:col-span-2">
            <div className="bot-preview-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-full flex items-center justify-center">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-white text-xl">NexuSec Bot Status</div>
                  <div className="text-sm text-green-400 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    Online & Protecting
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="security-stat">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Threats Blocked Today</span>
                      <span className="text-red-400 font-bold">247</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill bg-red-500" style={{width: '78%'}} />
                    </div>
                  </div>

                  <div className="security-stat">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Server Protection</span>
                      <span className="text-green-400 font-bold">100%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill bg-green-500" style={{width: '100%'}} />
                    </div>
                  </div>

                  <div className="security-stat">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Response Time</span>
                      <span className="text-blue-400 font-bold">0.2s</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill bg-blue-500" style={{width: '95%'}} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="text-green-400 font-semibold text-sm mb-1">Latest Protection</div>
                    <div className="text-white text-sm">Blocked raid attempt</div>
                    <div className="text-gray-400 text-xs mt-1">12 users banned • 2 min ago</div>
                  </div>

                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <div className="text-blue-400 font-semibold text-sm mb-1">Auto Moderation</div>
                    <div className="text-white text-sm">Spam message deleted</div>
                    <div className="text-gray-400 text-xs mt-1">User warned • 5 min ago</div>
                  </div>

                  <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <div className="text-purple-400 font-semibold text-sm mb-1">User Verification</div>
                    <div className="text-white text-sm">New member verified</div>
                    <div className="text-gray-400 text-xs mt-1">Account checked • 8 min ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="protection-card">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-3 rounded-lg transition-colors flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Enable Lockdown
                </button>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-3 rounded-lg transition-colors flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Emergency Mode
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 rounded-lg transition-colors flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Run Security Scan
                </button>
              </div>
            </div>

            <div className="protection-card">
              <h3 className="text-xl font-bold text-white mb-4">System Health</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">API Status</span>
                  <span className="text-green-400 font-semibold">Operational</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Database</span>
                  <span className="text-green-400 font-semibold">Healthy</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Security Engine</span>
                  <span className="text-green-400 font-semibold">Active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Last Update</span>
                  <span className="text-gray-400">2 min ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;