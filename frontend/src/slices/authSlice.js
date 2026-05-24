import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   userInfo :  localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null //parse means turn the string to javascript opposite of stringify
}

const authSlice = createSlice({
    name : 'auth' , 
    initialState,
    reducers :{
        setCredentials : ( state ,action )=>{//happens when user logs in , 
            state.userInfo = action.payload;//action.payload is the user data that comes from backend
            localStorage.setItem('userInfo' , JSON.stringify(action.payload)) // stringify the parsed user info and set it in local storage in order to get the userdata after refresh browser closing ...
        },
        logout :(state )=>{
            state.userInfo = null;
            localStorage.removeItem('userInfo')
        }
    }
})

export const {setCredentials ,logout} = authSlice.actions

export default authSlice.reducer