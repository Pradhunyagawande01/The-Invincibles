import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'

const Landingnavbar = () => {
  return (
    <div>
      <>
      <div className="bg-gray-800 shadow-lg">
        <nav className="flex items-center justify-between p-4">
          <p className="text-white text-xl font-bold">BSafe</p>

          <div className="flex items-center gap-4">
            <Link to="/login">
               <AiOutlineUser className="h-8 w-8 rounded-full border-2 border-gray-300 bg-slate-50" /> 
            </Link>
            <Link
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md transition duration-300"
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </>
    </div>
  )
}

export default Landingnavbar
