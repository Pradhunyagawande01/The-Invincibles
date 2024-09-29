import React, { useState } from "react";
import axios from "axios";

const IncidentReporting = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    description: '',
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [successMessage, setSuccessMessage] = useState(null); // Success state
  const [errorMessage, setErrorMessage] = useState(null); // Error state

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    const { name, email, date, description } = formData;
    if (!name || !email || !date || !description) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage(null);
      setSuccessMessage(null);

      // Prepare data for the backend
      const response = await axios.post('http://localhost:3000/api/incidents', {
        name: formData.name,
        email: formData.email,
        date: formData.date,
        description: formData.description
      });

      // On success
      setSuccessMessage('Incident reported successfully.');
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        date: '',
        description: ''
      });
    } catch (error) {
      setLoading(false);
      setErrorMessage('Failed to report incident. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
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

      {/* Incident Report Form */}
      <div className="relative max-w-lg w-full bg-white shadow-2xl rounded-3xl p-8 z-10 transform transition-all">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Report an Incident
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-in-out"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Input */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-in-out"
              placeholder="Enter your email"
            />
          </div>

          {/* Date and Time Input */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Date and Time of Incident
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-in-out"
            />
            <div className="flex space-x-4">
              <input
                type="date"
                className="mt-1 block w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-in-out"
              />
              <input
                type="time"
                className="mt-1 block w-1/2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-in-out"
              />
            </div>
          </div>

          {/* Description Input */}
          <div className="mb-5">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-150 ease-in-out"
              rows="4"
              placeholder="Describe the incident in detail"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Report'}
          </button>

          {/* Success/Error Message */}
          {successMessage && <p className="text-green-500 mt-3">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mt-3">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default IncidentReporting;