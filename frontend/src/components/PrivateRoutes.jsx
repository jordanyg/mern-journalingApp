import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const {userInfo} = useSelector((state)=>state.auth)

  return userInfo ? children : <Navigate to="/login" replace />;
}

export default PrivateRoutes