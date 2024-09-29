import React, { useState } from 'react';
import axios from 'axios';

const Sosbtn = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prev => prev + 1);

    // Reset the click count after a timeout (e.g., 1 second)
    setTimeout(() => setClickCount(0), 2000);

    // If user triple-clicks the button
    if (clickCount === 2) {
      handleSosAction();
    }
  };

  const handleSosAction = () => {
    // Use Geolocation API to get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          sendSosAlert(latitude, longitude);
        },
        (error) => {
          console.error('Error fetching location:', error);
          alert('Unable to get location. Please check your location services.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  const sendSosAlert = async (latitude, longitude) => {
    try {
      // Replace with your backend API route
      const response = await axios.post('http://localhost:3000/api/sos', {
        location: `Lat: ${latitude}, Lon: ${longitude}`,
        message: 'SOS Alert triggered by triple click!'
      });

      if (response.data.success) {
        alert('SOS Alert Sent Successfully');
      } else {
        alert('Error sending SOS alert.');
      }
    } catch (error) {
      console.error('Error sending SOS alert:', error);
      alert('Error sending SOS alert.');
    }
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-8 right-8 bg-red-600 text-white font-bold p-5 rounded-full shadow-lg hover:bg-red-700 transition duration-300 z-50 animate-pulse"
      style={{
        boxShadow: "0 0 15px rgba(255, 0, 0, 0.7), 0 0 30px rgba(255, 0, 0, 0.5)",
        width: "70px",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button className="focus:outline-none">
        SOS
      </button>
    </div>
  );
};

export default Sosbtn;
