import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Hirdesh",
    age: "20",
    email: "hirdeshkhandelwal58@gmail.com",
    mobile: "7252995449",
    emergencyContacts: ["7252995449", "7252995449"],
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch user information from backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/auth/me");
        const { data } = response.data;

        setUserData({
          name: data.name,
          age: data.age,
          email: data.email,
          mobile: data.mobile,
          emergencyContacts: data.emergencyContacts || [],
        });
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    fetchUserData();
  }, []);

  const handleEmergencyContactChange = (index, value) => {
    const updatedContacts = [...userData.emergencyContacts];
    updatedContacts[index] = value;
    setUserData({ ...userData, emergencyContacts: updatedContacts });
  };

  const removeEmergencyContact = (index) => {
    const updatedContacts = userData.emergencyContacts.filter((_, i) => i !== index);
    setUserData({ ...userData, emergencyContacts: updatedContacts });
  };

  const addEmergencyContact = () => {
    setUserData({ ...userData, emergencyContacts: [...userData.emergencyContacts, ""] });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveProfile = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3000/api/users/updateProfile",
        {
          name: userData.name,
          age: userData.age,
          email: userData.email,
          mobile: userData.mobile,
          emergencyContacts: userData.emergencyContacts,
        }
      );

      if (response.data.success) {
        console.log("Profile Updated Successfully!");
      }
    } catch (error) {
      console.error("Error updating profile", error);
    }
    setIsEditing(false);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg z-10">
        <div className="flex justify-center mb-4">
          <div className="w-24 h-24 rounded-full flex items-center justify-center border-solid  bg-gray-200">
            <AiOutlineUser className="w-24 h-24 text-gray-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-800">{userData.name}</h2>

        {isEditing ? (
          <div className="space-y-4">
            <input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Name"
            />
            <input
              type="number"
              value={userData.age}
              onChange={(e) =>
                setUserData({ ...userData, age: e.target.value })
              }
              className="w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Age"
            />
            <input
              type="email"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
              className="w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Email"
            />
            <input
              type="text"
              value={userData.mobile}
              onChange={(e) =>
                setUserData({ ...userData, mobile: e.target.value })
              }
              className="w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              placeholder="Mobile"
            />
            <h3 className="text-lg font-semibold">Emergency Contacts</h3>
            {userData.emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder={`Contact ${index + 1}`}
                  value={contact}
                  onChange={(e) =>
                    handleEmergencyContactChange(index, e.target.value)
                  }
                  className="w-full px-4 py-2 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
                <button
                  type="button"
                  onClick={() => removeEmergencyContact(index)}
                  className="text-red-500 hover:text-red-700 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addEmergencyContact}
              className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 transition duration-300"
            >
              Add Emergency Contact
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600">Age: {userData.age}</p>
            <p className="text-gray-600">Email: {userData.email}</p>
            <p className="text-gray-600">Mobile: {userData.mobile}</p>
            <h3 className="text-lg font-semibold mt-4">Emergency Contacts</h3>
            {userData.emergencyContacts.map((contact, index) => (
              <p key={index} className="text-gray-600">
                {contact}
              </p>
            ))}
          </div>
        )}

        <button
          type="button"
          onClick={isEditing ? saveProfile : toggleEdit}
          className={`w-full py-2 text-white rounded-lg focus:ring-4 transition duration-300 ${
            isEditing ? "bg-green-500 hover:bg-green-600 focus:ring-green-300" : "bg-blue-500 hover:bg-blue-600 focus:ring-blue-300"
          }`}
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

export default Profile;
