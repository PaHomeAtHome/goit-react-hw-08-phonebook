import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContactByName: builder.query({
      query: token => ({
        url: `contacts`,
        headers: { Authorization: token },
      }),
      providesTags: [`Contacts`],
    }),
    addContact: builder.mutation({
      query: ({ value, token }) => ({
        url: `contacts`,
        headers: { Authorization: token },
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: ({ contact, token }) => ({
        url: `contacts/${contact.id}`,
        method: 'DELETE',
        headers: { Authorization: token },
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation({
      query: ({ newContact, token, id }) => ({
        url: `contacts/${id}`,
        method: 'PATCH',
        headers: { Authorization: token },
        body: newContact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const authorizationApi = createApi({
  reducerPath: 'authorisationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
  }),
  tagTypes: ['Token'],
  endpoints: builder => ({
    getUserInfo: builder.query({
      query: token => ({
        url: `users/current`,
        headers: { Authorization: token },
        providesTags: [`UserInfo`],
      }),
    }),
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
      providesTags: [`Token`],
      invalidatesTags: [`UserInfo`],
    }),
    logOut: builder.mutation({
      query: token => ({
        url: `users/logout`,
        method: 'POST',
        headers: { Authorization: token },
      }),
      invalidatesTags: [`UserInfo`, `Token`],
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
  useUpdateContactMutation,
} = contactsApi;
