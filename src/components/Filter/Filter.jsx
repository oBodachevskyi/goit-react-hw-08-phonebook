import React from 'react';
import PropTypes from "prop-types"; 
import css from 'components/ContactForm/ContactForm.module.css'

const Filter = ({value, onChange}) => {
    return (  <label>
        <h3>Find contacts by name</h3>
        <input
         className={css.contactForm__input}
         value={value}  
         onChange={onChange} 
         type="text"/>
      </label>

    )
}

Filter.propTypes = {
   onChange: PropTypes.func, 
    value: PropTypes.string,
}

export default Filter