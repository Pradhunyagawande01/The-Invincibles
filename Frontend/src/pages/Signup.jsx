import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
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
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-500">
            <AiOutlineUser className="w-16 h-16 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create an Account
        </h2>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Enter your Name"
            className="w-full px-4 py-3 text-gray-800 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 transition duration-300"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 text-gray-800 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 transition duration-300"
          />
          <input
            type="password"
            placeholder="Create Password"
            className="w-full px-4 py-3 text-gray-800 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 transition duration-300"
          />
          <input
            type="text"
            placeholder="Enter your blood group"
            className="w-full px-4 py-3 text-gray-800 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 transition duration-300"
          />
          <input
            type="text"
            placeholder="Enter your home address"
            className="w-full px-4 py-3 text-gray-800 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:border-indigo-500 focus:ring-indigo-500 transition duration-300"
          />
          <button
            type="submit"
            className="w-full py-3 text-white bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-600 focus:ring-4 focus:ring-indigo-300 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { AiOutlineUser } from 'react-icons/ai';

// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent the default form submission

//     // Basic validation
//     if (password !== confirmPassword) {
//       setError("Passwords don't match!");
//       return;
//     }

//     try {
//       const response = await fetch(' /signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ name, email, password }), // Send name, email, and password as JSON
//       });

//       if (!response.ok) {
//         throw new Error('Signup failed! Please try again.'); // Handle unsuccessful signup
//       }

//       const data = await response.json(); // Parse the JSON response
//       sessionStorage.setItem('token', data.token); // Store token in session storage if returned
//       navigate('/dashboard'); // Redirect to dashboard or another page
//     } catch (error) {
//       setError(error.message); // Set error message to display
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
//         <div className="flex justify-center">
//           <div className="w-16 h-16 rounded-full flex items-center justify-center">
//             <AiOutlineUser className="w-16 h-16 rounded-full border-2 border-gray-300 bg-slate-50" />
//           </div>
//         </div>
//         <h2 className="text-3xl font-bold text-center text-gray-800">Create an Account</h2>
//         {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}
//         <form className="space-y-5" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Enter your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)} // Update name state
//             className="w-full px-4 py-2 text-gray-800 bg-gray-100 border-b-2 border-gray-300 rounded-none focus:border-blue-500 transition duration-300"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Enter Your Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)} // Update email state
//             className="w-full px-4 py-2 text-gray-800 bg-gray-100 border-b-2 border-gray-300 rounded-none focus:border-blue-500 transition duration-300"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Create Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)} // Update password state
//             className="w-full px-4 py-2 text-gray-800 bg-gray-100 border-b-2 border-gray-300 rounded-none focus:border-blue-500 transition duration-300"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state
//             className="w-full px-4 py-2 text-gray-800 bg-gray-100 border-b-2 border-gray-300 rounded-none focus:border-blue-500 transition duration-300"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition duration-300"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="text-center text-gray-600">
//           Already have an account?{' '}
//           <Link to="/login" className="text-blue-500">
//             Log in
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;
