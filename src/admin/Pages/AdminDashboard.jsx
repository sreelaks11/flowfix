
import React from 'react'
import { Link } from 'react-router-dom'
import AdminFooter from '../../user/Components/Footer'
import AdminNavbar from '../Components/AdminNavbar'

const AdminDashboard = () => {

  const stats = [
    {
      title: 'Total Issues',
      count: '128',
      icon: '📋',
      color: 'from-blue-500 to-indigo-500',
      description: 'Total reported complaints'
    },
    {
      title: 'Pending Issues',
      count: '24',
      icon: '⏳',
      color: 'from-amber-400 to-orange-500',
      description: 'Waiting for assignment'
    },
    {
      title: 'In Progress',
      count: '18',
      icon: '⚙️',
      color: 'from-sky-400 to-blue-600',
      description: 'Currently being resolved'
    },
    {
      title: 'Resolved Issues',
      count: '86',
      icon: '✅',
      color: 'from-emerald-400 to-teal-600',
      description: 'Successfully completed'
    },
    {
      title: 'Total Users',
      count: '96',
      icon: '👥',
      color: 'from-violet-400 to-purple-600',
      description: 'Registered residents'
    },
    {
      title: 'Technicians',
      count: '12',
      icon: '🧑‍🔧',
      color: 'from-cyan-400 to-blue-600',
      description: 'Available technicians'
    }
  ]

  const recentIssues = [
    {
      id: 1,
      title: 'Water leakage in bathroom',
      flat: 'A-204',
      category: 'Plumbing',
      priority: 'High',
      status: 'Pending',
      color: 'bg-amber-100 text-amber-700',
      priorityColor: 'bg-red-100 text-red-700',
      date: '05 Nov 2026'
    },
    {
      id: 2,
      title: 'Lift not working',
      flat: 'B-105',
      category: 'Electrical',
      priority: 'High',
      status: 'In Progress',
      color: 'bg-blue-100 text-blue-700',
      priorityColor: 'bg-red-100 text-red-700',
      date: '04 Nov 2026'
    },
    {
      id: 3,
      title: 'Corridor light not working',
      flat: 'A-301',
      category: 'Maintenance',
      priority: 'Medium',
      status: 'Resolved',
      color: 'bg-emerald-100 text-emerald-700',
      priorityColor: 'bg-amber-100 text-amber-700',
      date: '03 Nov 2026'
    },
    {
      id: 4,
      title: 'Water supply issue',
      flat: 'C-202',
      category: 'Plumbing',
      priority: 'Medium',
      status: 'Pending',
      color: 'bg-amber-100 text-amber-700',
      priorityColor: 'bg-amber-100 text-amber-700',
      date: '02 Nov 2026'
    }
  ]

  const quickActions = [
    {
      title: 'All Issues',
      description: 'View and manage all reported complaints.',
      icon: '📋',
      link: '/admin/allissues'
    },
    {
      title: 'Assign Issues',
      description: 'Assign pending issues to technicians.',
      icon: '🧑‍🔧',
      link: '/admin/assignissue'
    },
    {
      title: 'Manage Users',
      description: 'View and manage apartment residents.',
      icon: '👥',
      link: '/admin/manageusers'
    },
    {
      title: 'Manage Technicians',
      description: 'Manage your maintenance team.',
      icon: '🛠️',
      link: '/admin/managetechnicians'
    },
    {
      title: 'Manage Categories',
      description: 'Manage apartment issue categories.',
      icon: '📂',
      link: '/admin/managecategories'
    },
    {
      title: 'SLA Monitoring',
      description: 'Monitor issue deadlines and delays.',
      icon: '⏰',
      link: '/admin/slamonitoring'
    },
    {
      title: 'Reports & Analytics',
      description: 'View issue reports and performance.',
      icon: '📊',
      link: '/admin/reports'
    }
  ]

  return (

    <div >

      <AdminNavbar />

      <main className="min-h-screen space-y-8 px-4 sm:px-6 lg:px-8 p-10">

        {/* Welcome Section */}
        <section className="rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 p-6 sm:p-8 text-white shadow-lg">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

            <div>
              <p className="text-blue-100 text-sm font-medium">
                ADMINISTRATOR DASHBOARD
              </p>

              <h1 className="text-2xl sm:text-3xl font-bold mt-2">
                Welcome Back, Admin! 👋
              </h1>

              <p className="text-blue-100 mt-3 max-w-xl leading-6">
                Manage apartment complaints, assign technicians,
                monitor issue progress and keep Green Valley Apartments running smoothly.
              </p>

              <Link
                to="/admin/allissues"
                className="inline-flex mt-6 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-md hover:bg-blue-50 hover:-translate-y-1 transition duration-300"
              >
                <span>📋</span>
                Manage All Issues
              </Link>
            </div>

            <div className="hidden sm:flex h-28 w-28 lg:h-36 lg:w-36 items-center justify-center rounded-full bg-white/15 text-6xl">
              🏢
            </div>

          </div>
        </section>


        {/* Apartment Information */}
        <section>

          <div className="mb-5">
            <h2 className="text-xl font-bold text-slate-800">
              Apartment Overview
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Managing apartment maintenance and resident services
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
                Management Active
              </span>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 p-5 sm:p-6">

              <div>
                <p className="text-xs text-slate-400 mb-2">
                  Total Residents
                </p>
                <p className="font-semibold text-slate-800">96</p>
              </div>

              <div>
                <p className="text-xs text-slate-400 mb-2">
                  Total Technicians
                </p>
                <p className="font-semibold text-slate-800">12</p>
              </div>

              <div>
                <p className="text-xs text-slate-400 mb-2">
                  Total Issues
                </p>
                <p className="font-semibold text-slate-800">128</p>
              </div>

              <div>
                <p className="text-xs text-slate-400 mb-2">
                  Active Issues
                </p>
                <p className="font-semibold text-blue-600">42</p>
              </div>

            </div>

          </div>
        </section>


        {/* Statistics Cards */}
        <section>

          <div className="mb-5">
            <h2 className="text-xl font-bold text-slate-800">
              Dashboard Overview
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              A quick summary of apartment issue management
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

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
                Recent Reported Issues
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Latest complaints reported by apartment residents
              </p>
            </div>

            <Link
              to="/admin/allissues"
              className="text-sm font-semibold text-blue-600 hover:text-indigo-700 transition"
            >
              View All Issues →
            </Link>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[850px] text-left">

              <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-5 py-4 font-semibold">Issue</th>
                  <th className="px-5 py-4 font-semibold">Flat</th>
                  <th className="px-5 py-4 font-semibold">Category</th>
                  <th className="px-5 py-4 font-semibold">Priority</th>
                  <th className="px-5 py-4 font-semibold">Date</th>
                  <th className="px-5 py-4 font-semibold">Status</th>
                  <th className="px-5 py-4 font-semibold">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">

                {recentIssues.map((issue) => (

                  <tr
                    key={issue.id}
                    className="hover:bg-blue-50/60 transition duration-200"
                  >

                    <td className="px-5 py-4 font-medium text-slate-800">
                      {issue.title}
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      {issue.flat}
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-600">
                      {issue.category}
                    </td>

                    <td className="px-5 py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${issue.priorityColor}`}>
                        {issue.priority}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-500">
                      {issue.date}
                    </td>

                    <td className="px-5 py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${issue.color}`}>
                        {issue.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <Link
                        to={`/admin/issuedetails/${issue.id}`}
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


        {/* Technician and SLA Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Technician Overview */}
          <div className="rounded-2xl bg-white border border-blue-100 shadow-sm p-5 sm:p-6">

            <div className="flex items-center justify-between gap-3 mb-5">
              <div>
                <h2 className="text-lg font-bold text-slate-800">
                  Technician Overview
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Maintenance team availability
                </p>
              </div>

              <span className="text-3xl">🧑‍🔧</span>
            </div>

            <div className="space-y-4">

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Available Technicians</span>
                <span className="font-bold text-emerald-600">08</span>
              </div>

              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600">Busy Technicians</span>
                <span className="font-bold text-blue-600">04</span>
              </div>

              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              </div>

            </div>

            <Link
              to="/admin/managetechnicians"
              className="inline-flex mt-6 text-sm font-semibold text-blue-600 hover:text-indigo-700"
            >
              Manage Technicians →
            </Link>

          </div>


          {/* SLA Overview */}
          <div className="rounded-2xl bg-white border border-blue-100 shadow-sm p-5 sm:p-6">

            <div className="flex items-center justify-between gap-3 mb-5">
              <div>
                <h2 className="text-lg font-bold text-slate-800">
                  SLA Monitoring
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Issue deadline summary
                </p>
              </div>

              <span className="text-3xl">⏰</span>
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-emerald-50 p-4">
                <p className="text-xs text-emerald-600 font-medium">
                  Within Deadline
                </p>
                <h3 className="text-2xl font-bold text-emerald-700 mt-2">
                  32
                </h3>
              </div>

              <div className="rounded-xl bg-red-50 p-4">
                <p className="text-xs text-red-600 font-medium">
                  Overdue Issues
                </p>
                <h3 className="text-2xl font-bold text-red-700 mt-2">
                  10
                </h3>
              </div>

            </div>

            <Link
              to="/admin/slamonitoring"
              className="inline-flex mt-6 text-sm font-semibold text-blue-600 hover:text-indigo-700"
            >
              View SLA Details →
            </Link>

          </div>

        </section>


        {/* Quick Actions */}
        <section>

          <div className="mb-5">
            <h2 className="text-xl font-bold text-slate-800">
              Quick Actions
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Quickly access admin management features
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {quickActions.map((item, index) => (

              <Link
                key={index}
                to={item.link}
                className="group rounded-2xl border border-blue-100 bg-white p-5 sm:p-6 shadow-sm hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition duration-300"
              >

                <div className="text-3xl">
                  {item.icon}
                </div>

                <h3 className="font-bold text-slate-800 mt-4 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 mt-2 leading-6">
                  {item.description}
                </p>

                <p className="text-sm font-semibold text-blue-600 mt-4">
                  Manage →
                </p>

              </Link>

            ))}

          </div>
        </section>

      </main>

      <AdminFooter />

    </div>
  )
}

export default AdminDashboard
