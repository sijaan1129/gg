import React, { useEffect, useState } from 'react';

const StatCard = ({ value, label, color }: { value: string; label: string; color: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`premium-card text-center ${isVisible ? 'animate-counter' : 'opacity-0'}`}>
      <div className={`text-4xl md:text-5xl font-bold mb-2 ${color}`}>
        {value}
      </div>
      <div className="text-gray-300 font-medium">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard 
            value="40+" 
            label="Servers Protected" 
            color="text-blue-400"
          />
          <StatCard 
            value="15,000+" 
            label="Threats Blocked" 
            color="text-red-400"
          />
          <StatCard 
            value="99.9%" 
            label="Uptime Record" 
            color="text-green-400"
          />
          <StatCard 
            value="24/7" 
            label="Active Guardian" 
            color="text-purple-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;