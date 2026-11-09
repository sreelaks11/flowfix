
import React from 'react'
import UserNavbar from '../Components/UserNavbar'
import Footer from '../Components/Footer'



const CreateIssue = () => {

  return (
    <div className="min-h-screen bg-slate-50">
      <UserNavbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Heading */}
        <div className="mb-7">
          <p className="text-sm font-semibold text-blue-600">
            USER DASHBOARD / CREATE ISSUE
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-2">
            Report a New Issue
          </h1>

          <p className="text-slate-500 mt-2 text-sm">
            Provide the details below so our team can resolve your issue.
          </p>
        </div>

        {/* Form Design */}
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-5 sm:p-8 space-y-6">

          <div className="border-b border-blue-100 pb-4">
            <h2 className="text-lg font-bold text-slate-800">
              Issue Information
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Enter the basic information about the problem.
            </p>
          </div>

          {/* Issue Title */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Issue Title *
            </label>
            <input
              type="text"
              placeholder="Eg: Wi-Fi connection not working"
              className="w-full rounded-xl border border-blue-100 bg-blue-50/30 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          {/* Category and Priority */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Category *
              </label>
              <select
                className="w-full rounded-xl border border-blue-100 bg-blue-50/30 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              >
                <option value="">Select Category</option>
                <option>Network</option>
                <option>Electrical</option>
                <option>Maintenance</option>
                <option>Plumbing</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Priority *
              </label>
              <select
                className="w-full rounded-xl border border-blue-100 bg-blue-50/30 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              >
                <option>Low</option>
                <option selected>Medium</option>
                <option>High</option>
                <option>Urgent</option>
              </select>
            </div>

          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Location *
            </label>
            <input
              type="text"
              placeholder="Eg: Block A, Room 204"
              className="w-full rounded-xl border border-blue-100 bg-blue-50/30 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Issue Description *
            </label>
            <textarea
              rows="5"
              placeholder="Describe the issue in detail..."
              className="w-full rounded-xl border border-blue-100 bg-blue-50/30 px-4 py-3 text-sm outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          {/* Image Upload Design */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Upload Images
            </label>

            <div className="flex flex-col items-center justify-center border-2 border-dashed border-blue-200 rounded-xl p-7 bg-blue-50/40 hover:bg-blue-50 hover:border-blue-400 transition cursor-pointer">
              <span className="text-3xl">📷</span>
              <span className="text-sm font-semibold text-blue-600 mt-2">
                Click to upload images
              </span>
              <span className="text-xs text-slate-400 mt-1">
                PNG, JPG or JPEG
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 border-t border-blue-100 pt-5">

            <button
              type="button"
              className="px-6 py-3 rounded-xl border border-blue-200 text-blue-600 text-sm font-semibold hover:bg-blue-50 transition"
            >
              Cancel
            </button>

            <button
              type="button"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition"
            >
              Submit Issue →
            </button>

          </div>

        </div>
      </main>
       <Footer/>
    </div>
  )
}

export default CreateIssue
