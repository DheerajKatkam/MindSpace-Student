import React from 'react';
import { ArrowRight, Play, Star, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-orange-50/50"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full text-sm font-semibold text-primary-700 shadow-sm border border-primary-200/50">
                <Star className="h-4 w-4 mr-2 text-accent-500" />
                Trusted by 50,000+ Students Worldwide
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Transform Your
                <span className="gradient-text block">Academic Journey</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Experience next-generation learning with AI-powered personalization, interactive content, 
                and expert mentorship designed to accelerate your academic success.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center text-lg px-8 py-4">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="flex items-center justify-center px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold text-gray-700 hover:border-primary-500 hover:text-primary-600 hover:bg-primary-50 transition-all duration-300 text-lg">
                <Play className="mr-2 h-5 w-5" />
                View Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-6">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary-500" />
                <span className="text-sm text-gray-600 font-medium">50K+ Active Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-secondary-500" />
                <span className="text-sm text-gray-600 font-medium">1000+ Premium Courses</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-accent-500" />
                <span className="text-sm text-gray-600 font-medium">4.9★ Excellence Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative z-10">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 card-hover border border-gray-200/50">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800">Learning Dashboard</h3>
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      92% Complete
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Advanced Mathematics</span>
                      <div className="w-32 bg-gray-200 rounded-full h-3 shadow-inner">
                        <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full w-28 shadow-sm"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Quantum Physics</span>
                      <div className="w-32 bg-gray-200 rounded-full h-3 shadow-inner">
                        <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 h-3 rounded-full w-24 shadow-sm"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Organic Chemistry</span>
                      <div className="w-32 bg-gray-200 rounded-full h-3 shadow-inner">
                        <div className="bg-gradient-to-r from-accent-500 to-accent-600 h-3 rounded-full w-30 shadow-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-accent-500 to-accent-600 text-white p-6 rounded-2xl shadow-xl animate-float border-4 border-white">
                <div className="text-center">
                  <div className="text-3xl font-bold">98.5%</div>
                  <div className="text-xs font-medium">Success Rate</div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-secondary-500 to-secondary-600 text-white p-6 rounded-2xl shadow-xl animate-bounce-slow border-4 border-white">
                <div className="text-center">
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-xs font-medium">Expert Support</div>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-24 h-24 bg-primary-300/30 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute bottom-10 right-10 w-20 h-20 bg-secondary-300/30 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute top-1/2 left-0 w-16 h-16 bg-accent-300/30 rounded-full blur-xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;