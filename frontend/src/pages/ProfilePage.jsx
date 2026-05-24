import { useState, useEffect } from "react"
import { useUpdateUserProfileMutation , useDeleteUserProfileMutation } from "../slices/userApiSlice"
import { useDispatch ,useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCredentials } from "../slices/authSlice"
import { logout } from "../slices/authSlice"
import { toast } from "react-toastify"

const ProfilePage = () => {
    const [name ,setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('')

    const [updateUserProfileApi] = useUpdateUserProfileMutation()
    const [deleteUserProfileApi] = useDeleteUserProfileMutation()

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const {userInfo} = useSelector((state)=>state.auth)
    
        useEffect(()=>{
            if(userInfo){
                setName(userInfo.name)
                setEmail(userInfo.email)
            }
        }, [userInfo])

    const submitHandler = async(e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
            toast.error('passwords do not match')
        }else{
            try {
            const res = await updateUserProfileApi({name ,email ,password,id: userInfo._id}).unwrap()
            dispatch(setCredentials(res))
            toast.success('profile updated')
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
        }
    }

    const deleteHandler =async(e)=>{
        e.preventDefault()
        try {
            await deleteUserProfileApi({id: userInfo._id}).unwrap()
            dispatch(logout())
            navigate('/register')
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }

    }


  return (
    <div className="min-h-screen bg-[#f8f6f2] px-6 py-16">
  <div className="mx-auto w-full max-w-2xl">

    {/* TOP TEXT */}
    <div className="mb-10 text-center">
      <p className="mb-4 inline-flex items-center rounded-full border border-[#e7dfd4] bg-white px-5 py-2 text-sm font-medium text-gray-600 shadow-sm">
        Your personal space 🌿
      </p>

      <h1 className="text-5xl font-bold tracking-tight text-gray-900">
        Profile Settings
      </h1>

      <p className="mt-4 text-lg text-gray-500">
        Keep your journal universe calm, organized, and uniquely yours.
      </p>
    </div>

    {/* CARD */}
    <div className="rounded-[2rem] border border-[#ebe5dc] bg-white p-8 shadow-sm">

      {/* FORM */}
      <form
        onSubmit={submitHandler}
        className="space-y-6"
      >

        {/* NAME */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full rounded-2xl border border-[#e8e1d8] bg-[#faf8f5] px-5 py-4 text-gray-700 outline-none transition focus:border-gray-400 focus:bg-white"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-2xl border border-[#e8e1d8] bg-[#faf8f5] px-5 py-4 text-gray-700 outline-none transition focus:border-gray-400 focus:bg-white"
          />
        </div>

        {/* PASSWORD */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            New Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
            className="w-full rounded-2xl border border-[#e8e1d8] bg-[#faf8f5] px-5 py-4 text-gray-700 outline-none transition focus:border-gray-400 focus:bg-white"
          />
        </div>

        {/* CONFIRM PASSWORD */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Confirm Password
          </label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="w-full rounded-2xl border border-[#e8e1d8] bg-[#faf8f5] px-5 py-4 text-gray-700 outline-none transition focus:border-gray-400 focus:bg-white"
          />
        </div>

        {/* UPDATE BUTTON */}
        <button
          type="submit"
          className="w-full rounded-2xl bg-gray-900 py-4 text-sm font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-gray-800"
        >
          Update Profile
        </button>

      </form>

      {/* DANGER ZONE */}
      <div className="mt-12 rounded-3xl border border-red-100 bg-red-50/60 p-6">

        <h2 className="text-xl font-semibold text-red-600">
          Danger Zone
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-red-500">
          Deleting your account will erase all journals, reflections,
          memories, and saved thoughts permanently.
        </p>

        <button
          type="button"
          onClick={deleteHandler}
          className="mt-5 w-full rounded-2xl bg-red-500 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-red-600"
        >
          Delete Account
        </button>

      </div>
    </div>
  </div>
</div>
  )
}

export default ProfilePage
