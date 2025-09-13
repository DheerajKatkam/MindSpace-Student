import React from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'Advanced Mathematics',
      description: 'Master calculus, algebra, and advanced mathematical concepts with interactive problem-solving.',
      image: 'https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&w=500',
      duration: '12 weeks',
      students: '2.5K',
      rating: 4.9,
      level: 'Advanced',
      color: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Physics Fundamentals',
      description: 'Explore the laws of physics through experiments, simulations, and real-world applications.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=500',
      duration: '10 weeks',
      students: '1.8K',
      rating: 4.8,
      level: 'Intermediate',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      title: 'Chemistry Lab',
      description: 'Hands-on chemistry experiments and molecular understanding in our virtual laboratory.',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=500',
      duration: '8 weeks',
      students: '1.2K',
      rating: 4.7,
      level: 'Beginner',
      color: 'from-accent-500 to-accent-600'
    }
  ];

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured <span className="gradient-text">Premium Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master advanced subjects with our expertly crafted curriculum designed by industry professionals and academic leaders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group border border-gray-100 hover:border-primary-200 transition-all duration-300">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${course.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm`}>
                  {course.level}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Premium
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3 tracking-tight">{course.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="font-medium">{course.students}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400 fill-current" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;