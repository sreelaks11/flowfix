
import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import AdminFooter from '../Components/AdminFooter'

const ManageUsers = () => {

  const users = [
    {
      id: 1,
      name: 'Rahul Kumar',
      email: 'rahul@gmail.com',
      phone: '9876543210',
      apartment: 'Block A - A204',
      role: 'Reporter',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Anjali Menon',
      email: 'anjali@gmail.com',
      phone: '9876543211',
      apartment: 'Block B - B105',
      role: 'Reporter',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Arun Raj',
      email: 'arun@gmail.com',
      phone: '9876543212',
      apartment: 'Block A - A302',
      role: 'Reporter',
      status: 'Inactive'
    },
    {
      id: 4,
      name: 'Meera S',
      email: 'meera@gmail.com',
      phone: '9876543213',
      apartment: 'Block C - C201',
      role: 'Reporter',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Vishnu P',
      email: 'vishnu@gmail.com',
      phone: '9876543214',
      apartment: 'Block B - B202',
      role: 'Reporter',
      status: 'Inactive'
    }
  ]

  const stats = [
    {
      title: 'Total Users',
      count: 96,
      color: 'from-blue-500 to-indigo-500',
      icon: '👥'
    },
    {
      title: 'Active Users',
      count: 82,
      color: 'from-emerald-400 to-teal-500',
      icon: '✓'
    },
    {
      title: 'Inactive Users',
      count: 14,
      color: 'from-amber-400 to-orange-500',
      icon: '⏸'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <AdminNavbar />

      <main className="flex-1 px-3 sm:px-4 py-6 space-y-6">

        {/* Heading */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Manage Users
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            View and manage registered residents of Green Valley Apartments.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-2xl border border-slate-100
                         shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-slate-500">{item.title}</p>
                  <h2 className="text-2xl font-bold text-slate-800 mt-2">
                    {item.count}
                  </h2>
                </div>

                <div className={`w-11 h-11 rounded-xl bg-gradient-to-r ${item.color}
                                flex items-center justify-center text-white text-xl`}>
                  {item.icon}
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Users Table */}
        <div className="bg-white rounded-2xl border border-slate-100
                        shadow-sm overflow-hidden">

          {/* Search and Filter */}
          <div className="p-4 border-b border-slate-100
                          flex flex-col sm:flex-row sm:items-center
                          justify-between gap-3">

            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Registered Users
              </h2>
              <p className="text-sm text-slate-500">
                List of all apartment residents
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">

              <input
                type="text"
                placeholder="Search users..."
                className="border border-slate-200 rounded-lg px-3 py-2
                           text-sm outline-none focus:ring-2 focus:ring-blue-400"
              />

              <select
                className="border border-slate-200 rounded-lg px-3 py-2
                           text-sm outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option>All Users</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>

            </div>

          </div>

          {/* Table */}
          <div className="overflow-x-auto">

            <table className="w-full min-w-[850px] text-sm text-left">

              <thead className="bg-blue-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">User</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 font-semibold">Apartment</th>
                  <th className="px-4 py-3 font-semibold">Role</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">

                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-blue-50/40 transition">

                    {/* User Details */}
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">

                        <div className="w-10 h-10 rounded-full bg-blue-100
                                        text-blue-700 flex items-center
                                        justify-center font-bold">
                          {user.name.charAt(0)}
                        </div>

                        <div>
                          <p className="font-semibold text-slate-800">
                            {user.name}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            {user.email}
                          </p>
                        </div>

                      </div>
                    </td>

                    <td className="px-4 py-4 text-slate-600">
                      {user.phone}
                    </td>

                    <td className="px-4 py-4 text-slate-600">
                      {user.apartment}
                    </td>

                    <td className="px-4 py-4 text-slate-600">
                      {user.role}
                    </td>

                    {/* Status */}
                    <td className="px-4 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${user.status === 'Active'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-slate-100 text-slate-600'
                        }`}>
                        {user.status}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-4 py-4">
                      <button className="text-blue-600 font-semibold
                                         hover:text-indigo-700">
                        View
                      </button>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

          <div className="px-4 py-3 border-t border-slate-100
                          text-sm text-slate-500">
            Showing {users.length} sample users
          </div>

        </div>

      </main>

      <AdminFooter />

    </div>
  )
}

export default ManageUsers
