
import React from 'react'
import UserNavbar from '../Components/UserNavbar'
import Footer from '../Components/Footer'

const TrackComplaintStatus = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <UserNavbar />

      <div className="max-w-6xl mx-auto px-4 py-8">

        <h1 className="text-2xl font-bold text-slate-800">
          Track Complaint Status
        </h1>
        <p className="text-slate-500 mt-1 mb-6">
          Check the current status of your reported issues.
        </p>

        {/* Search Section */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-blue-100 mb-6">
          <h2 className="font-semibold text-slate-700 mb-3">
            Search Your Complaint
          </h2>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter Complaint ID"
              className="flex-1 border border-slate-200 rounded-lg px-4 py-2 outline-none focus:border-blue-400"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
              Track Status
            </button>
          </div>
        </div>

        {/* Complaint Details */}
        <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-5">

          <div className="flex flex-col sm:flex-row justify-between gap-3 mb-5">
            <div>
              <h2 className="text-lg font-bold text-slate-800">
                Water Leakage
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Complaint ID: #FF1025
              </p>
            </div>

            <span className="bg-yellow-100 text-yellow-700 px-4 py-1 rounded-full text-sm font-semibold h-fit">
              In Progress
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div>
              <p className="text-sm text-slate-500">Category</p>
              <p className="font-semibold text-slate-700">Plumbing</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Reported Date</p>
              <p className="font-semibold text-slate-700">03 Nov 2026</p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Assigned Technician</p>
              <p className="font-semibold text-slate-700">Arjun Kumar</p>
            </div>
          </div>

          <hr className="border-slate-100 mb-6" />

          <h3 className="font-bold text-slate-800 mb-5">
            Complaint Progress
          </h3>

          {/* Progress Timeline */}
          <div className="space-y-6">

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">
                  Complaint Submitted
                </h4>
                <p className="text-sm text-slate-500">
                  Your complaint has been successfully submitted.
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  03 Nov 2026
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                ✓
              </div>
              <div>
                <h4 className="font-semibold text-slate-700">
                  Technician Assigned
                </h4>
                <p className="text-sm text-slate-500">
                  Arjun Kumar has been assigned to your complaint.
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  04 Nov 2026
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700">
                  Work In Progress
                </h4>
                <p className="text-sm text-slate-500">
                  The technician is currently working on your issue.
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  05 Nov 2026
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
                ○
              </div>
              <div>
                <h4 className="font-semibold text-slate-400">
                  Issue Resolved
                </h4>
                <p className="text-sm text-slate-400">
                  Waiting for the issue to be resolved.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Technician Details */}
        <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-5 mt-6">
          <h3 className="font-bold text-slate-800 mb-3">
            Technician Details
          </h3>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
              A
            </div>

            <div>
              <p className="font-semibold text-slate-700">
                Arjun Kumar
              </p>
              <p className="text-sm text-slate-500">
                Plumbing Technician
              </p>
              <p className="text-sm text-slate-500">
                Phone: 9876543210
              </p>
            </div>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default TrackComplaintStatus
