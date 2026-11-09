
import React from 'react'
import { Link } from 'react-router-dom'
import UserNavbar from '../Components/UserNavbar'
import Footer from '../Components/Footer'


const MyIssue = () => {

  const issues = [
    {
      id: 1,
      title: 'Wi-Fi connection problem',
      category: 'Network',
      location: 'Block A, Room 204',
      date: '03 Nov 2026',
      priority: 'High',
      priorityColor: 'bg-orange-100 text-orange-700',
      status: 'In Progress',
      statusColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 2,
      title: 'Projector not working',
      category: 'Electrical',
      location: 'Seminar Hall',
      date: '02 Nov 2026',
      priority: 'Medium',
      priorityColor: 'bg-amber-100 text-amber-700',
      status: 'Pending',
      statusColor: 'bg-amber-100 text-amber-700'
    },
    {
      id: 3,
      title: 'Classroom light issue',
      category: 'Maintenance',
      location: 'Block B, Room 105',
      date: '30 Oct 2026',
      priority: 'Low',
      priorityColor: 'bg-green-100 text-green-700',
      status: 'Resolved',
      statusColor: 'bg-emerald-100 text-emerald-700'
    },
    {
      id: 4,
      title: 'Water leakage',
      category: 'Plumbing',
      location: 'Ground Floor',
      date: '28 Oct 2026',
      priority: 'Urgent',
      priorityColor: 'bg-red-100 text-red-700',
      status: 'In Progress',
      statusColor: 'bg-blue-100 text-blue-700'
    }
  ]

  const summary = [
    { title: 'Total Issues', count: '12', icon: '📋', color: 'from-blue-500 to-indigo-500' },
    { title: 'Pending', count: '04', icon: '⏳', color: 'from-amber-400 to-orange-500' },
    { title: 'In Progress', count: '03', icon: '⚙️', color: 'from-sky-400 to-blue-600' },
    { title: 'Resolved', count: '05', icon: '✅', color: 'from-emerald-400 to-teal-600' }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <UserNavbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Page Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              USER DASHBOARD / MY ISSUES
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-2">
              My Issues
            </h1>
            <p className="text-sm text-slate-500 mt-2">
              Track and manage all the issues you have reported.
            </p>
          </div>

          <Link
            to="/user/createissue"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
          >
            ＋ Report New Issue
          </Link>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {summary.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-blue-100 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center justify-between gap-2">
                <div className={`h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-xl`}>
                  {item.icon}
                </div>
                <span className="text-2xl sm:text-3xl font-bold text-slate-800">
                  {item.count}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-slate-700 mt-4">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Issues List */}
        <section className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">

          <div className="p-5 sm:p-6 border-b border-blue-100">
            <h2 className="text-lg font-bold text-slate-800">
              Reported Issues
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              View the details and current status of your complaints.
            </p>
          </div>

          {/* Search and Filters - Design Only */}
          <div className="p-5 sm:p-6 flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Search issues..."
              className="w-full md:flex-1 rounded-xl border border-blue-100 bg-blue-50/30 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <div className="grid grid-cols-2 gap-3 sm:flex">
              <select className="w-full sm:w-40 rounded-xl border border-blue-100 bg-white px-3 py-3 text-sm text-slate-600 outline-none focus:border-blue-500">
                <option>All Categories</option>
                <option>Network</option>
                <option>Electrical</option>
                <option>Maintenance</option>
                <option>Plumbing</option>
              </select>

              <select className="w-full sm:w-40 rounded-xl border border-blue-100 bg-white px-3 py-3 text-sm text-slate-600 outline-none focus:border-blue-500">
                <option>All Status</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Resolved</option>
              </select>
            </div>
          </div>

          {/* Responsive Issues Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] text-left">
              <thead className="bg-blue-50/70 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">Issue</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Location</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Priority</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {issues.map((issue) => (
                  <tr
                    key={issue.id}
                    className="hover:bg-blue-50/50 transition duration-200"
                  >
                    <td className="px-6 py-4 font-semibold text-sm text-slate-800">
                      {issue.title}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {issue.category}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {issue.location}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-500">
                      {issue.date}
                    </td>

                    <td className="px-6 py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${issue.priorityColor}`}>
                        {issue.priority}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${issue.statusColor}`}>
                        {issue.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <Link
                        to={`/user/issuedetails/${issue.id}`}
                        className="text-sm font-semibold text-blue-600 hover:text-indigo-700 transition"
                      >
                        View Details →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Note */}
          <div className="border-t border-blue-100 bg-blue-50/40 px-5 py-4">
            <p className="text-xs sm:text-sm text-slate-500">
              Showing 4 sample issues
            </p>
          </div>

        </section>
      </main>
       <Footer/>
    </div>
  )
}

export default MyIssue
