import React from 'react';
import { TrendingUp, Award, Clock, Target } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '50,000+',
      label: 'Global Students',
      color: 'from-primary-400 to-primary-600'
    },
    {
      icon: Award,
      value: '1,200+',
      label: 'Expert Courses',
      color: 'from-secondary-400 to-secondary-600'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Premium Support',
      color: 'from-accent-400 to-accent-600'
    },
    {
      icon: Target,
      value: '98.5%',
      label: 'Achievement Rate',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2 tracking-tight">{stat.value}</div>
              <div className="text-gray-600 font-semibold text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;