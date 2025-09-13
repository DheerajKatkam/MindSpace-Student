import React from 'react';
import { BookOpen, Users, Trophy, Zap, Shield, Headphones } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive Learning',
      description: 'Engage with dynamic content, quizzes, and hands-on exercises that make learning enjoyable and effective.',
      color: 'from-primary-400 to-primary-600'
    },
    {
      icon: Users,
      title: 'Collaborative Study',
      description: 'Connect with peers, join study groups, and learn together in our vibrant student community.',
      color: 'from-secondary-400 to-secondary-600'
    },
    {
      icon: Trophy,
      title: 'Achievement System',
      description: 'Earn badges, certificates, and track your progress with our comprehensive achievement system.',
      color: 'from-accent-400 to-accent-600'
    },
    {
      icon: Zap,
      title: 'Personalized Learning',
      description: 'AI-powered recommendations adapt to your learning style and pace for optimal results.',
      color: 'from-purple-400 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Secure Platform',
      description: 'Your data and progress are protected with enterprise-grade security and privacy measures.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our round-the-clock student support team.',
      color: 'from-pink-400 to-pink-600'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why Leading Students Choose <span className="gradient-text">MindSpace</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience cutting-edge educational technology designed by experts to maximize your learning potential and academic success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover group border border-gray-100 hover:border-primary-200 transition-all duration-300">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;