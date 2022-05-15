import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


 const fetchContacts = async() => {
    const { data } = await axios.get(`/contacts`);    
    return data;
}


export const fetchNewContact = createAsyncThunk('contacts/fetchNewContact',
    async(newContact, thunkAPI) => { 
        await axios.post(`/contacts`, newContact)
        thunkAPI.dispatch(fetchContactsList())
    }) 

export const fetchDelContact = createAsyncThunk('contacts/fetchDelContacts', 
async(delContactId, thunkAPI) => {
    await axios.delete(`/contacts/${delContactId}`)
    thunkAPI.dispatch(fetchContactsList())
})


export const fetchContactsList = createAsyncThunk('contacts/fetchContactsList',
async() => {
    const contactsList = await fetchContacts();
    return contactsList
});
