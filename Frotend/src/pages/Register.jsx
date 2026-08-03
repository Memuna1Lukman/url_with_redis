import React, { useState } from 'react';
import { useAuth } from '../Hooks/useAuth';
import { useNavigate,Link } from 'react-router-dom';
import Login from './Login';


export default function Register() {
    const[email,setEmail] =useState('')
    const [username,setUsername] =useState('')
    const [password,setPassword] = useState('')
    const [error,setError] = useState('')
    const {register} = useAuth()
    const navigate = useNavigate()

    const handleSummit = async (e)=>{
        e.preventDefault()
        try{
           await register({username,email,password})
           navigate('/')
        }catch(err){
           setError(err.message)
        }

    }

   
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      {/* Centered registration card */}
      <form 
        onSubmit={handleSummit}
        className="w-full max-w-md bg-purple-50/50 backdrop-blur-sm border border-purple-100 p-8 sm:p-10 rounded-[2.5rem] shadow-sm transition-all hover:shadow-md">
        
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-purple-950 mb-8 tracking-tight">
          Create Account
        </h2>
        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
        {/* Inputs container */}
        <div className="flex flex-col gap-4">
          
          {/* Username Input */}
          <div className="bg-white rounded-2xl border border-purple-200/80 p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-purple-500/30 focus-within:border-purple-400 transition-all">
            <input
              onChange={(e)=>setUsername(e.target.value)}
              value={username}
              placeholder="Username"
              type="text"
              className="w-full bg-transparent px-4 py-2.5 text-sm sm:text-base text-gray-800 placeholder-purple-300 focus:outline-none"
            />
          </div>

          {/* Email Input */}
          <div className="bg-white rounded-2xl border border-purple-200/80 p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-purple-500/30 focus-within:border-purple-400 transition-all">
            <input
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              placeholder="Email address"
              type="email"
              className="w-full bg-transparent px-4 py-2.5 text-sm sm:text-base text-gray-800 placeholder-purple-300 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="bg-white rounded-2xl border border-purple-200/80 p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-purple-500/30 focus-within:border-purple-400 transition-all">
            <input
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              type="password"
              className="w-full bg-transparent px-4 py-2.5 text-sm sm:text-base text-gray-800 placeholder-purple-300 focus:outline-none"
            />
          </div>

          {/* Submit Button Wrapper */}
          <div className="mt-2">
            <button type='submit' className="w-full bg-purple-900 hover:bg-purple-950 text-white font-semibold text-sm py-4 rounded-2xl transition-all duration-200 shadow-md hover:shadow-purple-900/20 active:scale-[0.98] cursor-pointer">
              Create Account
            </button>
            <p className="text-sm text-center text-gray-600 mt-4">Don't have an account? <Link to="/login" className="text-purple-700 font-semibold hover:underline">Log In</Link></p>
            
          </div>

        </div>

      </form>
    </div>
  );
}