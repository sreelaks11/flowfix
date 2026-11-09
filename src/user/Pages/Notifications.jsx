
import React from 'react'
import UserNavbar from '../Components/UserNavbar'
import Footer from '../Components/Footer'


const Notifications = () => {

  const notifications = [
    {
      id: 1,
      icon: '🛠️',
      title: 'Technician Assigned',
      message: 'A technician has been assigned to your Wi-Fi connection problem.',
      date: '05 Nov 2026',
      time: '10:30 AM',
      type: 'Assignment',
      unread: true
    },
    {
      id: 2,
      icon: '⚙️',
      title: 'Issue Status Updated',
      message: 'Your projector issue is now being resolved.',
      date: '04 Nov 2026',
      time: '02:15 PM',
      type: 'Status Update',
      unread: true
    },
    {
      id: 3,
      icon: '✅',
      title: 'Issue Resolved',
      message: 'Your classroom light issue has been successfully resolved. Please confirm the resolution.',
      date: '03 Nov 2026',
      time: '11:45 AM',
      type: 'Resolution',
      unread: false
    },
    {
      id: 4,
      icon: '📋',
      title: 'Issue Submitted',
      message: 'Your water leakage complaint has been submitted successfully.',
      date: '02 Nov 2026',
      time: '09:20 AM',
      type: 'New Issue',
      unread: false
    },
    {
      id: 5,
      icon: '💬',
      title: 'Technician Comment',
      message: 'A technician added a new update to your reported network issue.',
      date: '01 Nov 2026',
      time: '04:10 PM',
      type: 'Comment',
      unread: false
    }
  ]

  const summary = [
    {
      title: 'All Notifications',
      count: '05',
      icon: '🔔',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Unread',
      count: '02',
      icon: '📩',
      color: 'from-sky-400 to-blue-600'
    },
    {
      title: 'Read',
      count: '03',
      icon: '✓',
      color: 'from-emerald-400 to-teal-600'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      <UserNavbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Page Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-7">
          <div>
            <p className="text-sm font-semibold text-blue-600">
              USER DASHBOARD / NOTIFICATIONS
            </p>

            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mt-2">
              Notifications
            </h1>

            <p className="text-sm text-slate-500 mt-2">
              Stay updated on your reported issues and their progress.
            </p>
          </div>

          <button
            type="button"
            className="rounded-xl border border-blue-200 bg-white px-4 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition"
          >
            ✓ Mark all as read
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {summary.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-2xl border border-blue-100 bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div>
                <p className="text-sm text-slate-500 font-medium">
                  {item.title}
                </p>
                <h2 className="text-2xl font-bold text-slate-800 mt-2">
                  {item.count}
                </h2>
              </div>

              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl text-white`}>
                {item.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Notifications Section */}
        <section className="bg-white rounded-2xl border border-blue-100 shadow-sm overflow-hidden">

          {/* Section Heading */}
          <div className="p-5 sm:p-6 border-b border-blue-100">
            <h2 className="text-lg font-bold text-slate-800">
              Recent Notifications
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Your latest updates and alerts.
            </p>
          </div>

          {/* Filter Tabs - Design Only */}
          <div className="flex gap-5 px-5 sm:px-6 border-b border-blue-100 overflow-x-auto">
            <button className="whitespace-nowrap border-b-2 border-blue-600 py-4 text-sm font-semibold text-blue-600">
              All Notifications
            </button>

            <button className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-slate-500 hover:text-blue-600">
              Unread
            </button>

            <button className="whitespace-nowrap border-b-2 border-transparent py-4 text-sm font-medium text-slate-500 hover:text-blue-600">
              Read
            </button>
          </div>

          {/* Notification List */}
          <div className="divide-y divide-blue-50">
            {notifications.map((item) => (
              <div
                key={item.id}
                className={`flex gap-3 sm:gap-4 p-5 sm:p-6 transition hover:bg-blue-50/50 ${
                  item.unread ? 'bg-blue-50/40' : 'bg-white'
                }`}
              >

                {/* Icon */}
                <div className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-xl">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold text-sm sm:text-base text-slate-800">
                        {item.title}
                      </h3>

                      {item.unread && (
                        <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-semibold text-blue-700">
                          NEW
                        </span>
                      )}
                    </div>

                    <span className="text-xs text-slate-400 shrink-0">
                      {item.date} · {item.time}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 mt-2 leading-6">
                    {item.message}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 mt-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {item.type}
                    </span>

                    {item.type === 'Resolution' && (
                      <button
                        type="button"
                        className="text-xs font-semibold text-blue-600 hover:text-indigo-700"
                      >
                        Confirm Resolution →
                      </button>
                    )}
                  </div>
                </div>

                {/* Unread Indicator */}
                {item.unread && (
                  <div className="hidden sm:block h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600 mt-2"></div>
                )}

              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-blue-100 bg-blue-50/40 px-5 py-4">
            <p className="text-xs sm:text-sm text-slate-500">
              Showing 5 sample notifications
            </p>
          </div>

        </section>
      </main>
       <Footer/>
    </div>
  )
}

export default Notifications
