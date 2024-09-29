import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineRobot,
  AiOutlineAlert,
  AiOutlineFileProtect,
  AiOutlineSafety,
} from "react-icons/ai";
import Landingnavbar from "../components/Landingnavbar";

function Home() {
  return (
    <>
      <div className="container mx-auto p-4">
        {/* Background Decorations */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Vertical lines */}
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gray-300 opacity-80"></div>
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gray-300 opacity-80"></div>

          {/* Horizontal lines */}
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gray-300 opacity-80"></div>
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gray-300 opacity-80"></div>

          {/* Diagonal abstract shapes */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-400 to-indigo-500 opacity-20 transform rotate-45"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-400 to-indigo-500 opacity-20 transform -rotate-45"></div>
        </div>
        <div
          className="relative bg-cover bg-center h-[60vh] w-full flex flex-col justify-center items-center text-center text-white p-6 mt-6 rounded-lg shadow-lg"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/564x/f0/2a/d5/f02ad5979696537aa97f7a38fb446f66.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-85 rounded-lg"></div>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Safety, Our Priority
            </h1>
            <h3 className="text-lg md:text-2xl font-medium mb-8">
              Instant access to emergency services, support, and resources.
            </h3>
            <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              <Link to="/Login">Get Started</Link>
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Empowering Safety Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card */}
            <div className="relative group bg-gradient-to-r from-blue-500 to-purple-600 p-8 h-80 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 hover:shadow-2xl">
              <AiOutlineRobot className="text-white text-5xl mb-4 group-hover:rotate-12 transition duration-300" />
              <h3 className="text-2xl font-semibold mb-4 text-white">
                AI-Powered Chatbot
              </h3>
              <p className="text-white">
                Instantly connect with our AI-powered chatbot for guidance,
                counseling, and support 24/7.
              </p>
            </div>
            <div className="relative group bg-gradient-to-r from-green-500 to-teal-600 p-8 h-80 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 hover:shadow-2xl">
              <AiOutlineSafety className="text-white text-5xl mb-4 group-hover:rotate-12 transition duration-300" />
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Emergency Assistance
              </h3>
              <p className="text-white">
                Quickly access emergency services and alert your contacts with a
                single tap.
              </p>
            </div>
            <div className="relative group bg-gradient-to-r from-red-500 to-pink-600 p-8 h-80 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 hover:shadow-2xl">
              <AiOutlineAlert className="text-white text-5xl mb-4 group-hover:rotate-12 transition duration-300" />
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Report an Incident
              </h3>
              <p className="text-white">
                Easily report incidents and track the status of your case
                directly through the app.
              </p>
            </div>
            <div className="relative group bg-gradient-to-r from-yellow-500 to-orange-600 p-8 h-80 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 hover:shadow-2xl">
              <AiOutlineFileProtect className="text-white text-5xl mb-4 group-hover:rotate-12 transition duration-300" />
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Community Support
              </h3>
              <p className="text-white">
                Join a supportive community of women to share experiences, tips,
                and advice.
              </p>
            </div>
            <div className="relative group bg-gradient-to-r from-pink-500 to-red-600 p-8 h-80 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 hover:shadow-2xl">
              <AiOutlineAlert className="text-white text-5xl mb-4 group-hover:rotate-12 transition duration-300" />
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Red Zone Alerts
              </h3>
              <p className="text-white">
                Receive alerts about high-risk areas and avoid unsafe zones.
              </p>
            </div>
            <div className="relative group bg-gradient-to-r from-purple-500 to-indigo-600 p-8 h-80 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 hover:shadow-2xl">
              <AiOutlineSafety className="text-white text-5xl mb-4 group-hover:rotate-12 transition duration-300" />
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Safety Videos
              </h3>
              <p className="text-white">
                Watch educational videos on self-defense, safety tips, and more
                to stay informed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
