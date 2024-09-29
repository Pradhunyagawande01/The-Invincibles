import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import IncidentReporting from './pages/IncidentReporting';
import Community from './pages/Community';
import Chatbot from './pages/Chatbot';
// import Forums from './pages/Forums';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Stories from './pages/Stories';
import Signup from './pages/Signup';
import Sosbtn from './components/Sosbtn';
import Profile from './components/Profile';
import RedZone from './pages/RedZone.jsx';
import Modules from './pages/Modules.jsx';
import LandingNavbar from './components/Landingnavbar.jsx'
import LandingPage from './components/Landingpage.jsx'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // null means not checked yet

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Make a GET request to check authentication
        await axios.get('http://localhost:3000/api/auth/me');
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    // While authentication status is being determined
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      {isAuthenticated === null ?
        <> <LandingNavbar /></> :
        <><Navbar /></>
      }
      <Sosbtn />
      <Routes>
        {isAuthenticated != null ? (
          // Routes for authenticated users
          <>
            <Route path="/" element={<Home />} />
            <Route path="/incident-reporting" element={<IncidentReporting />} />
            <Route path="/community" element={<Community />} />
            <Route path="/chatbot" element={<Chatbot />} />
            {/* <Route path="/forums" element={<Forums />} /> */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/RedZone" element={<RedZone />} />
            <Route path="/Modules" element={<Modules />} />
            {/* Redirect any unknown route to home */}
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          // Routes for unauthenticated users
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Redirect any unknown route to login */}
            {/* <Route path="*" element={<Navigate to="/login" />} /> */}
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
