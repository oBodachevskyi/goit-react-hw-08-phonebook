import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'


export const addContact = createAction('contacts/addContact');
export const delContact = createAction('contacts/delContact');
export const handlerFilter = createAction('contacts/handleFilter')


const reduserForContacts = createReducer({
    items: [],
    filter: ''
  }, {
   [addContact]: (state, action) => void(state.items.push(action.payload)),
   [delContact]: (state, action) => {
     const contatsListWitoutDeletedItem = state.items.filter(item => item.id !== action.payload)
     state.items = contatsListWitoutDeletedItem},
   [handlerFilter]: (state,action) => void(state.filter = action.payload)
}) 

export const store = configureStore ({
  reducer: {
    contacts: reduserForContacts,
  }
})