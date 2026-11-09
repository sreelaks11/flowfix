
import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import AdminFooter from '../Components/AdminFooter'

const AssignIssue = () => {

  const issues = [
    {
      id: 1,
      title: 'Water Leakage',
      category: 'Plumbing',
      location: 'Block A - A204',
      reporter: 'Rahul',
      priority: 'High',
      date: '05 Nov 2026'
    },
    {
      id: 2,
      title: 'Lift Not Working',
      category: 'Electrical',
      location: 'Block B - B105',
      reporter: 'Anjali',
      priority: 'High',
      date: '04 Nov 2026'
    },
    {
      id: 3,
      title: 'Corridor Light Not Working',
      category: 'Electrical',
      location: 'Block A - A302',
      reporter: 'Arun',
      priority: 'Medium',
      date: '03 Nov 2026'
    },
    {
      id: 4,
      title: 'Water Supply Problem',
      category: 'Plumbing',
      location: 'Block C - C201',
      reporter: 'Meera',
      priority: 'Low',
      date: '02 Nov 2026'
    }
  ]

  const technicians = [
    'Arjun Kumar',
    'Rahul Raj',
    'Vishnu S',
    'Akhil Thomas'
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <AdminNavbar />

      <main className="flex-1 px-3 sm:px-4 py-6 space-y-6">

        {/* Heading */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Assign Issues
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Assign reported issues to available technicians.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-sm">
            <p className="text-sm text-slate-500">Unassigned Issues</p>
            <h2 className="text-2xl font-bold text-blue-600 mt-2">12</h2>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-sm">
            <p className="text-sm text-slate-500">Available Technicians</p>
            <h2 className="text-2xl font-bold text-indigo-600 mt-2">08</h2>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-blue-100 shadow-sm">
            <p className="text-sm text-slate-500">Assigned Today</p>
            <h2 className="text-2xl font-bold text-emerald-600 mt-2">06</h2>
          </div>

        </div>

        {/* Issues List */}
        <div className="space-y-4">

          <h2 className="text-lg font-bold text-slate-800">
            Unassigned Issues
          </h2>

          {issues.map((issue) => (

            <div
              key={issue.id}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm
                         p-4 sm:p-5 hover:shadow-md transition"
            >

              <div className="flex flex-col lg:flex-row lg:items-center
                              justify-between gap-5">

                {/* Issue Details */}
                <div className="space-y-2">

                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-slate-800 text-lg">
                      {issue.title}
                    </h3>

                    <span className={`text-xs px-3 py-1 rounded-full font-semibold
                      ${issue.priority === 'High'
                        ? 'bg-red-100 text-red-600'
                        : issue.priority === 'Medium'
                        ? 'bg-amber-100 text-amber-600'
                        : 'bg-green-100 text-green-600'
                      }`}>
                      {issue.priority} Priority
                    </span>
                  </div>

                  <p className="text-sm text-slate-500">
                    Category: {issue.category}
                  </p>

                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
                    <span>📍 {issue.location}</span>
                    <span>👤 {issue.reporter}</span>
                    <span>📅 {issue.date}</span>
                  </div>

                </div>

                {/* Assign Section */}
                <div className="flex flex-col sm:flex-row gap-3 lg:min-w-[350px]">

                  <select
                    defaultValue=""
                    className="flex-1 border border-slate-200 rounded-lg px-3 py-2
                               text-sm outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="" disabled>
                      Select Technician
                    </option>

                    {technicians.map((technician, index) => (
                      <option key={index} value={technician}>
                        {technician}
                      </option>
                    ))}

                  </select>

                  <button
                    className="bg-gradient-to-r from-blue-600 to-indigo-600
                               text-white px-5 py-2 rounded-lg text-sm font-semibold
                               hover:from-blue-700 hover:to-indigo-700 transition"
                  >
                    Assign
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </main>

      <AdminFooter />

    </div>
  )
}

export default AssignIssue
