import { QUOTES_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const quotesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getQuotes: builder.query({
            query: () => ({
                url: QUOTES_URL,
            }),
            keepUnusedDataFor: 5
        }),
        addQuote: builder.mutation({
            query: (data)=>({
                url: QUOTES_URL,
                method: 'POST',
                body: data,

            }),
        }),

    })
})


export const {useGetQuotesQuery, useAddQuoteMutation} = quotesApiSlice;