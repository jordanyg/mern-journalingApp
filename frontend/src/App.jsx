import React from 'react'
import Header from './components/Header'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import PrivateRoutes from './components/PrivateRoutes'
import { Routes , Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path='/category/:category' element={<PrivateRoutes><CategoryPage /></PrivateRoutes>}></Route>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/profile' element={<PrivateRoutes><ProfilePage /></PrivateRoutes>}></Route>
      </Routes>
    </>
  )
}

export default App
