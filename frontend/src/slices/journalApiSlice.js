import { apiSlice } from "./apiSlice";

const JOURNAL_URL = '/api/journals'

const journalApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        createEntry : builder.mutation({
            query: (data)=>({
                url: `${JOURNAL_URL}/create`,
                method : 'POST',
                body : data
            }),
            invalidatesTags: ["Journal"],
        }),
        getAll : builder.query({
            query: ()=>({
                url : `${JOURNAL_URL}`,
                method : 'GET'
            }),
            providesTags: ["Journal"],
        }),
        getByCategory : builder.query({
            query: (category)=>({
                url: `${JOURNAL_URL}/${category}`,
                method: 'GET'
            }),
            providesTags: ["Journal"],
        }),
        updateEntry :builder.mutation({
            query: ({id ,data})=>({
                url : `${JOURNAL_URL}/${id}`,
                method : 'PUT',
                body : data
            }),
            invalidatesTags: ["Journal"],
        }),
        deleteEntry : builder.mutation({
            query : (id)=>({
                url : `${JOURNAL_URL}/${id}`,
                method : 'DELETE'
            }),
            invalidatesTags: ["Journal"],
        })
    })
})

export const {useCreateEntryMutation , useGetAllQuery ,useGetByCategoryQuery ,useUpdateEntryMutation ,useDeleteEntryMutation} = journalApiSlice