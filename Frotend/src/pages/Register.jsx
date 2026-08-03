import React from 'react';

export default function Register() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      {/* Centered registration card */}
      <div className="w-full max-w-md bg-purple-50/50 backdrop-blur-sm border border-purple-100 p-8 sm:p-10 rounded-[2.5rem] shadow-sm transition-all hover:shadow-md">
        
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-purple-950 mb-8 tracking-tight">
          Create Account
        </h2>

        {/* Inputs container */}
        <div className="flex flex-col gap-4">
          
          {/* Username Input */}
          <div className="bg-white rounded-2xl border border-purple-200/80 p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-purple-500/30 focus-within:border-purple-400 transition-all">
            <input
              placeholder="Username"
              type="text"
              className="w-full bg-transparent px-4 py-2.5 text-sm sm:text-base text-gray-800 placeholder-purple-300 focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <div className="bg-white rounded-2xl border border-purple-200/80 p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-purple-500/30 focus-within:border-purple-400 transition-all">
            <input
              placeholder="Email address"
              type="email"
              className="w-full bg-transparent px-4 py-2.5 text-sm sm:text-base text-gray-800 placeholder-purple-300 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="bg-white rounded-2xl border border-purple-200/80 p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-purple-500/30 focus-within:border-purple-400 transition-all">
            <input
              placeholder="Password"
              type="password"
              className="w-full bg-transparent px-4 py-2.5 text-sm sm:text-base text-gray-800 placeholder-purple-300 focus:outline-none"
            />
          </div>

          {/* Submit Button Wrapper */}
          <div className="mt-2">
            <button className="w-full bg-purple-900 hover:bg-purple-950 text-white font-semibold text-sm py-4 rounded-2xl transition-all duration-200 shadow-md hover:shadow-purple-900/20 active:scale-[0.98] cursor-pointer">
              Create Account
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}