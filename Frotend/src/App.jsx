import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthProvider from './Hooks/useAuth.jsx'; 
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  
  // const [user,setUser] = useState("")

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
         
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path='/' element={
           
              <Home/>}
               // <ProtectedRoutes>
            //</ProtectedRoutes>
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    
  )
}

export default App
