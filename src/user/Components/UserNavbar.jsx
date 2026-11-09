
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const UserNavbar = () => {
  const [showProfile, setShowProfile] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    // Backend logout will be connected later
    navigate('/login')
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-blue-100">
      <div className="max-w-full px-4 sm:px-6 lg:px-8">

        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link
            to="/UserDashboard"
            className="text-2xl font-extrabold tracking-tight text-blue-600 hover:scale-105 transition duration-300"
          >
            Flow<span className="text-indigo-600">Fix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">

            <Link
              to="/UserDashboard"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition duration-300"
            >
              Dashboard
            </Link>

            <Link
              to="/createissue"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition duration-300"
            >
              Create Issue
            </Link>

            <Link
              to="/myissue"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition duration-300"
            >
              My Issues
            </Link>

            <Link
              to="/notification"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition duration-300"
            >
              Notifications
            </Link>

            <Link
              to="/feedback"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition duration-300"
            >
              Feedback
            </Link>
            
            <Link
              to="/trackcomplaintstatus"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition duration-300"
            >
              Track status
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Notification Icon */}
            <Link
              to="/notification"
              className="relative rounded-full p-2 text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
              title="Notifications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.5-1.5A2 2 0 0118 14v-3a6 6 0 00-12 0v3a2 2 0 01-.5 1.5L4 17h5m6 0a3 3 0 01-6 0"
                />
              </svg>

              <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500"></span>
            </Link>

            {/* Profile Menu */}
            <div className="relative">

              <button
                onClick={() => setShowProfile(!showProfile)}
                className="flex items-center gap-2 rounded-full border border-blue-100 p-1.5 hover:bg-blue-50 transition duration-300"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white">
                  U
                </div>

                <span className="hidden sm:block text-sm font-semibold text-slate-700">
                  User
                </span>

                <svg
                  className={`hidden sm:block h-4 w-4 text-slate-500 transition ${
                    showProfile ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              {showProfile && (
                <div className="absolute right-0 mt-3 w-48 overflow-hidden rounded-xl border border-blue-100 bg-white shadow-xl">

                  <div className="border-b border-slate-100 bg-blue-50 px-4 py-3">
                    <Link to='/Profile' className="text-sm font-bold text-slate-800">
                      User Account
                    </Link>
                    <p className="text-xs text-slate-500">
                      Reporter
                    </p>
                  </div>

                  <Link
                    to="/UserDashboard"
                    onClick={() => setShowProfile(false)}
                    className="block px-4 py-3 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition"
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-3 text-left text-sm font-semibold text-red-500 hover:bg-red-50 transition"
                  >
                    Logout
                  </button>

                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default UserNavbar
