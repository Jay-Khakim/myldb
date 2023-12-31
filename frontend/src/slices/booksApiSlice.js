import { BOOKS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const booksApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getBooks: builder.query({
            query: () => ({
                url: BOOKS_URL,
            }),
            keepUnusedDataFor: 5
        }),
        getBookDetails: builder.query({
            query: (bookId)=>({
                url: `${BOOKS_URL}/${bookId}`
            }),
            keepUnusedDataFor: 5
        }),
        addBook: builder.mutation({
            query: (data)=>({
                url: BOOKS_URL,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Book']
        }),
        uploadBookImage: builder.mutation({
            query: (data) => ({
              url: `/api/upload`,
              method: 'POST',
              body: data,
            }),
        }),
        deleteBook: builder.mutation({
            query: (bookId) =>({
                url: `${BOOKS_URL}/${bookId}`,
                method: 'DELETE',
            }),
        }),
        
        updateBook: builder.mutation({
            query: (data)=>({
            url: `${BOOKS_URL}/${data.bookId}`,
            method: 'PUT',
            body: data
            }),
            invalidatesTags: ['Books']
        }),

    })
})


export const {useGetBooksQuery, useGetBookDetailsQuery, useAddBookMutation, useUploadBookImageMutation, useDeleteBookMutation, useUpdateBookMutation} = booksApiSlice;