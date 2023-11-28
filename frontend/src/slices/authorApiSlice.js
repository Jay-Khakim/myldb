import { AUTHORS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const authorsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getAuthors: builder.query({
            query: () => ({
                url: AUTHORS_URL,
            }),
            keepUnusedDataFor: 5
        }),

    })
})


export const {useGetAuthorsQuery,} = authorsApiSlice;