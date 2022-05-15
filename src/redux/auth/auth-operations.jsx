import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
      axios.defaults.headers.common.Authorization = '';
    },
  };

const register = createAsyncThunk('user/register', 
    async (credentials, thunkApi)  => {
        try {

            const {data} = await axios.post('/users/signup', credentials)
            token.set(data.token);
            Notiflix.Notify.success(`Вы зарегестрировались как ${credentials.name}`);
            return data;        
        } catch(error) {
        Notiflix.Notify.failure('Invalid name, username or password');
        return thunkApi.rejectWithValue();
        }
}) 

 const logIn = createAsyncThunk('user/logIn', 
    async (credentials, thunkApi) => {
        try {
            const {data} = await axios.post('/users/login', credentials)
            token.set(data.token);
            Notiflix.Notify.success(`You logIn`);
            return data; 
        } catch(error) {
          Notiflix.Notify.failure('Invalid username or password');
       return thunkApi.rejectWithValue();
        }
    } )

const logOut = createAsyncThunk('user/logOut', 
    async () => {
        try {
            const { data } = await axios.post('/users/logout');
            Notiflix.Notify.success('Спасибо что воспользовались нашей книгой:)');
            token.unset();
        
            return data;
        } catch(error) {

        }
   
})

const fetchCurrentUser = createAsyncThunk(
    'user/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
  
      token.set(persistedToken);
      try {
        const { data } = await axios.get('/users/current');
        return data;
      } catch (error) {
        }
    },
  );



export const authOperations = {
    register,
    logIn,
    logOut,
    fetchCurrentUser

}




