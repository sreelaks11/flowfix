
import React from 'react'
import UserNavbar from '../Components/UserNavbar'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className="min-h-screen bg-slate-50">

      <UserNavbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm text-blue-600 font-semibold mb-2">
            USER DASHBOARD / PROFILE
          </p>
          <h1 className="text-3xl font-bold text-slate-800">
            My Profile
          </h1>
          <p className="text-slate-500 mt-2">
            Manage your personal and apartment information.
          </p>
        </div>

        {/* Profile Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-2xl p-6 sm:p-8 text-white mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-5">

            <div className="w-24 h-24 rounded-full bg-white/20 border-4 border-white/40 flex items-center justify-center text-3xl font-bold">
              R
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold">Rahul R</h2>
              <p className="text-blue-100 mt-1">Apartment Resident</p>
              <p className="text-blue-100 text-sm mt-2">
                Green Valley Apartments · Flat A-204
              </p>
            </div>

            <div className="sm:ml-auto">
              <span className="bg-white/20 text-white text-sm px-4 py-2 rounded-full">
                Active Resident
              </span>
            </div>

          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Personal Information */}
          <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-6">

            <h3 className="text-xl font-bold text-slate-800 mb-6">
              Personal Information
            </h3>

            <div className="space-y-5">

              <div>
                <p className="text-sm text-slate-400 mb-1">Full Name</p>
                <p className="font-medium text-slate-700">Rahul R</p>
              </div>

              <div>
                <p className="text-sm text-slate-400 mb-1">Email Address</p>
                <p className="font-medium text-slate-700">rahul@gmail.com</p>
              </div>

              <div>
                <p className="text-sm text-slate-400 mb-1">Phone Number</p>
                <p className="font-medium text-slate-700">+91 98765 43210</p>
              </div>

              <div>
                <p className="text-sm text-slate-400 mb-1">Resident Type</p>
                <p className="font-medium text-slate-700">Owner</p>
              </div>

            </div>
          </div>

          {/* Apartment Information */}
          <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-6">

            <h3 className="text-xl font-bold text-slate-800 mb-6">
              Apartment Information
            </h3>

            <div className="space-y-5">

              <div>
                <p className="text-sm text-slate-400 mb-1">Apartment Name</p>
                <p className="font-medium text-slate-700">Green Valley Apartments</p>
              </div>

              <div>
                <p className="text-sm text-slate-400 mb-1">Building / Block</p>
                <p className="font-medium text-slate-700">Block A</p>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <p className="text-sm text-slate-400 mb-1">Flat Number</p>
                  <p className="font-medium text-slate-700">A-204</p>
                </div>

                <div>
                  <p className="text-sm text-slate-400 mb-1">Floor</p>
                  <p className="font-medium text-slate-700">2nd Floor</p>
                </div>

              </div>

              <div>
                <p className="text-sm text-slate-400 mb-1">Apartment Address</p>
                <p className="font-medium text-slate-700">
                  Thrissur, Kerala, India
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Account Details */}
        <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-6 mt-6">

          <h3 className="text-xl font-bold text-slate-800 mb-5">
            Account Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div>
              <p className="text-sm text-slate-400 mb-1">Account Status</p>
              <span className="inline-block text-green-700 bg-green-50 px-3 py-1 rounded-full text-sm font-medium">
                Active
              </span>
            </div>

            <div>
              <p className="text-sm text-slate-400 mb-1">Member Since</p>
              <p className="font-medium text-slate-700">January 2026</p>
            </div>

            <div>
              <p className="text-sm text-slate-400 mb-1">User Role</p>
              <p className="font-medium text-slate-700">Reporter</p>
            </div>

          </div>

        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-6 mt-6">

          <h3 className="text-xl font-bold text-slate-800 mb-5">
            Quick Access
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <Link
              to="/myissue"
              className="flex items-center justify-between p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition"
            >
              <div>
                <p className="font-semibold text-slate-800">My Issues</p>
                <p className="text-sm text-slate-500 mt-1">
                  Track your apartment complaints
                </p>
              </div>
              <span className="text-blue-600 text-xl">→</span>
            </Link>

            <Link
              to="/notification"
              className="flex items-center justify-between p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition"
            >
              <div>
                <p className="font-semibold text-slate-800">Notifications</p>
                <p className="text-sm text-slate-500 mt-1">
                  View apartment updates
                </p>
              </div>
              <span className="text-blue-600 text-xl">→</span>
            </Link>

          </div>
        </div>

      </main>

      <Footer />

    </div>
  )
}

export default Profile
