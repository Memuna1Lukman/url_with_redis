import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import muna from '../asserts/muna.png';
import {useAuth} from '../Hooks/useAuth.jsx'; 


export default function NavBar() {
  const {user} = useAuth()
  // i wajt to add the username
  // const handleLayout = async (){
  //   await log
  // }
  const getNavClass = ({ isActive }) => {
    const baseClassName =
      'px-3 py-1.5 text-sm font-medium transition-all duration-200 relative';
    const activeClassName = isActive
      ? 'text-purple-900 font-semibold after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-0.5 after:bg-purple-600 after:rounded-full'
      : 'text-gray-500 hover:text-purple-700';
    return `${baseClassName} ${activeClassName}`;
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-md border-b border-purple-50 px-8 py-4 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand / Logo Section (Left) */}
        <Link to="/" className="flex items-center gap-2 group">
        <div className="flex items-center gap-2.5 bg-purple-50/80 hover:bg-purple-100/70 border-none pl-1.5 pr-4 py-1 transition-all cursor-pointer">
            <img
              src={muna}
              alt="Memuna"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm"
            />
            <span className="font-extrabold text-2xl tracking-tight text-gray-900 group-hover:text-purple-700 transition-colors">
            URL<span className="text-purple-600">Vault</span>
          </span>
        </div>
          
        </Link>

        {/* Centered Navigation Links */}
        <div className="flex items-center space-x-6">
          <NavLink to="/" className={getNavClass} end>
            Home
          </NavLink>
          <NavLink to="/dashboard" className={getNavClass}>
            Dashboard
          </NavLink>
        </div>

        {/* User Profile Dropdown / Actions (Right) */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 bg-purple-50/80 hover:bg-purple-100/70 border border-purple-100/80 rounded-full pl-1.5 pr-4 py-1 transition-all cursor-pointer">
        
            <span className="text-sm font-medium text-purple-950">
              {user?.username || 'Guest'}
            </span>
          </div>

          <NavLink
            to="/logout"
            className="text-xs font-semibold text-purple-600 hover:text-purple-800 bg-purple-100/50 hover:bg-purple-100 px-3 py-2 rounded-full transition-all"
          >
            Logout
          </NavLink>
        </div>

      </nav>
    </header>
  );
}