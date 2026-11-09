
import React from 'react'
import UserNavbar from '../Components/UserNavbar'
import Footer from '../Components/Footer'


const Feedback = () => {

  return (
    <div className="min-h-screen bg-slate-50">
      <UserNavbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Heading */}
        <div className="mb-7">
          <p className="text-sm font-semibold text-blue-600">
            USER DASHBOARD / FEEDBACK
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-2">
            Share Your Feedback
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            Your feedback helps us improve the issue resolution experience.
          </p>
        </div>

        {/* Feedback Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 p-6 sm:p-8 text-white shadow-lg mb-7">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl">
              💬
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold">
                We Value Your Opinion!
              </h2>
              <p className="text-sm text-blue-100 mt-1">
                Tell us about your experience with FlowFix.
              </p>
            </div>
          </div>
        </div>

        {/* Feedback Form - Design Only */}
        <div className="bg-white rounded-2xl border border-blue-100 shadow-sm p-5 sm:p-8 space-y-7">

          {/* Rating */}
          <div>
            <h2 className="text-lg font-bold text-slate-800">
              How was your experience?
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              Rate your overall issue resolution experience.
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className="text-3xl sm:text-4xl text-amber-400 hover:scale-110 transition"
                >
                  ★
                </button>
              ))}
            </div>

            <p className="text-xs text-slate-400 mt-2">
              1 = Poor &nbsp; | &nbsp; 5 = Excellent
            </p>
          </div>

          <div className="border-t border-blue-100"></div>

          {/* Feedback Category */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Feedback Category
            </label>

            <select className="w-full rounded-xl border border-blue-100 bg-blue-50/30 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition">
              <option value="">Select a category</option>
              <option>Issue Resolution</option>
              <option>Technician Service</option>
              <option>Response Time</option>
              <option>Platform Experience</option>
              <option>Other</option>
            </select>
          </div>

          {/* Issue Reference */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Related Issue
            </label>

            <select className="w-full rounded-xl border border-blue-100 bg-blue-50/30 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition">
              <option value="">Select an issue (optional)</option>
              <option>Wi-Fi connection problem</option>
              <option>Projector not working</option>
              <option>Classroom light issue</option>
            </select>
          </div>

          {/* Comments */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Your Comments
            </label>

            <textarea
              rows="5"
              placeholder="Share your experience, suggestions or concerns..."
              className="w-full rounded-xl border border-blue-100 bg-blue-50/30 px-4 py-3 text-sm outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />

            <p className="text-xs text-slate-400 mt-2">
              Your suggestions help us make FlowFix better.
            </p>
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
              Submit Feedback →
            </button>

          </div>
        </div>

      </main>
       <Footer/>
    </div>
  )
}

export default Feedback
