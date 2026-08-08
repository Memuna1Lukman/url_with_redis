import { useState } from 'react'
import { BrowserRouter, Routes, Route,Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './Hooks/useAuth.jsx'; 
import ProtectedRoutes from './components/ProtectedRoutes';
import MainLayout from './pages/MainLayout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { ShortProvider } from './Hooks/useShortUrl.jsx';

function App() {
  
  // const [user,setUser] = useState("")

  return (
    <AuthProvider>
      <ShortProvider>
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
              <Route path='/dashboard' element={<Dashboard/>}/>
            </Route>
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </ShortProvider>
      
    </AuthProvider>
    
  )
}

export default App
