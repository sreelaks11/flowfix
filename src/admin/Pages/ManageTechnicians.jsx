
import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import AdminFooter from '../Components/AdminFooter'

const ManageTechnicians = () => {

  const technicians = [
    { id: 1, name: 'Arjun Kumar', email: 'arjun@gmail.com', phone: '9876543210', specialization: 'Plumbing', issues: 3, status: 'Available' },
    { id: 2, name: 'Rahul Raj', email: 'rahul@gmail.com', phone: '9876543211', specialization: 'Electrical', issues: 2, status: 'Busy' },
    { id: 3, name: 'Vishnu S', email: 'vishnu@gmail.com', phone: '9876543212', specialization: 'Maintenance', issues: 4, status: 'Busy' },
    { id: 4, name: 'Akhil Thomas', email: 'akhil@gmail.com', phone: '9876543213', specialization: 'Plumbing', issues: 0, status: 'Available' },
    { id: 5, name: 'Nikhil P', email: 'nikhil@gmail.com', phone: '9876543214', specialization: 'Electrical', issues: 0, status: 'Available' }
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <AdminNavbar />

      <div className="flex-1 px-4 py-6">

        <h1 className="text-2xl font-bold text-slate-800">
          Manage Technicians
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          View and manage technicians in Green Valley Apartments.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-slate-500 text-sm">Total Technicians</p>
            <h2 className="text-2xl font-bold text-blue-600 mt-2">12</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-slate-500 text-sm">Available</p>
            <h2 className="text-2xl font-bold text-green-600 mt-2">8</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-slate-500 text-sm">Busy</p>
            <h2 className="text-2xl font-bold text-orange-500 mt-2">4</h2>
          </div>

        </div>

        {/* Technician Table */}
        <div className="bg-white rounded-xl shadow-sm mt-6 overflow-hidden">

          <div className="p-4 border-b flex flex-col sm:flex-row justify-between gap-3">

            <div>
              <h2 className="font-bold text-lg text-slate-800">
                Technician List
              </h2>
              <p className="text-sm text-slate-500">
                All registered technicians
              </p>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search technicians..."
                className="border rounded-lg px-3 py-2 text-sm w-full"
              />

              <select className="border rounded-lg px-3 py-2 text-sm">
                <option>All Status</option>
                <option>Available</option>
                <option>Busy</option>
              </select>
            </div>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[750px] text-sm text-left">

              <thead className="bg-blue-50 text-slate-600">
                <tr>
                  <th className="p-4">Technician</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">Specialization</th>
                  <th className="p-4">Assigned Issues</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>

                {technicians.map((item) => (
                  <tr key={item.id} className="border-t hover:bg-blue-50">

                    <td className="p-4">
                      <p className="font-semibold text-slate-800">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {item.email}
                      </p>
                    </td>

                    <td className="p-4">{item.phone}</td>

                    <td className="p-4">{item.specialization}</td>

                    <td className="p-4">{item.issues}</td>

                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        item.status === 'Available'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-orange-100 text-orange-700'
                      }`}>
                        {item.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <button className="text-blue-600 font-semibold">
                        View
                      </button>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

          <p className="p-4 text-sm text-slate-500 border-t">
            Showing {technicians.length} sample technicians
          </p>

        </div>

      </div>

      <AdminFooter />

    </div>
  )
}

export default ManageTechnicians
