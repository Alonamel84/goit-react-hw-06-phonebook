import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contacts.reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});
const store = configureStore({ reducer: rootReducer });
export default store;

//--------------REDUX VERSION STORE--------------------------///
// import { composeWithDevTools } from 'redux-devtools-extension';
// const store = createStore(rootReducer, composeWithDevTools());
//-----------------------------------------------------------//

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
