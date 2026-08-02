import React from 'react'

export default function Register() {
  return (
    <div>
        <div>
            <h2>Create Account</h2>
            <div>
                <input
                placeholder='username'
                type="username" />
                <input
                placeholder='email' 
                type="email" />
                <input
                placeholder='password' 
                type="password" />
                <div>
                    <button>Create Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
