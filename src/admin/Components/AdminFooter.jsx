
import React from 'react'
import { Link } from 'react-router-dom'

const AdminFooter = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-4 py-5 mt-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

        {/* Logo */}
        <div className="text-xl font-bold">
          Flow<span className="text-blue-200">Fix</span>
          <span className="text-xs font-normal ml-2 text-blue-100">
            Admin Panel
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-100">
          <Link to="/admin/dashboard" className="hover:text-white">
            Dashboard
          </Link>

          <Link to="/admin/allissues" className="hover:text-white">
            Issues
          </Link>

          <Link to="/admin/manageusers" className="hover:text-white">
            Users
          </Link>

          <Link to="/admin/reports" className="hover:text-white">
            Reports
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-blue-100 text-center">
          © 2026 FlowFix. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default AdminFooter
