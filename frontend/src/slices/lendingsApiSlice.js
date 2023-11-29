import { LENDINGS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const lendingsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getLendings: builder.query({
            query: () => ({
                url: LENDINGS_URL,
            }),
            keepUnusedDataFor: 5
        }),
        // addLending: builder.mutation({
        //     query: (data)=>({
        //         url: LENDINGS_URL,
        //         method: 'POST',
        //         body: data,

        //     }),
        // }),
        // deleteLending: builder.mutation({
        //     query: (lendingId) =>({
        //         url: `${LENDINGS_URL}/${lendingId}`,
        //         method: 'DELETE',
        //     }),
        // }),

    })
})


export const {useGetLendingsQuery} = lendingsApiSlice;