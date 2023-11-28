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

    })
})


export const {useGetQuotesQuery,} = quotesApiSlice;