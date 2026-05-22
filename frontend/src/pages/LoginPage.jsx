import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'
import { useDispatch ,useSelector  } from 'react-redux'
import { useLoginMutation  } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'
import {toast} from 'react-toastify'





const LoginPage = () => {

  const [email ,setEmail] = useState('')
  const [password ,setPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {userInfo} = useSelector((state)=>state.auth)

  const [login] = useLoginMutation()

  useEffect(()=>{
    if(userInfo){
      navigate('/')
    }
  } , [navigate ,userInfo])

  const submitHandler = async(e)=>{
    e.preventDefault()
    try {
      const res = await login({email , password}).unwrap()
      dispatch(setCredentials(res))
      navigate('/')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }


  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f6f2] px-6 py-12">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100 opacity-40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-100 opacity-40 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">
        
        {/* Heading */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f8f6f2] px-4 py-2 text-sm font-medium text-gray-600">
            ✨ Welcome Back
          </div>

          <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900">
            Continue your journey
          </h1>

          <p className="text-gray-500">
            Return to your thoughts, reflections, and clarity.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={submitHandler}>
          
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-gray-700 outline-none transition focus:border-gray-900"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-gray-700 outline-none transition focus:border-gray-900"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gray-900 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-gray-800"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Dont have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-gray-900 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  )
}

export default LoginPage
