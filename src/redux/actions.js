import { createAction } from '@reduxjs/toolkit';
export const addContact = createAction('contactItem/addContact');

export const filterContact = createAction('contactItem/filterContact');

export const deleteContact = createAction('contactItem/deleteContact');

///------------REDUX VERSION ACTIONS------------------///
// import { FILTERContact, SETContact, REMOVEContact } from './contacts/contacts.vars';
// export const addContact = contact => {
//   return {
//     type: SETContact,
//     payload: contact,
//   };
// };
// export const filterContact = value => {
//   return {
//     type: FILTERContact,
//     payload: value,
//   };
// };
// export const deleteContact = id => {
//   return {
//     type: REMOVEContact,
//     payload: id,
//   };
// };
// export default addContact;
//-------------------------------------------------------------//
