import React from "react";
import { Link } from "react-router-dom";

const Community = () => {
  const features = [
    {
      icon: "📚",
      title: "Articles and Resources",
      description: "Access helpful information",
      link: "/resources",
    },
    {
      icon: "📅",
      title: "Events and Workshops",
      description: "Join community activities",
      link: "/events",
    },
    {
      icon: "❤️",
      title: "Inspirational Stories",
      description: "Read uplifting experiences",
      link: "/stories",
    },
    {
      icon: "🎓",
      title: "Learning Modules",
      description: "Enhance your knowledge and skills",
      link: "/modules",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Vertical lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gray-200 opacity-80"></div>
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gray-200 opacity-80"></div>

        {/* Horizontal lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gray-200 opacity-80"></div>
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gray-200 opacity-80"></div>

        {/* Diagonal abstract shapes */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-br from-purple-300 to-indigo-300 opacity-40 transform rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-300 to-indigo-300 opacity-40 transform -rotate-45 translate-x-1/2 translate-y-1/2"></div>
      </div>

      <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-900 z-10">
        Welcome to Our Community
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 md:px-8 z-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transform transition-transform hover:scale-105 hover:shadow-2xl border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <span className="text-5xl mr-3 text-blue-600">{feature.icon}</span>
              <h3 className="text-2xl font-semibold text-gray-800">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg">{feature.description}</p>
            <Link to={feature.link}>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-lg">
                Explore
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
