import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useDispatch ,useSelector } from 'react-redux'
import { useRegisterMutation } from '../slices/userApiSlice'
import { setCredentials } from '../slices/authSlice'
import { toast } from 'react-toastify'





const RegisterPage = () => {
  const [name ,setName] = useState('')
  const [email , setEmail] = useState('')
  const [password ,setPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')



  const [register] = useRegisterMutation()

  const {userInfo} = useSelector((state)=>state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    if(userInfo){
      navigate('/')
    }
  } , [userInfo , navigate])

  const submitHandler = async(e)=>{
    e.preventDefault()
    try {
      if(password !== confirmPassword){
        toast.error('Passwords do not match')
      }else{
        const res = await register({name ,email ,password}).unwrap()
        dispatch(setCredentials(res))
        navigate('/')
      }
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f6f2] px-6 py-12">
      
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100 opacity-40 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-100 opacity-40 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/50 bg-white/80 p-8 shadow-2xl backdrop-blur-xl">

        {/* Heading */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f8f6f2] px-4 py-2 text-sm font-medium text-gray-600">
            🌱 Start Fresh
          </div>

          <h1 className="mb-3 text-4xl font-bold tracking-tight text-gray-900">
            Create your journal
          </h1>

          <p className="text-gray-500">
            Build a quieter space for your thoughts and growth.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={submitHandler}>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-gray-700 outline-none transition focus:border-gray-900"
            />
          </div>

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
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Create a password"
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-gray-700 outline-none transition focus:border-gray-900"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
               confirm Password
            </label>

            <input
              type="password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-4 text-gray-700 outline-none transition focus:border-gray-900"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-gray-900 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-gray-800"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-gray-900 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  )
}

export default RegisterPage
