import { createReducer } from '@reduxjs/toolkit';
import { changeFilter, changeToken } from 'redux/actions/actions';

const preloadedState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const filterReducer = createReducer(preloadedState.contacts, builder => {
  builder.addCase(changeFilter, (state, action) => {
    const { value } = action.payload;
    state.filter = value;
  });
});

export const tokenReducer = createReducer({}, builder => {
  builder.addCase(changeToken, (state, action) => {
    const { data } = action.payload;
    return { ...data };
  });
});
