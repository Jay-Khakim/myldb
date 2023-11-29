import { FINISHEDBOOKS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const finishedBooksApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getFinishedBooks: builder.query({
            query: () => ({
                url: FINISHEDBOOKS_URL,
            }),
            keepUnusedDataFor: 5
        }),
        // addFinishedBook: builder.mutation({
        //     query: (data)=>({
        //         url: FINISHEDBOOKS_URL,
        //         method: 'POST',
        //         body: data,

        //     }),
        // }),
        // deleteFinishedBook: builder.mutation({
        //     query: (finishedBookId) =>({
        //         url: `${FINISHEDBOOKS_URL}/${finishedBookId}`,
        //         method: 'DELETE',
        //     }),
        // }),

    })
})


export const {useGetFinishedBooksQuery} = finishedBooksApiSlice;