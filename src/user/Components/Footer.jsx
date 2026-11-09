
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white mt-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide">
              Flow<span className="text-cyan-300">Fix</span>
            </h2>

            <p className="text-blue-100 text-sm leading-7 mt-4 max-w-xs">
              Report issues, track progress, and get things fixed.
              FlowFix makes issue resolution simple and transparent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm text-blue-100">
              <Link to="/" className="hover:text-cyan-300 transition">Home</Link>
              <Link to="/user/dashboard" className="hover:text-cyan-300 transition">Dashboard</Link>
              <Link to="/user/createissue" className="hover:text-cyan-300 transition">Report an Issue</Link>
              <Link to="/user/myissue" className="hover:text-cyan-300 transition">My Issues</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Support
            </h3>

            <div className="flex flex-col gap-3 text-sm text-blue-100">
              <Link to="/user/feedback" className="hover:text-cyan-300 transition">Feedback</Link>
              <Link to="/user/notification" className="hover:text-cyan-300 transition">Notifications</Link>
              <Link to="/login" className="hover:text-cyan-300 transition">Login</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Contact Us
            </h3>

            <p className="text-sm text-blue-100 leading-7">
              Have questions or suggestions?
              <br />
              We'd love to hear from you.
            </p>

            <p className="text-sm text-cyan-300 font-medium mt-3">
              support@flowfix.com
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-400/40 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">

          <p className="text-sm text-blue-100 text-center">
            © 2026 FlowFix. All rights reserved.
          </p>

          <p className="text-sm text-blue-100">
            Making issue resolution simpler.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer
