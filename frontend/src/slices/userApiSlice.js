import { apiSlice } from "./apiSlice"

const USERS_URL = '/api/users'


const userApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        login : builder.mutation({
            query : (data)=>({
                url : `${USERS_URL}/login`,
                method : 'POST',
                body :data
            })
        }),
        register : builder.mutation({
            query : (data)=>({
                url: `${USERS_URL}/register`,
                method : 'POST',
                body:data
            })
        }),
        logout : builder.mutation({
            query : ()=>({
                url : `${USERS_URL}/logout`,
                method : 'POST',
            })
        }),
        updateUserProfile : builder.mutation({
            query : (data)=>({
                url: `${USERS_URL}/update`,
                method : 'PUT',
                body :data ,
            })
        }),
        deleteUserProfile : builder.mutation({
            query: ()=>({
                url : `${USERS_URL}/delete`,
                method : 'DELETE',
            })
        })
    })
})

export const {useLoginMutation , useRegisterMutation , useLogoutMutation ,useUpdateUserProfileMutation , useDeleteUserProfileMutation} = userApiSlice