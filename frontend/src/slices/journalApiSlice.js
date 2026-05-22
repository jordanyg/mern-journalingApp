import { apiSlice } from "./apiSlice";

const JOURNAL_URL = '/api/journals'

const journalApiSlice = apiSlice.injectEndpoints({
    endpoints : (builder)=>({
        createEntry : builder.mutation({
            query: (data)=>({
                url: `${JOURNAL_URL}/create`,
                method : 'POST',
                body : data
            })
        }),
        getAll : builder.mutation({
            query: ()=>({
                url : `${JOURNAL_URL}`,
                method : 'GET'
            })
        }),
        getByCategory : builder.mutation({
            query: (category)=>({
                url: `${JOURNAL_URL/category}`,
                method: 'GET'
            })
        }),
        updateEntry :builder.mutation({
            query: (id)=>({
                url : `${JOURNAL_URL/id}`,
                method : 'PUT'
            })
        }),
        deleteEntry : builder.mutation({
            query : (id)=>({
                url : `${JOURNAL_URL/id}`,
                method : 'DELETE'
            })
        })
    })
})

export const {useCreateEntryMutation , useGetAllMutation ,useGetByCategoryMutation ,useUpdateEntryMutation ,useDeleteEntryMutation} = journalApiSlice