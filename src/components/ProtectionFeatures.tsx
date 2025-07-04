import React from 'react';
import { Shield, Brain, Zap, Eye, Users, AlertTriangle, Lock, Activity } from 'lucide-react';

const ProtectionCard = ({ icon: Icon, title, description, features, color, delay }: {
  icon: any;
  title: string;
  description: string;
  features: string[];
  color: string;
  delay: string;
}) => (
  <div className={`protection-card ${delay}`}>
    <div className="relative">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${color}`}>
        <Icon className="h-8 w-8 text-white" />
      </div>
      <div className={`absolute inset-0 w-16 h-16 rounded-2xl ${color} opacity-30 blur-lg animate-pulse`} />
    </div>
    
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300 mb-6 leading-relaxed">{description}</p>
    
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3 text-gray-300">
          <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProtectionFeatures = () => {
  const protectionFeatures = [
    {
      icon: Shield,
      title: "Anti-Raid System",
      description: "Advanced detection algorithms that identify and stop coordinated server attacks before they cause damage.",
      color: "bg-gradient-to-br from-red-600 to-red-700",
      delay: "animate-fade-in-up",
      features: [
        "Real-time join pattern analysis",
        "Automatic server lockdown",
        "Mass ban protection",
        "Invite link monitoring"
      ]
    },
    {
      icon: Brain,
      title: "AI Automoderation",
      description: "Machine learning powered content filtering that adapts to your community and learns from moderation patterns.",
      color: "bg-gradient-to-br from-blue-600 to-blue-700",
      delay: "animate-fade-in-up animation-delay-200",
      features: [
        "Smart spam detection",
        "Toxic behavior analysis",
        "Context-aware filtering",
        "Custom rule learning"
      ]
    },
    {
      icon: Eye,
      title: "Silent Monitoring",
      description: "Invisible security layer that operates seamlessly without disrupting your community experience.",
      color: "bg-gradient-to-br from-purple-600 to-purple-700",
      delay: "animate-fade-in-up animation-delay-400",
      features: [
        "Background threat scanning",
        "Behavioral pattern tracking",
        "Stealth mode operation",
        "Zero false positives"
      ]
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Lightning-fast threat neutralization with automated actions that protect your server in milliseconds.",
      color: "bg-gradient-to-br from-yellow-600 to-orange-600",
      delay: "animate-fade-in-up animation-delay-600",
      features: [
        "0.2 second response time",
        "Automated threat removal",
        "Smart escalation system",
        "Emergency protocols"
      ]
    },
    {
      icon: Users,
      title: "User Verification",
      description: "Advanced user screening system that identifies suspicious accounts and potential threats.",
      color: "bg-gradient-to-br from-green-600 to-green-700",
      delay: "animate-fade-in-up animation-delay-800",
      features: [
        "Account age verification",
        "Alt account detection",
        "Reputation scoring",
        "Trust level system"
      ]
    },
    {
      icon: Lock,
      title: "Server Hardening",
      description: "Comprehensive server security configuration that closes vulnerabilities and strengthens defenses.",
      color: "bg-gradient-to-br from-indigo-600 to-indigo-700",
      delay: "animate-fade-in-up animation-delay-1000",
      features: [
        "Permission auditing",
        "Channel protection",
        "Role security scanning",
        "Vulnerability assessment"
      ]
    }
  ];

  return (
    <section id="protection" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-orb bg-red-500/5 w-96 h-96 top-0 right-0" />
        <div className="floating-orb bg-blue-500/5 w-80 h-80 bottom-0 left-0 animation-delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold mb-6">
            <AlertTriangle className="h-4 w-4" />
            Advanced Protection
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-white">Multi-Layer</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-blue-400 to-red-400 bg-clip-text text-transparent animate-gradient">Defense System</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Six layers of advanced protection working together to create an impenetrable 
            security barrier around your Discord community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {protectionFeatures.map((feature, index) => (
            <ProtectionCard key={index} {...feature} />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-card">
            <Activity className="h-8 w-8 text-blue-400 mb-3" />
            <div className="text-3xl font-bold text-white mb-1">99.9%</div>
            <div className="text-gray-400">Threat Detection</div>
          </div>
          <div className="stat-card">
            <Zap className="h-8 w-8 text-yellow-400 mb-3" />
            <div className="text-3xl font-bold text-white mb-1">0.2s</div>
            <div className="text-gray-400">Response Time</div>
          </div>
          <div className="stat-card">
            <Shield className="h-8 w-8 text-green-400 mb-3" />
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-gray-400">Protection</div>
          </div>
          <div className="stat-card">
            <Users className="h-8 w-8 text-red-400 mb-3" />
            <div className="text-3xl font-bold text-white mb-1">40+</div>
            <div className="text-gray-400">Servers Protected</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtectionFeatures;