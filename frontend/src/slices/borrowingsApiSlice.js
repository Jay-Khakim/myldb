import { BORROWINGS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const borrowingsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getBorrowings: builder.query({
            query: () => ({
                url: BORROWINGS_URL,
            }),
            keepUnusedDataFor: 5
        }),
        // addBorrowing: builder.mutation({
        //     query: (data)=>({
        //         url: BORROWINGS_URL,
        //         method: 'POST',
        //         body: data,

        //     }),
        // }),
        // deleteBorrowing: builder.mutation({
        //     query: (borrowingId) =>({
        //         url: `${BORROWINGS_URL}/${borrowingId}`,
        //         method: 'DELETE',
        //     }),
        // }),

    })
})


export const {useGetBorrowingsQuery} = borrowingsApiSlice;