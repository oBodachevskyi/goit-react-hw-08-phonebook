import { createAction } from "@reduxjs/toolkit";

//pending
export const fetchContactsRequest = 
createAction('contacts/fetchContactsRequest')

// fulfield 
export const fetchContactsSuccess = 
createAction('contacts/fetchContactsSuccess')

//rejected
export const fetchContactsError = 
createAction('contacts/fetchContactsError')


// adding new contact 

export const fetchNewContactRequest = 
createAction('contacts/fetchNewContactRequest')
 
export const fetchNewContactSuccess = 
createAction('contacts/fetchNewContactSuccess')

export const fetchNewContactError = 
createAction('contacts/fetchContactsError')





export const fetchDelContactRequest = 
createAction('contacts/fetchNewContactRequest')
 
export const fetchDelContactSuccess = 
createAction('contacts/fetchNewContactSuccess')

export const fetchDelContactError = 
createAction('contacts/fetchContactsError')

export const handlerFilter = 
createAction('contacts/handleFilter')

