import React, { useState } from 'react';
import { useAuth } from '../Hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom'; 

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => { // Fixed typo in name
        e.preventDefault();
        setError('');
        try {
            await login({ email, password });
            navigate('/');
        } catch (err) {
            setError(err.message || 'Invalid email or password');
        }
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
            <form
                onSubmit={handleSubmit} 
                className="w-full max-w-md bg-purple-50/50 backdrop-blur-sm border border-purple-100 p-8 sm:p-10 rounded-[2.5rem] shadow-sm transition-all hover:shadow-md"
            >
                <h2 className="text-3xl font-extrabold text-center text-purple-950 mb-8 tracking-tight">
                    Log In
                </h2>
                
                {error && <p className="text-red-500 text-sm mb-4 text-center font-medium">{error}</p>}
                
                <div className="flex flex-col gap-4">
                    {/* Email Input */}
                    <div className="bg-white rounded-2xl border border-purple-200/80 p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-purple-500/30 focus-within:border-purple-400 transition-all">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email address"
                            required
                            type="email"
                            className="w-full bg-transparent px-4 py-2.5 text-sm sm:text-base text-gray-800 placeholder-purple-300 focus:outline-none"
                        />
                    </div>

                    {/* Password Input */}
                    <div className="bg-white rounded-2xl border border-purple-200/80 p-1.5 shadow-sm focus-within:ring-2 focus-within:ring-purple-500/30 focus-within:border-purple-400 transition-all">
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                            type="password"
                            className="w-full bg-transparent px-4 py-2.5 text-sm sm:text-base text-gray-800 placeholder-purple-300 focus:outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="mt-2">
                        <button 
                            type="submit"
                            className="w-full bg-purple-900 hover:bg-purple-950 text-white font-semibold text-sm py-4 rounded-2xl transition-all duration-200 shadow-md hover:shadow-purple-900/20 active:scale-[0.98] cursor-pointer"
                        >
                            Log In
                        </button>
                    </div>
                    
                    {/* Fixed Navigation Link */}
                    <p className="text-sm text-center text-gray-600 mt-2">
                        Don't have an account?{' '}
                        <Link to="/signup" className="text-purple-700 font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
}