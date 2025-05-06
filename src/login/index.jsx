import React from 'react';
import loginImage from './assets/login-image.jpg'; // coloque sua imagem em src/assets

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-5xl shadow-lg rounded-xl overflow-hidden bg-white">
        {/* Left Side (Image) */}
        <div className="w-1/2 hidden md:block">
          <img
            src={loginImage}
            alt="Login visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side (Form) */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">M</div>
            <h2 className="text-2xl font-semibold mb-6">Welcome back!</h2>
          </div>

          <button className="flex items-center justify-center gap-2 border px-4 py-2 w-full rounded-md mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google"
              className="w-5 h-5"
            />
            <span className="font-medium">Sign in with Google</span>
          </button>

          <div className="text-center text-gray-400 text-sm mb-4">OR LOGIN WITH EMAIL</div>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="••••••••"
              />
              <div className="text-right text-sm text-blue-500 mt-1 hover:underline cursor-pointer">
                Forget Password?
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
            >
              Sign In
            </button>
          </form>

          <div className="text-center text-gray-400 text-sm mt-6">OR SIGN UP</div>
        </div>
      </div>
    </div>
  );
}
