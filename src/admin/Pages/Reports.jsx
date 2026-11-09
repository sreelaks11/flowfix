
import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import AdminFooter from '../Components/AdminFooter'

const Reports = () => {

  const reports = [
    { id: 1, title: 'Water Leakage', category: 'Plumbing', date: '05 Nov 2026', status: 'Resolved' },
    { id: 2, title: 'Lift Not Working', category: 'Maintenance', date: '04 Nov 2026', status: 'Pending' },
    { id: 3, title: 'Power Failure', category: 'Electrical', date: '03 Nov 2026', status: 'In Progress' },
    { id: 4, title: 'Broken Water Pipe', category: 'Plumbing', date: '02 Nov 2026', status: 'Resolved' },
    { id: 5, title: 'Parking Light Issue', category: 'Electrical', date: '01 Nov 2026', status: 'Resolved' }
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <AdminNavbar />

      <div className="flex-1 px-4 py-6">

        {/* Heading */}
        <h1 className="text-2xl font-bold text-slate-800">
          Reports & Analytics
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          View issue reports and apartment maintenance statistics.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

          <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-blue-500">
            <p className="text-sm text-slate-500">Total Issues</p>
            <h2 className="text-3xl font-bold text-blue-600 mt-2">120</h2>
            <p className="text-xs text-slate-400 mt-1">All reported issues</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-green-500">
            <p className="text-sm text-slate-500">Resolved Issues</p>
            <h2 className="text-3xl font-bold text-green-600 mt-2">85</h2>
            <p className="text-xs text-slate-400 mt-1">Successfully completed</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-orange-500">
            <p className="text-sm text-slate-500">Pending Issues</p>
            <h2 className="text-3xl font-bold text-orange-500 mt-2">20</h2>
            <p className="text-xs text-slate-400 mt-1">Waiting for action</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-purple-500">
            <p className="text-sm text-slate-500">In Progress</p>
            <h2 className="text-3xl font-bold text-purple-600 mt-2">15</h2>
            <p className="text-xs text-slate-400 mt-1">Currently working</p>
          </div>

        </div>

        {/* Issue Summary */}
        <div className="bg-white p-5 rounded-xl shadow-sm mt-6">

          <h2 className="text-lg font-bold text-slate-800 mb-4">
            Issue Summary
          </h2>

          <div className="space-y-5">

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600">Plumbing</span>
                <span className="font-semibold">45 Issues</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-blue-500 h-3 rounded-full w-[75%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600">Electrical</span>
                <span className="font-semibold">35 Issues</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-green-500 h-3 rounded-full w-[60%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600">Maintenance</span>
                <span className="font-semibold">25 Issues</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-orange-400 h-3 rounded-full w-[42%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-600">Other</span>
                <span className="font-semibold">15 Issues</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-purple-500 h-3 rounded-full w-[25%]"></div>
              </div>
            </div>

          </div>

        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-xl shadow-sm mt-6 overflow-hidden">

          <div className="p-4 border-b">
            <h2 className="text-lg font-bold text-slate-800">
              Recent Issue Reports
            </h2>
            <p className="text-sm text-slate-500">
              Overview of recently reported issues
            </p>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[650px] text-sm text-left">

              <thead className="bg-blue-50 text-slate-600">
                <tr>
                  <th className="p-4">Issue</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>

              <tbody>
                {reports.map((item) => (
                  <tr key={item.id} className="border-t hover:bg-blue-50">

                    <td className="p-4 font-semibold text-slate-700">
                      {item.title}
                    </td>

                    <td className="p-4 text-slate-600">
                      {item.category}
                    </td>

                    <td className="p-4 text-slate-600">
                      {item.date}
                    </td>

                    <td className="p-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'Resolved'
                          ? 'bg-green-100 text-green-700'
                          : item.status === 'Pending'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {item.status}
                      </span>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

          <p className="p-4 text-sm text-slate-500 border-t">
            Showing {reports.length} recent reports
          </p>

        </div>

      </div>

      <AdminFooter />

    </div>
  )
}

export default Reports
