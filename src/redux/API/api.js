import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63066deadde73c0f845a7350.mockapi.io/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContactByName: builder.query({
      query: () => `contacts`,
      providesTags: [`Contacts`],
    }),
    addContact: builder.mutation({
      query: contact => ({
        url: `contacts`,
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contact => ({
        url: `contacts/${contact.id}`,
        method: 'DELETE',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const authorisationApi = createApi({
  reducerPath: 'authorisationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  endpoints: builder => ({
    signUp: builder.mutation({
      query: contact => ({
        url: `users/signup`,
        method: 'POST',
        body: contact,
      }),
    }),
    logIn: builder.mutation({
      query: contact => ({
        url: `users/login`,
        method: 'POST',
        body: contact,
      }),
    }),
  }),
});

export const {
  useGetContactByNameQuery,
  reducerPath,
  reducer,
  middleware,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
