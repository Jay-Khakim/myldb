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
        deleteQuote: builder.mutation({
            query: (quoteId) =>({
                url: `${QUOTES_URL}/${quoteId}`,
                method: 'DELETE',
            }),
        }),

    })
})


export const {useGetQuotesQuery, useAddQuoteMutation, useDeleteQuoteMutation} = quotesApiSlice;