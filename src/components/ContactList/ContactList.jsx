import React  from 'react';
import PropTypes from "prop-types"; 
import css from 'components/ContactList/ContactList.module.css'

const ContactList = ({contactRender, onDeleteContact}) =>
    (<div className={css.contactList__container}>
        <ul>
        {contactRender.map(({id, name, number}) => 
            (<li className={css.containerList__item} key={id}>{name}: {number}
                <button type="button" onClick={() => onDeleteContact(id)} >Delete</button>
            </li>))} 
     </ul>
    </div>);


ContactList.propTypes = {
    contactRender: PropTypes.array,
    onDeleteContact: PropTypes.func,
  }

export default ContactList