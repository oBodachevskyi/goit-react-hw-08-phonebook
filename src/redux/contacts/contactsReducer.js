import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as contactsAction from './contactsAction'

const items = createReducer([], {
    [contactsAction.fetchContactsSuccess]: (state, action) => action.payload,

})

const isLoading = createReducer(false, {
    [contactsAction.fetchContactsSuccess]: () => false,
    [contactsAction.fetchContactsError]: () => false,
    [contactsAction.fetchContactsRequest]: () => true,
})

const filters = createReducer('', {
[contactsAction.handlerFilter]: (state,action) => state = action.payload
})

const error = createReducer(null, {
    [contactsAction.fetchContactsError]: (_, action) => action.payload,
    [contactsAction.fetchContactsRequest]: () => null, 
})

export default combineReducers({
    items,
    isLoading,
    error,
    filters 
})