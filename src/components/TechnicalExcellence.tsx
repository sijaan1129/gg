import React from 'react';
import { Server, Database, Shield, Zap, Clock, Globe } from 'lucide-react';

const TechnicalCard = ({ icon: Icon, title, subtitle, color }: {
  icon: any;
  title: string;
  subtitle: string;
  color: string;
}) => (
  <div className="premium-card text-center group">
    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${color} group-hover:scale-110 transition-transform duration-300`}>
      <Icon className="h-8 w-8 text-white" />
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{subtitle}</p>
  </div>
);

const TechnicalExcellence = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-primary">Technical Superiority</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by cutting-edge infrastructure and advanced algorithms
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <TechnicalCard
            icon={Server}
            title="Cloud Infrastructure"
            subtitle="Global Network"
            color="bg-gradient-to-br from-blue-600 to-blue-700"
          />
          <TechnicalCard
            icon={Database}
            title="500K+ Events/sec"
            subtitle="Real-time Processing"
            color="bg-gradient-to-br from-red-600 to-red-700"
          />
          <TechnicalCard
            icon={Shield}
            title="Enterprise Security"
            subtitle="Bank-Level Protection"
            color="bg-gradient-to-br from-green-600 to-green-700"
          />
          <TechnicalCard
            icon={Zap}
            title="<1ms Response"
            subtitle="Lightning Speed"
            color="bg-gradient-to-br from-yellow-600 to-yellow-700"
          />
          <TechnicalCard
            icon={Clock}
            title="99.99% Uptime"
            subtitle="Always Online"
            color="bg-gradient-to-br from-purple-600 to-purple-700"
          />
          <TechnicalCard
            icon={Globe}
            title="Worldwide CDN"
            subtitle="Global Reach"
            color="bg-gradient-to-br from-indigo-600 to-indigo-700"
          />
        </div>
      </div>
    </section>
  );
};

export default TechnicalExcellence;