import * as contactsAction from './contactsAction';

/* import contactsAPI from '../../services/contacatsAPI' */
import axios from 'axios';

axios.defaults.baseURL = 'https://626c34eb5267c14d566e7bb3.mockapi.io';

 async function fetchContacts() {
    const { data } = await axios.get(`/contacts`);    
    return data;
}


export const fetchNewContact = (newContact) => async dispatch => {
    dispatch(contactsAction.fetchNewContactRequest()) 
  
    try {
    await axios.post(`/contacts`, newContact)
      dispatch(contactsAction.fetchNewContactSuccess()) 
      dispatch(fetchContactsList()) 
     
    } catch (error) {
        dispatch(contactsAction.fetchNewContactError(error))        
    }
    
}

export const fetchDelContact = (delContactid) => async dispatch => {
    dispatch(contactsAction.fetchDelContactRequest()) 
  
    try {
    await axios.delete(`/contacts/${delContactid}`)
      dispatch(contactsAction.fetchDelContactSuccess()) 
      dispatch(fetchContactsList()) 
     
    } catch (error) {
        dispatch(contactsAction.fetchDelContactError(error))        
    }
    
}


export const fetchContactsList = () => async dispatch => {
    dispatch(contactsAction.fetchContactsRequest())
    try {
        const contactsList = await fetchContacts();
        dispatch(contactsAction.fetchContactsSuccess(contactsList));
    } catch (error) {
        dispatch(contactsAction.fetchContactsError(error))
    }
}