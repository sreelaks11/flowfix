
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-500 px-4 py-10 overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-30 -top-40 -left-32"></div>

      <div className="absolute w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30 -bottom-40 -right-32"></div>


      <div className="relative z-10 w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-500 text-white p-8 sm:p-10">

          <h1 className="text-4xl font-extrabold">
            FlowFix
          </h1>

          <p className="text-blue-50 mt-3 text-center">
            Report Smart. Resolve Faster.
          </p>

          <img
            src="https://account.asus.com/img/login_img02.png"
            alt="FlowFix registration illustration"
            className="w-full max-w-sm mt-8 hover:scale-105 transition duration-500"
          />

          <h2 className="text-2xl font-bold mt-6 text-center">
            Join FlowFix Today!
          </h2>

          <p className="text-blue-50 text-center mt-3 leading-7 max-w-sm">
            Create your account and experience a smarter way
            to report issues, track progress and get solutions.
          </p>

        </div>


        {/* Right Side - Register Form */}
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">

          <div className="mb-6">

            <Link
              to="/"
              className="text-blue-600 font-semibold hover:text-indigo-600 transition"
            >
              ← Back to Home
            </Link>

            <h2 className="text-3xl font-bold text-gray-900 mt-7">
              Create Account
            </h2>

            <p className="text-gray-500 mt-2">
              Register to get started with FlowFix.
            </p>

          </div>


          {/* Register Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >

            {/* Name */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-3 border border-gray-200 bg-blue-50/40 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />

            </div>


            {/* Email */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-gray-200 bg-blue-50/40 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              />

            </div>


            {/* Password */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  required
                  className="w-full px-4 py-3 pr-16 border border-gray-200 bg-blue-50/40 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600 hover:text-indigo-600"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>

              </div>

            </div>


            {/* Confirm Password */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Confirm Password
              </label>

              <div className="relative">

                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  required
                  className="w-full px-4 py-3 pr-16 border border-gray-200 bg-blue-50/40 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600 hover:text-indigo-600"
                >
                  {showConfirmPassword ? 'Hide' : 'Show'}
                </button>

              </div>

            </div>


            {/* Terms */}
            <div className="flex items-start gap-2 text-sm text-gray-600">

              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-1 accent-blue-600"
              />

              <p>
                I agree to the{' '}
                <span className="text-blue-600 font-semibold">
                  Terms and Conditions
                </span>
              </p>

            </div>


            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-semibold shadow-md shadow-blue-100 hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg hover:-translate-y-0.5 transition duration-300"
            >
              Create Account →
            </button>

          </form>


          {/* OR Divider */}
          <div className="flex items-center gap-4 my-5">

            <div className="flex-1 h-px bg-gray-200"></div>

            <span className="text-gray-400 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-200"></div>

          </div>


          {/* Google Sign Up */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-xl bg-white text-gray-700 font-semibold hover:bg-blue-50 hover:border-blue-300 hover:shadow-md transition duration-300"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-5 h-5"
            >

              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />

              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.77 7.18l7.73 6C44.41 37.96 46.98 31.9 46.98 24.55z"
              />

              <path
                fill="#FBBC05"
                d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.86.92 7.5 2.56 10.78l7.97-6.19z"
              />

              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.17 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 43.62 14.62 48 24 48z"
              />

            </svg>

            Continue with Google

          </button>


          {/* Login Link */}
          <p className="text-center text-gray-500 mt-6 text-sm">

            Already have an account?{' '}

            <Link
              to="/login"
              className="text-blue-600 font-bold hover:text-indigo-600 hover:underline"
            >
              Login
            </Link>

          </p>


          {/* Footer */}
          <p className="text-center text-gray-400 text-xs mt-7">
            © {new Date().getFullYear()} FlowFix. All rights reserved.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Register
