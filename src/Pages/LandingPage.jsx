
import React from 'react'

function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 shadow-sm">

        <h1 className="text-2xl font-bold text-blue-600">
          FlowFix
        </h1>

        <div className="hidden md:flex gap-8 font-medium">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#how" className="hover:text-blue-600">How It Works</a>
        </div>

        <div className="flex gap-3">
          <a href="/login"
            className="px-5 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
            Login
          </a>

          <a href="/register"
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Register
          </a>
        </div>

      </nav>


      {/* Hero Section */}
      <section id="home" className="bg-blue-50 px-6 py-20 md:py-28">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-blue-600 font-semibold mb-4">
              SMART ISSUE MANAGEMENT PLATFORM
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Report Issues.
              <span className="block text-blue-600">
                Get Them Fixed.
              </span>
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-8">
              FlowFix makes issue reporting and resolution simple.
              Report problems, track their progress and stay updated
              until they are successfully resolved.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a href="/login"
                className="bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:shadow-lg">
                Get Started →
              </a>

              <a href="#about"
                className="border border-blue-600 text-blue-600 px-7 py-3 rounded-lg font-semibold hover:bg-blue-100">
                Learn More
              </a>

            </div>
          </div>


          {/* Hero Image / Illustration */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">

            <div className="bg-blue-600 rounded-2xl p-6 text-white">
              <p className="text-blue-100">Welcome to FlowFix</p>
              <h2 className="text-3xl font-bold mt-2">
                Everything in One Place
              </h2>
              <p className="mt-3 text-blue-100">
                From reporting an issue to getting it resolved.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-5">

              <div className="bg-blue-50 p-5 rounded-xl text-center">
                <p className="text-3xl">📝</p>
                <h3 className="font-bold mt-2">Report Issues</h3>
                <p className="text-sm text-gray-500 mt-1">Easy reporting</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl text-center">
                <p className="text-3xl">📡</p>
                <h3 className="font-bold mt-2">Track Progress</h3>
                <p className="text-sm text-gray-500 mt-1">Live updates</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl text-center">
                <p className="text-3xl">👨‍🔧</p>
                <h3 className="font-bold mt-2">Quick Action</h3>
                <p className="text-sm text-gray-500 mt-1">Task assignment</p>
              </div>

              <div className="bg-blue-50 p-5 rounded-xl text-center">
                <p className="text-3xl">✅</p>
                <h3 className="font-bold mt-2">Get Resolved</h3>
                <p className="text-sm text-gray-500 mt-1">Better solutions</p>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-blue-600 font-semibold">ABOUT FLOWFIX</p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            A Smarter Way to Manage Issues
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            FlowFix is a real-time issue resolution platform designed
            to make problem reporting, task assignment and issue tracking
            easier. It connects users, technicians and administrators
            through one organized system.
          </p>

        </div>

      </section>


      {/* Features Section */}
      <section id="features" className="bg-blue-50 py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold">OUR FEATURES</p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Everything You Need
            </h2>

            <p className="text-gray-600 mt-4">
              Simple tools to make issue management easier and faster.
            </p>
          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            <div className="bg-white p-7 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition">
              <p className="text-3xl">📋</p>
              <h3 className="text-xl font-bold mt-4">Easy Issue Reporting</h3>
              <p className="text-gray-500 mt-3">
                Report problems with descriptions, categories and images.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition">
              <p className="text-3xl">⚡</p>
              <h3 className="text-xl font-bold mt-4">Real-Time Tracking</h3>
              <p className="text-gray-500 mt-3">
                Follow issue status from submission to resolution.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition">
              <p className="text-3xl">👨‍🔧</p>
              <h3 className="text-xl font-bold mt-4">Smart Assignment</h3>
              <p className="text-gray-500 mt-3">
                Assign reported issues to responsible technicians.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition">
              <p className="text-3xl">🔔</p>
              <h3 className="text-xl font-bold mt-4">Notifications</h3>
              <p className="text-gray-500 mt-3">
                Receive updates whenever an issue changes its status.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition">
              <p className="text-3xl">⏱️</p>
              <h3 className="text-xl font-bold mt-4">SLA Monitoring</h3>
              <p className="text-gray-500 mt-3">
                Monitor deadlines and prioritize urgent issues.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition">
              <p className="text-3xl">📊</p>
              <h3 className="text-xl font-bold mt-4">Reports & Analytics</h3>
              <p className="text-gray-500 mt-3">
                View issue statistics and resolution performance.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* How It Works */}
      <section id="how" className="py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <p className="text-blue-600 font-semibold">HOW IT WORKS</p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Four Simple Steps
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

            <div className="p-6 rounded-xl border border-blue-100 hover:shadow-lg transition">
              <p className="text-4xl">📝</p>
              <h3 className="font-bold text-lg mt-4">01. Report</h3>
              <p className="text-gray-500 mt-2">
                Submit your problem with necessary details.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-blue-100 hover:shadow-lg transition">
              <p className="text-4xl">👨‍💻</p>
              <h3 className="font-bold text-lg mt-4">02. Assign</h3>
              <p className="text-gray-500 mt-2">
                Admin assigns the issue to a technician.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-blue-100 hover:shadow-lg transition">
              <p className="text-4xl">📡</p>
              <h3 className="font-bold text-lg mt-4">03. Track</h3>
              <p className="text-gray-500 mt-2">
                Track the progress through live updates.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-blue-100 hover:shadow-lg transition">
              <p className="text-4xl">✅</p>
              <h3 className="font-bold text-lg mt-4">04. Resolve</h3>
              <p className="text-gray-500 mt-2">
                Confirm the solution and give feedback.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-blue-700 py-16 px-6 text-center text-white">

        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to Make Issue Management Easier?
        </h2>

        <p className="text-blue-100 mt-5">
          Join FlowFix and experience a smarter way to resolve problems.
        </p>

        <a href="/register"
          className="inline-block mt-8 bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-blue-100 transition">
          Get Started Now →
        </a>

      </section>


      {/* Footer */}
       <footer className="bg-slate-950 text-white pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">

            <div>
              <h2 className="text-2xl font-extrabold">
                Flow<span className="text-blue-400">Fix</span>
              </h2>
              <p className="text-slate-400 text-sm leading-7 mt-4 max-w-xs">
                A smarter platform to report, track and resolve everyday issues efficiently.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-5">Quick Links</h4>
              <div className="space-y-3 text-sm text-slate-400">
                <a href="#home" className="block hover:text-blue-400 transition">Home</a>
                <a href="#features" className="block hover:text-blue-400 transition">Features</a>
                <a href="#how-it-works" className="block hover:text-blue-400 transition">How It Works</a>
                <a href="#modules" className="block hover:text-blue-400 transition">Modules</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-5">Platform</h4>
              <div className="space-y-3 text-sm text-slate-400">
                <a href="/login" className="block hover:text-blue-400 transition">User Login</a>
                <a href="/register" className="block hover:text-blue-400 transition">Register</a>
                <a href="/login" className="block hover:text-blue-400 transition">Admin Login</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-5">Our Mission</h4>
              <p className="text-slate-400 text-sm leading-7">
                Making issue reporting transparent, communication simple
                and problem resolution faster.
              </p>
            </div>

          </div>

          <div className="pt-7 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} FlowFix. All rights reserved.</p>
            <p>Report Smart. Resolve Faster. ✨</p>
          </div>
        </div>
      </footer>


    </div>
  )
}

export default LandingPage
