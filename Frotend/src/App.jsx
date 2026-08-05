import { useState } from 'react'
import { BrowserRouter, Routes, Route,Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './Hooks/useAuth.jsx'; 
import ProtectedRoutes from './components/ProtectedRoutes';
import MainLayout from './pages/MainLayout.jsx';

function App() {
  
  // const [user,setUser] = useState("")

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
         
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element= {
            <ProtectedRoutes>
              <MainLayout />
            </ProtectedRoutes>
          }>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App
