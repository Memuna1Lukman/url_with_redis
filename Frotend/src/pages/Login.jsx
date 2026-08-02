import React from 'react'

export default function Login() {
  return (
    <div>
        <div>
            <h2>Log In</h2>
            <div>
                <input
                placeholder='email' 
                type="email" />
                <input
                placeholder='password' 
                type="password" />
                <div>
                    <button>Log In</button>
                </div>
            </div>
        </div>
    </div>
  )
}
