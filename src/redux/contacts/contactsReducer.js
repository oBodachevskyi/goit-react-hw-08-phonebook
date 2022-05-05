import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {fetchContactsList, fetchNewContact, fetchDelContact} from './contactsOperations'
import { handlerFilter } from './contactsAction'

const items = createReducer([], {
    [fetchContactsList.fulfilled]: (state, action) => action.payload,

})

const error = createReducer(null, {
    [fetchContactsList.rejected]: (_, action) => action.payload,
    [fetchContactsList.pending]: () => null, 

    [fetchNewContact.rejected]: (_, action) => action.payload,
    [fetchNewContact.pending]: () => null, 
    
    [fetchDelContact.rejected]: (_, action) => action.payload,
    [fetchDelContact.pending]: () => null, 
}) 

const isLoading = createReducer(false, {
    [fetchContactsList.fulfilled]: () => false,
    [fetchContactsList.pending]: () => false,
    [fetchContactsList.rejected]: () => true,

    [fetchNewContact.fulfilled]: () => false,
    [fetchNewContact.pending]: () => false,
    [fetchNewContact.rejected]: () => true,

    [fetchDelContact.fulfilled]: () => false,
    [fetchDelContact.pending]: () => false,
    [fetchDelContact.rejected]: () => true,
})

const filters = createReducer('', {
[handlerFilter]: (state,action) => state = action.payload
})



export default combineReducers({
    items,
    isLoading,
    error, 
    filters 
})