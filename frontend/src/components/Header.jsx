import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {ChevronDown} from 'lucide-react'
import { useLogoutMutation } from '../slices/userApiSlice'
import { logout } from '../slices/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const {userInfo} = useSelector((state) => state.auth) 
  const categories = [
    "clarity",
    "mindset",
    "reflection",
    "audit",
    "recovery",
    "anxiety",
    "direction",
    "decision",
    "lifeDirection",
  ]
  const [logoutApi] = useLogoutMutation()

  const dispatch = useDispatch()
  const navigate = useNavigate()




  const logoutHandler = async()=>{
    await logoutApi().unwrap()
    dispatch(logout())
    navigate('/')
  }
  return (userInfo ? (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-gray-900"
        >
          MindJournal
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-5">

          {/* Categories Dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50">
              Categories
              <ChevronDown className="h-4 w-4" />
            </button>

            {/* Dropdown Menu */}
            <div className="invisible absolute right-0 mt-3 w-64 translate-y-2 rounded-3xl border border-gray-100 bg-white/95 p-3 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

              <div className="mb-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Journaling Spaces
              </div>

              <div className="space-y-1">

                {categories.map((category) => (
                  <Link
                    key={category}
                    to={`/category/${category}`}
                    className="flex items-center rounded-2xl px-4 py-3 text-sm font-medium capitalize text-gray-700 transition hover:bg-[#f8f6f2] hover:text-gray-900"
                  >
                    {category === "lifeDirection"
                      ? "Life Direction"
                      : category}
                  </Link>
                ))}

              </div>
            </div>
          </div>

          {/* New Entry Button */}
          

          {/* Profile */}
          <div className="group relative">
  
  {/* User Button */}
  <button className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-[#f8f6f2] px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-white">
    
    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-xs font-bold text-gray-700 shadow-sm">
      {userInfo.name.charAt(0).toUpperCase()}
    </div>

    <span>{userInfo.name}</span>

    <ChevronDown className="h-4 w-4 text-gray-500" />
  </button>

  {/* Dropdown */}
  <div className="invisible absolute right-0 mt-3 w-52 translate-y-2 rounded-3xl border border-gray-100 bg-white/95 p-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

    <Link
      to="/profile"
      className="flex items-center rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-[#f8f6f2]"
    >
      Profile
    </Link>

    <button
      onClick={logoutHandler}
      className="flex w-full items-center rounded-2xl px-4 py-3 text-left text-sm font-medium text-red-500 transition hover:bg-red-50"
    >
      Logout
    </button>
  </div>
</div>
        </div>
      </div>
    </header>
              ):(<header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-semibold tracking-tight text-gray-800"
        >
          MindJournal
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-xl px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-gray-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>)
    
  )
}

export default Header
