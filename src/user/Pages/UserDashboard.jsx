import React from 'react'
import { Link } from 'react-router-dom'
import UserNavbar from '../Components/UserNavbar'
import Footer from '../Components/Footer'

const UserDashboard = () => {

  const stats = [
    {
      title: 'Total Issues',
      count: '12',
      icon: '📋',
      color: 'from-blue-500 to-indigo-500',
      description: 'Issues you have reported'
    },
    {
      title: 'Pending Issues',
      count: '04',
      icon: '⏳',
      color: 'from-amber-400 to-orange-500',
      description: 'Waiting for action'
    },
    {
      title: 'In Progress',
      count: '03',
      icon: '⚙️',
      color: 'from-sky-400 to-blue-600',
      description: 'Currently being resolved'
    },
    {
      title: 'Resolved Issues',
      count: '05',
      icon: '✅',
      color: 'from-emerald-400 to-teal-600',
      description: 'Successfully completed'
    }
  ]

  const recentIssues = [
    {
      id: 1,
      title: 'Water leakage in bathroom',
      category: 'Plumbing',
      date: '03 Nov 2026',
      status: 'In Progress',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      id: 2,
      title: 'Lift not working',
      category: 'Electrical',
      date: '02 Nov 2026',
      status: 'Pending',
      color: 'bg-amber-100 text-amber-700'
    },
    {
      id: 3,
      title: 'Corridor light not working',
      category: 'Maintenance',
      date: '30 Oct 2026',
      status: 'Resolved',
      color: 'bg-emerald-100 text-emerald-700'
    }
  ]

  return (

    <div >

      <UserNavbar />

      <main className="min-h-screen space-y-8 px-4 sm:px-6 lg:px-8 p-10">

        {/* Welcome Section */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 p-6 sm:p-8 text-white shadow-lg">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

            <div>
              <p className="text-blue-100 text-sm font-medium">
                RESIDENT DASHBOARD
              </p>

              <h1 className="text-2xl sm:text-3xl font-bold mt-2">
                Welcome Back, Rahul! 👋
              </h1>

              <p className="text-blue-100 mt-3 max-w-xl leading-6">
                Report apartment problems, track your complaints
                and stay updated until they are resolved.
              </p>

              <Link
                to="/createissue"
                className="inline-flex mt-6 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-md hover:bg-blue-50 hover:-translate-y-1 transition duration-300"
              >
                <span>＋</span>
                Report New Issue
              </Link>
            </div>

            <div className="hidden sm:flex h-28 w-28 lg:h-36 lg:w-36 items-center justify-center rounded-full bg-white/15 text-6xl">
              🏢
            </div>

          </div>
        </div>

        {/* Apartment Information */}
        <section>

          <div className="mb-5">
            <h2 className="text-xl font-bold text-slate-800">
              My Apartment
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Your registered apartment and flat details
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">

              <div className="h-14 w-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-3xl">
                🏢
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800">
                  Green Valley Apartments
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Thrissur, Kerala, India
                </p>
              </div>

              <span className="sm:ml-auto bg-green-100 text-green-700 text-xs font-semibold px-4 py-2 rounded-full w-fit">
                Registered Resident
              </span>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5 sm:p-6">

              <div>
                <p className="text-xs text-slate-400 mb-2">Block / Tower</p>
                <p className="font-semibold text-slate-800">Block A</p>
              </div>

              <div>
                <p className="text-xs text-slate-400 mb-2">Flat Number</p>
                <p className="font-semibold text-slate-800">A-204</p>
              </div>

              <div>
                <p className="text-xs text-slate-400 mb-2">Floor</p>
                <p className="font-semibold text-slate-800">2nd Floor</p>
              </div>

              <div>
                <p className="text-xs text-slate-400 mb-2">Resident Type</p>
                <p className="font-semibold text-slate-800">Owner</p>
              </div>

            </div>

            <div className="border-t border-slate-100 px-5 sm:px-6 py-4 flex justify-between items-center">
              <p className="text-sm text-slate-500">
                Apartment information
              </p>

              <Link
                to="/user/profile"
                className="text-sm font-semibold text-blue-600 hover:text-indigo-700"
              >
                View Profile →
              </Link>
            </div>

          </div>
        </section>

        {/* Statistics Cards */}
        <section>

          <div className="mb-5">
            <h2 className="text-xl font-bold text-slate-800">
              Issue Overview
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              A quick summary of your reported apartment issues
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

            {stats.map((item, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >

                <div className="flex items-center justify-between">

                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-md`}>
                    {item.icon}
                  </div>

                  <span className="text-3xl font-bold text-slate-800 group-hover:text-blue-600 transition">
                    {item.count}
                  </span>

                </div>

                <h3 className="font-semibold text-slate-800 mt-5">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 mt-1">
                  {item.description}
                </p>

              </div>
            ))}

          </div>
        </section>

        {/* Recent Issues */}
        <section className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 sm:p-6 border-b border-slate-100">

            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Recent Issues
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Check the latest updates on your apartment complaints
              </p>
            </div>

            <Link
              to="/user/myissue"
              className="text-sm font-semibold text-blue-600 hover:text-indigo-700 transition"
            >
              View All Issues →
            </Link>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[650px] text-left">

              <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-6 py-4 font-semibold">Issue</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Date</th>
                  <th className="px-6 py-4 font-semibold">Status</th>
                  <th className="px-6 py-4 font-semibold">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">

                {recentIssues.map((issue) => (
                  <tr
                    key={issue.id}
                    className="hover:bg-blue-50/60 transition duration-200"
                  >

                    <td className="px-6 py-4 font-medium text-slate-800">
                      {issue.title}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-600">
                      {issue.category}
                    </td>

                    <td className="px-6 py-4 text-sm text-slate-500">
                      {issue.date}
                    </td>

                    <td className="px-6 py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${issue.color}`}>
                        {issue.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <Link
                        to={`/user/issuedetails/${issue.id}`}
                        className="text-sm font-semibold text-blue-600 hover:text-indigo-700"
                      >
                        View
                      </Link>
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>

          </div>
        </section>

        {/* Quick Actions */}
        <section>

          <h2 className="text-xl font-bold text-slate-800 mb-5">
            Quick Actions
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            <Link
              to="/user/createissue"
              className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition duration-300"
            >
              <div className="text-3xl">📝</div>
              <h3 className="font-bold text-slate-800 mt-4 group-hover:text-blue-600">
                Report an Issue
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                Report a new apartment maintenance problem.
              </p>
            </Link>

            <Link
              to="/user/myissue"
              className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition duration-300"
            >
              <div className="text-3xl">📊</div>
              <h3 className="font-bold text-slate-800 mt-4 group-hover:text-blue-600">
                Track My Issues
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                Follow the progress of your complaints.
              </p>
            </Link>

            <Link
              to="/user/notification"
              className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition duration-300"
            >
              <div className="text-3xl">🔔</div>
              <h3 className="font-bold text-slate-800 mt-4 group-hover:text-blue-600">
                Notifications
              </h3>
              <p className="text-sm text-slate-500 mt-2">
                Check your latest apartment updates.
              </p>
            </Link>

          </div>
        </section>

      </main>

      <Footer />

    </div>
  )
}

export default UserDashboard