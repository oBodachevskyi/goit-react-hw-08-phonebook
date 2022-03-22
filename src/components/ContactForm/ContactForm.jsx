import React, { Component } from 'react';
import PropTypes from "prop-types"; 
import css from 'components/ContactForm/ContactForm.module.css'

class ContactForm extends Component {
    state = {     
        name: '',
        number: ''
      }

      handleInputChange = e => {
        this.setState({[e.currentTarget.name]:e.currentTarget.value})
      }
    
      handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.setState({name:"", number:""})
      }

    render () {
        return (
           <div className={css.contactForm}>
              <label>               
                <form onSubmit={this.handleSubmit}> 
               <label>
                   <p  className={css.contactForm__text}>Name</p>
                  
                   <input
                  type="text"
                  name="name"
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                  required
                  value={this.state.name} 
                  onChange={this.handleInputChange}
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
                value={this.state.number} 
                onChange={this.handleInputChange}
                className={css.contactForm__input}
/>
                </label>
                <br></br>
                <button type="sunmit" className={css.contactForm__button}>Add Contacts</button>
                </form>
            </label>
           </div>
            )
    }
   
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default ContactForm;

