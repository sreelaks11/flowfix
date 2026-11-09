
import React from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import AdminFooter from '../Components/AdminFooter'

const SLAMonitoring = () => {

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <AdminNavbar />

      <div className="flex-1 px-4 py-6">

        {/* Heading */}
        <h1 className="text-2xl font-bold text-slate-800">
          SLA Monitoring
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Monitor issue response time and resolution deadlines.
        </p>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-sm text-slate-500">Total Issues</p>
            <h2 className="text-2xl font-bold text-blue-600 mt-2">120</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-sm text-slate-500">Within SLA</p>
            <h2 className="text-2xl font-bold text-green-600 mt-2">95</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-sm text-slate-500">Near Deadline</p>
            <h2 className="text-2xl font-bold text-orange-500 mt-2">15</h2>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <p className="text-sm text-slate-500">Overdue</p>
            <h2 className="text-2xl font-bold text-red-600 mt-2">10</h2>
          </div>

        </div>

        {/* SLA Performance */}
        <div className="bg-white p-5 rounded-xl shadow-sm mt-6">

          <h2 className="text-lg font-bold text-slate-800">
            SLA Performance
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Overall issue resolution performance
          </p>

          <div className="flex justify-between mt-5 mb-2">
            <span className="text-sm text-slate-600">SLA Success Rate</span>
            <span className="text-sm font-bold text-green-600">85%</span>
          </div>

          <div className="w-full bg-slate-100 h-3 rounded-full">
            <div className="bg-green-500 h-3 w-[85%] rounded-full"></div>
          </div>

        </div>

        {/* Issue Deadline Table */}
        <div className="bg-white rounded-xl shadow-sm mt-6 overflow-hidden">

          <div className="p-4 border-b">
            <h2 className="text-lg font-bold text-slate-800">
              Issue Deadline Tracking
            </h2>

            <p className="text-sm text-slate-500">
              Check issue deadlines and SLA status
            </p>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[650px] text-sm text-left">

              <thead className="bg-blue-50 text-slate-600">
                <tr>
                  <th className="p-4">Issue</th>
                  <th className="p-4">Technician</th>
                  <th className="p-4">Deadline</th>
                  <th className="p-4">Time Left</th>
                  <th className="p-4">SLA Status</th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-t">
                  <td className="p-4 font-semibold">Water Leakage</td>
                  <td className="p-4">Arjun Kumar</td>
                  <td className="p-4">06 Nov 2026</td>
                  <td className="p-4">12 Hours</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Within SLA
                    </span>
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-semibold">Lift Not Working</td>
                  <td className="p-4">Rahul Raj</td>
                  <td className="p-4">05 Nov 2026</td>
                  <td className="p-4">2 Hours</td>
                  <td className="p-4">
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
                      Near Deadline
                    </span>
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-semibold">Power Failure</td>
                  <td className="p-4">Vishnu S</td>
                  <td className="p-4">04 Nov 2026</td>
                  <td className="p-4">Overdue</td>
                  <td className="p-4">
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
                      Overdue
                    </span>
                  </td>
                </tr>

                <tr className="border-t">
                  <td className="p-4 font-semibold">Water Supply Problem</td>
                  <td className="p-4">Akhil Thomas</td>
                  <td className="p-4">07 Nov 2026</td>
                  <td className="p-4">2 Days</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                      Within SLA
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

          <p className="p-4 text-sm text-slate-500 border-t">
            Showing 4 sample issues
          </p>

        </div>

      </div>

      <AdminFooter />

    </div>
  )
}

export default SLAMonitoring
