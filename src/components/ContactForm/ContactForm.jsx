import { useState } from 'react';
import PropTypes from "prop-types"; 
import css from 'components/ContactForm/ContactForm.module.css'

export default function ContactForm (props) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('');
  
  const handleInputChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;

      case 'number':
        setNumber(e.currentTarget.value);
        break;

      default:
        return;
    }    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
     props.onSubmit(name, number)
      setName('')
      setNumber('')
  }

  return (<div className={css.contactForm}>
    <label>               
      <form  onSubmit={handleSubmit} > 
     <label>
         <p  className={css.contactForm__text}>Name</p>        
         <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name} 
        onChange={handleInputChange}
        className={css.contactForm__input}
      />
     </label>
      
     <label>
      <p  className={css.contactForm__text}>Phone</p>        
      <input
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      value={number} 
      onChange={handleInputChange}
      className={css.contactForm__input}
/>
      </label> 
      <br></br>
      <button type="submit" className={css.contactForm__button}>Add Contacts</button>
      </form>
  </label>
 </div>)
}


ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}


