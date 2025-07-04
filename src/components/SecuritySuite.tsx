import React from 'react';
import { Shield, Brain, Users, Eye } from 'lucide-react';

const SecurityFeature = ({ icon: Icon, title, description, color }: {
  icon: any;
  title: string;
  description: string;
  color: string;
}) => (
  <div className="premium-card group">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color} group-hover:scale-110 transition-transform duration-300`}>
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const SecuritySuite = () => {
  return (
    <section id="security" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced <span className="gradient-text-red">Security Arsenal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive protection suite engineered for Discord's unique challenges. 
            AI-powered defense mechanisms with instant threat neutralization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <SecurityFeature
            icon={Shield}
            title="Anti-Raid Protection"
            description="Advanced algorithms detect and prevent coordinated server raids, mass joins, and spam attacks before they can cause damage."
            color="bg-gradient-to-br from-red-600 to-red-700"
          />
          <SecurityFeature
            icon={Brain}
            title="Smart Automoderation"
            description="Machine learning-powered content filtering that adapts to your community's needs and learns from moderation patterns."
            color="bg-gradient-to-br from-blue-600 to-blue-700"
          />
          <SecurityFeature
            icon={Users}
            title="Behavioral Analysis"
            description="Sophisticated user behavior monitoring to identify potential threats, alt accounts, and suspicious activity patterns."
            color="bg-gradient-to-br from-purple-600 to-purple-700"
          />
          <SecurityFeature
            icon={Eye}
            title="Silent Monitoring"
            description="Invisible security layer that operates seamlessly in the background without disrupting your community experience."
            color="bg-gradient-to-br from-green-600 to-green-700"
          />
        </div>
      </div>
    </section>
  );
};

export default SecuritySuite;