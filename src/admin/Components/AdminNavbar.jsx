
import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-blue-100 px-3 sm:px-4 py-3">
      <div className="flex flex-wrap items-center justify-between gap-3">

        {/* Logo */}
        <Link to="/admin/dashboard" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white 
                          w-9 h-9 rounded-lg flex items-center justify-center font-bold">
            F
          </div>

          <span className="text-xl font-bold text-slate-800">
            Flow<span className="text-blue-600">Fix</span>
          </span>

          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
            Admin
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600">

          <Link to="/admindashbord" className="hover:text-blue-600">
            Dashboard
          </Link>

          <Link to="/allissues" className="hover:text-blue-600">
            Issues
          </Link>

          <Link to="/assignissues" className="hover:text-blue-600">
            Assign Issues
          </Link>

          <Link to="/manageusers" className="hover:text-blue-600">
            Manage Users
          </Link>

          <Link to="/managtechnicians" className="hover:text-blue-600">
            Technicians
          </Link>

          <Link to="/reports" className="hover:text-blue-600">
            Reports
          </Link>

          {/* SLA Monitoring */}
          <Link to="/slamonnitoring" className="hover:text-blue-600">
            SLA Monitoring
          </Link>

        </div>

        {/* Admin Profile */}
        <div className="flex items-center gap-2">

          <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 
                          flex items-center justify-center font-semibold">
            A
          </div>

          <span className="text-sm font-semibold text-slate-700">
            Admin
          </span>

        </div>

      </div>
    </nav>
  )
}

export default AdminNavbar
