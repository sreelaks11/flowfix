
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-500 px-4 py-10 overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute w-96 h-96 bg-sky-200 rounded-full blur-3xl opacity-30 -top-40 -left-32"></div>

      <div className="absolute w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-30 -bottom-40 -right-32"></div>


      <div className="relative z-10 w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Side */}
        <div className="flex flex-col justify-center items-center bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-500 text-white p-10">

          <h1 className="text-4xl font-extrabold">
            FlowFix
          </h1>

          <p className="text-blue-50 mt-3 text-center">
            Report Smart. Resolve Faster.
          </p>

          <img
            src="https://img.magnific.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Customer support illustration"
            className="w-full max-w-sm mt-10 hover:scale-105 transition duration-500"
          />

          <h2 className="text-2xl font-bold mt-8 text-center">
            Welcome Back!
          </h2>

          <p className="text-blue-50 text-center mt-3 leading-7">
            Manage issues, track progress and stay connected
            with your resolution team.
          </p>

        </div>


        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center p-7 sm:p-12 lg:p-16">

          <div className="mb-7">

            <Link
              to="/"
              className="text-blue-600 font-semibold hover:text-indigo-600 transition"
            >
              ← Back to Home
            </Link>

            <h2 className="text-3xl font-bold text-gray-900 mt-8">
              Welcome Back!
            </h2>

            <p className="text-gray-500 mt-2">
              Please login to your FlowFix account.
            </p>

          </div>


          {/* Login Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5"
          >

            {/* Email */}
            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-200 bg-blue-50/40 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                required
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
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-200 bg-blue-50/40 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
                  required
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


            {/* Remember Me */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-gray-600 cursor-pointer">

                <input
                  type="checkbox"
                  className="w-4 h-4 accent-blue-600"
                />

                Remember me

              </label>

              <Link
                to="/forgotpassword"
                className="text-blue-600 font-semibold hover:text-indigo-600 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>


            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-semibold shadow-md shadow-blue-100 hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg hover:-translate-y-0.5 transition duration-300"
            >
              Login to Account →
            </button>

          </form>


          {/* OR Divider */}
          <div className="flex items-center gap-4 my-6">

            <div className="flex-1 h-px bg-gray-200"></div>

            <span className="text-gray-400 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-200"></div>

          </div>


          {/* Google Sign In */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-xl bg-white text-gray-700 font-semibold hover:bg-blue-50 hover:border-blue-300 hover:shadow-md transition duration-300"
          >

            {/* Google Icon */}
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


          {/* Register Link */}
          <p className="text-center text-gray-500 mt-7 text-sm">

            Don't have an account?{' '}

            <Link
              to="/register"
              className="text-blue-600 font-bold hover:text-indigo-600 hover:underline"
            >
              Create Account
            </Link>

          </p>


          {/* Footer */}
          <p className="text-center text-gray-400 text-xs mt-8">
            © {new Date().getFullYear()} FlowFix. All rights reserved.
          </p>

        </div>

      </div>

    </div>
  )
}

export default Login
