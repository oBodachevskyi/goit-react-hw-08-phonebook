import React from 'react';
import css from 'components/ContactForm/ContactForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { handlerFilter } from 'redux/store.js';

const Filter = () => {
    const filter = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    const filterChange = e => {
         dispatch(handlerFilter((e.currentTarget.value)))
      }
    
    return (  <label>
        <h3>Find contacts by name</h3>
        <input
         className={css.contactForm__input}
         value={filter}  
         onChange={filterChange} 
         type="text"/>
      </label>
    )
}


export default Filter