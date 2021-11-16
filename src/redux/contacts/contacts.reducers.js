import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { filterContact, deleteContact, addContact } from '../actions';

const filterReducer = createReducer('', {
  [filterContact]: (state, { payload }) => payload,
});
const itemsReducer = createReducer([], {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, { payload }) => state.filter(item => item.id !== payload),
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

//---------------- OLD VERSION OF FILTER REDUCER--------//
// import { FILTERContact, SETContact, REMOVEContact } from './contacts.constants';
// const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case FILTERContact:
//       return action.payload;
//     default:
//       return state;
//   }
// };
//--------------------------------------------------------///

//----------OLD VERSION OF ITEMS_REDUCER--------------//
// const itemsReducer = (state = [], action) => {
//   switch (action.type) {
//     case SETContact:
//       return [...state, action.payload];
//     case REMOVEContact:
//       console.log(action);
//       return state.filter(item => item.id !== action.payload);
//     default:
//       return state;
//   }
// };
//-------------------------------------------------------////
