import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import muna from '../asserts/muna.png'

export default function NavBar() {
    const getNavClass = ({isActive}) =>{
        const baseClassName = ``
        const activeClassName = isActive ? "" : ""
        return `${baseClassName} ${activeClassName}`
    }

  return (
    <div>
       <div>
          <img src={muna} alt="logo" />
       </div>
       <div>
        <NavLink to="/" className={getNavClass} end>
            Home
        </NavLink>
        <NavLink to="/dashboard" className={getNavClass} end>
            Dashboard
        </NavLink>
       </div>
       <div>
        <NavLink to="/" end>
            Memuna
        </NavLink>
        <NavLink to="/logout" className={getNavClass} end>
            Logout
        </NavLink>
       </div>
    </div>
  )
}
