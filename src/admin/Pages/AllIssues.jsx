
import React from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from '../Components/AdminNavbar'
import AdminFooter from '../Components/AdminFooter'

const AllIssues = () => {

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <AdminNavbar />

      <div className="flex-1 px-4 py-6">

        {/* Heading */}
        <h1 className="text-2xl font-bold text-slate-800">
          All Issues
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          View and manage all reported issues in Green Valley Apartments.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-slate-500">Total Issues</p>
            <h2 className="text-2xl font-bold text-blue-600 mt-2">128</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-slate-500">Pending</p>
            <h2 className="text-2xl font-bold text-orange-500 mt-2">24</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-slate-500">In Progress</p>
            <h2 className="text-2xl font-bold text-sky-600 mt-2">18</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-slate-500">Resolved</p>
            <h2 className="text-2xl font-bold text-green-600 mt-2">86</h2>
          </div>

        </div>

        {/* Issues Table */}
        <div className="bg-white rounded-xl shadow-sm mt-6 overflow-hidden">

          <div className="p-4 border-b">
            <h2 className="text-lg font-bold text-slate-800">
              Reported Issues
            </h2>
            <p className="text-sm text-slate-500">
              Recent complaints submitted by residents
            </p>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[700px] text-sm text-left">

              <thead className="bg-blue-50 text-slate-600">
                <tr>
                  <th className="p-4">Issue</th>
                  <th className="p-4">Location</th>
                  <th className="p-4">Reporter</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Priority</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-t">
                  <td className="p-4">
                    <p className="font-semibold">Water Leakage</p>
                    <p className="text-xs text-slate-500">Plumbing</p>
                  </td>
                  <td className="p-4">Block A - A204</td>
                  <td className="p-4">Rahul</td>
                  <td className="p-4">05 Nov 2026</td>
                  <td className="p-4">
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                      High
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                      Pending
                    </span>
                  </td>
                  <td className="p-4">
                    <Link to="/managtechnicians" className="text-blue-600 font-semibold">
                      Assign
                    </Link>
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">
                    <p className="font-semibold">Lift Not Working</p>
                    <p className="text-xs text-slate-500">Electrical</p>
                  </td>
                  <td className="p-4">Block B - B105</td>
                  <td className="p-4">Anjali</td>
                  <td className="p-4">04 Nov 2026</td>
                  <td className="p-4">
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                      High
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      In Progress
                    </span>
                  </td>
                  <td className="p-4">
                    <Link to="/managtechnicians" className="text-blue-600 font-semibold">
                      Assign
                    </Link>
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">
                    <p className="font-semibold">Corridor Light Not Working</p>
                    <p className="text-xs text-slate-500">Electrical</p>
                  </td>
                  <td className="p-4">Block A - A302</td>
                  <td className="p-4">Arun</td>
                  <td className="p-4">03 Nov 2026</td>
                  <td className="p-4">
                    <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                      Medium
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                      Resolved
                    </span>
                  </td>
                  <td className="p-4">
                    <Link to="/managtechnicians" className="text-blue-600 font-semibold">
                      Assign
                    </Link>
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">
                    <p className="font-semibold">Water Supply Problem</p>
                    <p className="text-xs text-slate-500">Plumbing</p>
                  </td>
                  <td className="p-4">Block C - C201</td>
                  <td className="p-4">Meera</td>
                  <td className="p-4">02 Nov 2026</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
                      Low
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
                      Pending
                    </span>
                  </td>
                  <td className="p-4">
                    <Link to="/managtechnicians" className="text-blue-600 font-semibold">
                      Assign
                    </Link>
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">
                    <p className="font-semibold">Parking Area Cleaning</p>
                    <p className="text-xs text-slate-500">Maintenance</p>
                  </td>
                  <td className="p-4">Block B - Parking</td>
                  <td className="p-4">Anu</td>
                  <td className="p-4">01 Nov 2026</td>
                  <td className="p-4">
                    <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full">
                      Medium
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                      In Progress
                    </span>
                  </td>
                  <td className="p-4">
                    <Link to="/managtechnicians" className="text-blue-600 font-semibold">
                      Assign 
                    </Link>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

          <p className="p-4 text-sm text-slate-500 border-t">
            Showing 5 sample issues
          </p>

        </div>

      </div>

      <AdminFooter />

    </div>
  )
}

export default AllIssues
